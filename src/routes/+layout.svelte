<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { page, navigating } from '$app/state';

	let pageWidth = $state(0);
	const tabs = [
		{href:"/",name:"Home"},
		{href:"/resume",name:"Resume"},
		{href:"/projects",name:"Projects"},
		{href:"/politics",name:"Politics"},
		{href:"/music",name:"Music"},
		{href:"/skateboarding",name:"Skateboarding"}
	]
	const colorTheme = $state({
		
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
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

	:global(h1,h2,h3,h4,h5){
		padding: 5px 40px;
		font-family:Bungee,Arial, Helvetica, sans-serif;
	}
	:global(p,a){
		padding: 2px 80px;
		font-family: SpaceMono-reg, sans-serif;
	}
	nav {
			width: 90%;
			padding: 5%;
			border-bottom: 1px solid #ddd;
			padding: 1rem 0;
		}

  nav>a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }

  nav>a:hover {
    color: #00a2ff; /* Svelte Orange */
  }
	nav>a[aria-current=true]{
		text-decoration-line: underline;
  	text-decoration-color: red;
		font-family: SpaceMono-bold, sans-serif;
		
	}
	footer{
		padding: 40px 20px;
		display: flex;
    justify-content: center;
	}
</style>
<nav>
		<!--need to fix scaling--> 
		{#each tabs as {href,name}}
		<a 
		aria-current={page.url.pathname === href}
		style:padding={pageWidth/(tabs.length*4)}px
		style:font-size= {pageWidth > 700 ? 16 : (((pageWidth)/tabs.length/8))}px
		href="{href}">{name}</a>
		{/each}
</nav>

<p></p>

{@render children()}

<footer>
	Bungee font by 2023 The Bungee Project Authors
	<br>
	Space mono font by 2016 The Space Mono Project Authors
</footer>
