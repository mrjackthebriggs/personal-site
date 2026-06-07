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
	let currentTheme = $state('dark'); 

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
		padding: 2px 80px;
		font-family: SpaceMono-reg, sans-serif;
		color: var(--foreground);
	}

	:global(h1,h2,h3,h4,h5){
		font-family: Bungee, Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		padding: 2px 80px;
		color: var(--foreground);
	}
	nav {
			width: 90%;
			margin: 0% 5% 0% 5%;
			border-bottom: 1px solid #ddd;
			padding: 0 0;
			display: flex;
			justify-content: start;
			flex-direction: row;
			background-color: var(--background);
			/* border: 2px solid green; */
		}

  nav>a {
    text-decoration: none;
    color: var(--foreground);
    font-weight: 500;
		margin: 0px;
		padding:0px 3%;
  }

  nav>a:hover {
    color: var(--secondary-accent);
  }
	nav>a[aria-current=true]{
		text-decoration-line: underline;
  	text-decoration-color: var(--primary-accent);
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
		margin: 0 10%;
		color: var(--primary-accent);
		background-color: var(--background);
		border: 2px solid var(--primary-accent);
		border-radius: 4px;
	}

	.dropdown {
		position: absolute;
		padding: 0;
		margin: 0;
		transition: all 1s ease-out;
		list-style-type: none;
		display: flex;
		flex-direction: column;
		justify-content:left;
		align-items:first baseline;
		z-index: 100;
		/* border: 2px solid red; */

	}
	.dd-link-btn{
		padding: 0;
		margin: 0;
		/* border: 2px solid blue; */
	}

	.theme-btn{
		font-size: 18px;
		cursor: pointer;
		width: 40px;
		height: 40px;
		margin: 0 10%;
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
		--grey: #929292;
	}
	:global(html[data-theme="dark"]) {
		--background: #34342f;
		--foreground: rgb(255, 246, 217);
		--primary-accent: #ff6b6b;
		--secondary-accent: #4ecdc4;
		--shadow: rgba(255, 255, 255, 0.8);
		--light-shadow: rgba(255, 255, 255, 0.55);
		--grey: #6b6b6b;
	}
	:global(html, body) {
    background-color: var(--background) !important; /* !important temporarily forces past UI libraries to test */
    color: var(--foreground);
    transition: background-color 0.2s ease;
    margin: 0;
    height: 100%;
  }
</style>

<div 
>
{#if colapsableNav}
		<button class="dd-btn"
		onclick={() => expandedDropdown = !expandedDropdown}
		>≡</button>
{/if}

{#if !colapsableNav}
	<nav>
		{#each tabs as {href,name}}
			<a 
			aria-current={page.url.pathname === href}
			style:font-size= {pageWidth > 700 ? 16 : (((pageWidth)/tabs.length/7))}px
			href="{href}">{name}</a>
		{/each}
		<button class="theme-btn"
		onclick={toggle}
		>🌓</button>
	</nav>
{/if}

{#if colapsableNav && expandedDropdown}
	<ul class="dropdown"
	in:fly={{y:-200, duration: 1000}}
	out:fly={{y:-200, duration: 1000}}
	>
			{#each tabs as {href,name}}
				<li>
					<button class="dd-link-btn" onclick={() => expandedDropdown = false}>
					<a 
					aria-current={page.url.pathname === href}
					style:padding={pageWidth/(tabs.length*6)}px
					style:font-size= {pageWidth > 700 ? 16 : (((pageWidth)/tabs.length/7))}px
					href="{href}">{name}</a>
					</button>
				</li>
			{/each}
	</ul>
{/if}
</div>
<main>
	{@render children()}
</main>

<footer>
	©2026 Jack Briggs
</footer>
