<!-- Derivitive of Project tile, couldn't be bother adding a "Tile" abstract type, so copy paste we go! -->
<script lang="ts">
	import type { articleData } from '$lib/components/DataObjects';
	import { fly } from 'svelte/transition';
	import { onMount, tick } from 'svelte';
	import type { Component } from 'svelte';

	const titleMaxLength = 80;
	const descriptionMaxLength = 400;

	let tileExpanded = $state(false);
	let mediaWidth:number = $state(0);
	let mounted = $state(false);

	type ArticleModule = { default: Component };
	let {article, articleLoader, delay = 0} = 
		$props<{article: articleData, articleLoader: () => Promise<ArticleModule>, delay:number}>();

	let expandedSlug: string | null = $state(null);
	let loadingSlug: string | null = $state(null);
	let loadedComponent: Component | null = $state(null);
	let tileTop: number | null = null;
	let tileEl: HTMLElement | null = null;

	// Essentially a switch function, could be turned into a switch statement.
  async function toggleArticle(slug: string) {
    if (expandedSlug === slug) {
      expandedSlug = null;
      return;
    }

    expandedSlug = slug;
    if (loadedComponent) return;

    const loader = articleLoader;
    if (!loader) return;

    loadingSlug = slug;
    const module = await loader();
    loadedComponent = module.default;
    loadingSlug = null;
  }

	// Testing
	let layoutTitle: string = $derived(tileExpanded? article.title :
		article.title.length > titleMaxLength ? article.title.slice(0, titleMaxLength) + '...' : article.title
	);
	let layoutDescription: string = $derived(tileExpanded? article.description :
		article.description.length > descriptionMaxLength
			? article.description.slice(0, descriptionMaxLength) + '...'
			: article.description
	);

	onMount(() => {
		mounted = true;
	});

</script>

<style>
	/* I don't know why this needs to be imported for the .md files to load the style, but it does. */
	@import './articleStyle.css';	

	.main-cont {
		border: 2px black solid;
		border-radius: 20px 30px 20px 5px;
		box-shadow: 5px 5px rgba(58, 58, 58, 0.8);
		padding: 40px 40px;
		background-color: white;
		/* border: 2px solid red; */
	}
	.main-cont-shrunk {
		margin-top: 40px;
		margin-bottom: 40px;
		margin-left: 10%;
		max-width:70%;
		transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
		/* border: 2px solid blue; */
	}
	.main-cont-exp {
		margin: 40px 5%;
		max-width:100%;
		width:auto;
		transition: all 1.6s cubic-bezier(0.34, 1.56, 0.64, 1);
		/* border: 2px solid green; */
	}
	.main-cont:hover {
		box-shadow: 24px 24px rgba(58, 58, 58, 0.5);
		transform: translate(-0.5vh, -0.5vw);
	}
	.expand-button {
		margin: 10px;
		border: 4px black solid;
		border-radius: 4px;
		font-size: 18px;
		font-weight: bold;
		text-align: center;
		width: auto;
		padding: 10px 20px;
		transition: all 0.2s cubic-bezier(0.25, 0.82, 0.165, 1);
		box-shadow: 5px 5px rgba(91, 91, 91, 0.8);
	}
	.expand-button:active {
		box-shadow: 2px 2px rgba(58, 58, 58, 0.8);
		border: 3px black solid;
		transform: translate(5px, 5px);
	}
	.content {
		display: flex;
		margin: 0px;
		flex-wrap: wrap;
		justify-content: center;
		align-content:start;
		/* border: 2px solid orange; */
	}
	.content-exp{
		padding: 10px;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		/* border: 2px solid purple; */
	}
	.content-shrunk{
		padding: 20px;
		flex-direction: row;
		/* gap: 30px; add spacing between text and photo viewer */
		/* border: 2px solid cyan; */
	}
	.media-content {
		display: flex;
		justify-content: center;
		align-items: center;
		width:auto;
		height:auto;
		flex:1;
		align-self: center;
		flex-direction: column; 
		/* border: 2px solid magenta; */
	}
	.text-content {
		flex:1;
		max-width: 100%;
    display: flex;
    flex-direction: column;
		/* border: 2px solid brown; */
	}
	.text-content h1 {
		font-size: 36px;
	}
	  .md-page {
    padding: 0% 50%;
    display: flex;
    flex-direction: column;
    align-items: center;   
    
  }
</style>

{#if mounted}
<div 
bind:this={tileEl}
class="main-cont {tileExpanded ? 'main-cont-exp' : 'main-cont-shrunk'}"
in:fly={{ x:0, y: 40, duration: 1000, delay: delay }}
>
	<div 
	bind:clientWidth=	{mediaWidth}
	class="content {tileExpanded ? 'content-exp' : 'content-shrunk'}">
		<div class="text-content">
			{#if expandedSlug === null}
				<h1>{layoutTitle}</h1>
				{#if article.author}
					<p><i>By {article.author}</i></p>
				{:else}
					<p><i>By Unknown Author</i></p>
				{/if}
				{#if article.description}
					<p>{layoutDescription}</p>
				{/if}
			{/if}
			{#if expandedSlug === article.slug}
				{#if loadingSlug === article.slug}
					<p>Loading article…</p>
				{:else if loadedComponent}
					<div class="expanded-article" style="margin-top: 1rem;">
						<svelte:component class="md-page" this={loadedComponent} />
					</div>
				{:else}
					<p>Unable to load article.</p>
				{/if}
			{/if}
		</div>
		{#if article.img && !tileExpanded}
		<div class="media-content"
		style="min-width:{tileExpanded ? '80%' : '40%'};">
				<p
				style="color: rgba(20, 20, 20, 0.5); font-size: 0.8rem;"
				><i>Posted at {article.datetime}</i></p>
				<enhanced:img src={article.img} />
		</div>
		{/if}
	</div>
	<button 
	type="button" 
	class="expand-button"
	onclick={async () => {
		if (!tileExpanded) {
			tileTop = tileEl ? tileEl.getBoundingClientRect().top + window.scrollY : 0;
		}
		else if (tileExpanded && tileTop !== null) {
			window.scrollTo({ top: tileTop, behavior: 'auto' });
		}
		toggleArticle(article.slug);
		tileExpanded = !tileExpanded;
	}}>
    {expandedSlug === article.slug ? 'Collapse' : 'Read more'}
  </button>
</div>
{/if}