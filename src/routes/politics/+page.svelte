<script lang="ts">
  import type { Component } from 'svelte';
  import StyleTitle from "$lib/components/StyleTitle.svelte";
  import polpic from '$lib/images/title-pictures/polpic.png';

  export let data: {
    articleData: {
      slug: string;
      title: string;
      description: string;
      path: string;
    }[];
  };

  type ArticleModule = { default: Component };
  const articleLoaders = import.meta.glob('./Articles/*.md') as Record<
    string,
    () => Promise<ArticleModule>
  >;

  let expandedSlug: string | null = null;
  let loadingSlug: string | null = null;
  let articleComponents: Record<string, Component> = {};

  // Essentially a switch function, could be turned into a switch statement.
  async function toggleArticle(slug: string) {
    if (expandedSlug === slug) {
      expandedSlug = null;
      return;
    }

    expandedSlug = slug;
    if (articleComponents[slug]) return;

    const loader = articleLoaders[`./Articles/${slug}.md`];
    if (!loader) return;

    loadingSlug = slug;
    const module = await loader();
    articleComponents[slug] = module.default;
    loadingSlug = null;
  }
</script>

<StyleTitle
  title="Political Rantings"
  photo={polpic}
  alt="Conquest for Bread and some of Mao Ze Dongs writings"
/>

{#if data.articleData.length > 0}
  {#each data.articleData as article}
    <article style="margin-bottom: 1.5rem;">
      <h2>{article.title}</h2>
      {#if article.description}
        <p>{article.description}</p>
      {/if}

      <button type="button" on:click={() => toggleArticle(article.slug)}>
        {expandedSlug === article.slug ? 'Hide article' : 'Read more'}
      </button>

      {#if expandedSlug === article.slug}
        {#if loadingSlug === article.slug}
          <p>Loading article…</p>
        {:else if articleComponents[article.slug]}
          <div class="expanded-article" style="margin-top: 1rem;">
            <svelte:component this={articleComponents[article.slug]} />
          </div>
        {:else}
          <p>Unable to load article.</p>
        {/if}
      {/if}
    </article>
  {/each}
{:else}
  <p>No articles found yet.</p>
{/if}

