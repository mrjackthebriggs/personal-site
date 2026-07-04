<script lang="ts">
	import { page, navigating } from '$app/state';
	import {fly, fade} from 'svelte/transition';
	
	//image imports
	import pic1 from '$lib/images/title-pictures/pic1.png';

	let pageWidth = $state(0);
	const tabs = [
		{href:"/",name:"Home"},
		{href:"/resume",name:"Resume"},
		{href:"/projects",name:"Projects"},
		{href:"/politics",name:"Politics"},
		{href:"/tech-blog",name:"Tech Blog"},
		{href:"/music",name:"Music"},
		{href:"/my-photos",name:"Photos"},
		{href:"/skateboarding",name:"Skateboarding"}
	]

	let colapsableNav = $derived(pageWidth < 1000);
	let expandedDropdown = $state(false);

	$effect(() => {
		colapsableNav = pageWidth < 1000;
		if (!colapsableNav) {
			expandedDropdown = false;
		}
	});

	const colorTheme = $state({
		
	});

	let { children } = $props();
	let currentTheme = $state('light'); 

  $effect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  });

  function toggle() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  }
</script>

<svelte:head>
</svelte:head>
<svelte:window bind:innerWidth={pageWidth} />
<style>
/* base text settings, global specialisations bellow*/ 
@font-face {
  font-family: 'Bungee';
  src: url('$lib/fonts/Bungee-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Bungee-Hollow';
  src: url('$lib/fonts/BungeeShade-Regular.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'SpaceMono-reg';
  src: url('$lib/fonts/SpaceMono-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'SpaceMono-bold';
  src: url('$lib/fonts/SpaceMono-Bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Noto-Sans';
  src: url('$lib/fonts/NotoSans-VariableFont_wdth,wght.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Noto-Sans';
  src: url('$lib/fonts/NotoSans-Italic-VariableFont_wdth,wght.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'Special-Elite';
  src: url('$lib/fonts/SpecialElite-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

	:global(p,a,li,span){
		font-family: SpaceMono-reg, sans-serif;
		color: var(--foreground);
	}

	:global(h1,h2,h3,h4,h5){
		font-family: Bungee, Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		color: var(--foreground);
	}
	nav {
			margin: 5px 3% 0px 3%;
			border-bottom: 2px solid var(--grey);
			padding: 0 20px 0 20px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-direction: row;
			background-color: var(--background);
			/* border: 2px solid green; */
		}

  nav>a {
    text-decoration: none;
    color: var(--foreground);
    font-weight: 500;
		margin: 0px;
		padding:0px;
		transition: all 0.4s ease; 
		white-space: nowrap;
  }

  nav>a:hover {
    color: var(--secondary-accent);
  }
	nav>a[aria-current=true]{
		text-decoration-line: underline;       
		text-decoration-style: wavy;         
		text-decoration-color: var(--primary-accent);
		text-decoration-thickness: 2px;
		text-underline-offset: 4px;   
		font-family: SpaceMono-bold, sans-serif;
	}

	.nav-cont{
		transition: all 0.5s ease-out;
	}

	.dd-btn{
		font-size: 24px;
		cursor: pointer;
		width: 40px;
		height: 40px;
		margin: 5px 0px;
		color: var(--foreground);
		background-color: var(--background);
		border: 2px solid var(--primary-accent);
		border-radius: 5px;
	}

	.dropdown {
		position: absolute;
		padding: 10px 10px;
		margin: 0px 5%;
		transition: all 1s ease-out;
		list-style-type: none;
		display: flex;
		flex-direction: column;
		justify-items:start;
		align-items:start;
		z-index: 100;
		background-color: var(--background);
		border: 2px solid var(--primary-accent);
		border-radius: 20px;
		/* border: 2px solid red; */

	}
	.dd-link-btn{
		padding: 7px 0px;
		margin: 2px 0px;
		color: var(--foreground);
		background-color: var(--background);
		border: 2px solid var(--grey);
		border-radius: 4px;
		transition: all 0.4s ease; 
		/* border: 2px solid blue; */
	}

	.dd-link-btn:hover{
		border: 2px solid var(--primary-accent);
		box-shadow: 2px 2px var(--light-shadow);
	}

	.dd-link-btn > a{
		text-decoration-line: none; 
	}

	.dd-link-btn > a[aria-current=true] {
		text-decoration-line: underline;       
		text-decoration-style: wavy;         
		text-decoration-color: var(--primary-accent);
		text-decoration-thickness: 2px;
		text-underline-offset: 3px;
	}

	.theme-btn{
		font-size: 18px;
		cursor: pointer;
		width: 40px;
		height: 40px;
		margin: 5px 0px;
		color: var(--primary-accent);
		background-color: var(--background);
		border: 2px solid var(--primary-accent);
		border-radius: 4px;
	}
	footer{
		padding: 40px 20px;
		display: flex;
    justify-content: center;
		background-color: var(--background);
	}
	main{
		background-color: var(--background);
		color: var(--foreground);
	}
	:global(html[data-theme="light"]) {
		--background: rgb(255, 246, 217);
		--foreground: black;
		--primary-accent: #ea2e2e;
		--secondary-accent: #8dd2ff;
		--shadow: rgba(0, 0, 0, 0.8);
		--light-shadow: rgba(0, 0, 0, 0.55);
		--grey: #745454;
	}
	:global(html[data-theme="dark"]) {
		--background: #34342f;
		--foreground: rgb(255, 246, 217);
		--primary-accent: #ff6b6b;
		--secondary-accent: #4ecdc4;
		--shadow: rgba(0, 0, 0, 0.8);
		--light-shadow: rgba(0, 0, 0, 0.55);
		--grey: #af9393;
	}
	:global(html, body) {
    background-color: var(--background) !important; /* !important temporarily forces past UI libraries to test */
    color: var(--foreground);
    transition: background-color 0.2s ease;
    margin: 0;
    min-height: 100%;
    width: 100%;
    overflow-x: hidden;
    scrollbar-gutter: stable;
  }

	:global(html) {
		overflow-y: scroll;
	}
</style>
<nav>
{#if colapsableNav}

		<button class="dd-btn"
		onclick={() => expandedDropdown = !expandedDropdown}
		>≡</button>
		<button class="dd-link-btn" onclick={() => expandedDropdown = false}>
		<a 
		aria-current={page.url.pathname === "/"}
		style:padding={pageWidth/(tabs.length*6)}px
		style:font-size= {pageWidth > 700 ? 16 : (((pageWidth)/tabs.length/5))}px
		style="font-family: Bungee, sans-serif;"
		href="/">Jack Briggs</a>
	</button>
{/if}

{#if !colapsableNav}
		{#each tabs as {href,name}}
			{#if name.toLowerCase()==="home"}
					<a 
				aria-current={page.url.pathname === href}
				style:font-size= {pageWidth > 700 ? 16 : (((pageWidth)/tabs.length/7))}px
				style="font-family: Bungee, sans-serif;"
				href="{href}">Jack Briggs</a>
			{:else}
				<a 
				aria-current={page.url.pathname === href}
				style:font-size= {pageWidth > 700 ? 16 : (((pageWidth)/tabs.length/7))}px
				href="{href}">{name}</a>
			{/if}
		{/each}
{/if}


<button class="theme-btn"
		onclick={toggle}
		>🌓</button>
</nav>
{#if colapsableNav && expandedDropdown}
	<ul class="dropdown"
	in:fly={{y:-200, duration: 600}}
	out:fly={{y:-200, duration: 600}}
	>
			{#each tabs as {href,name}}
				{#if name.toLowerCase()!=="home"}
					<li>
						<button class="dd-link-btn" onclick={() => expandedDropdown = false}>
							<a 
							aria-current={page.url.pathname === href}
							style:padding={pageWidth/(tabs.length*6)}px
							style:font-size= {pageWidth > 700 ? 16 : (((pageWidth)/tabs.length/5))}px
							href="{href}">{name}</a>
						</button>
					</li>
				{/if}
			{/each}
	</ul>
{/if}

<main>
	{@render children()}
</main>

<footer>
	©2026 Jack Briggs
</footer>
