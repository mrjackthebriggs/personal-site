<script lang="ts">
	import { page, navigating } from '$app/state';
	
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



	const colorTheme = $state({
		
	});

	let { children } = $props();
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

	:global(p,a){
		padding: 2px 80px;
		font-family: SpaceMono-reg, sans-serif;
	}
	nav {
			width: 90%;
			margin: 0% 5% 0% 5%;
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
		style:padding={pageWidth/(tabs.length*6)}px
		style:font-size= {pageWidth > 700 ? 16 : (((pageWidth)/tabs.length/7))}px
		href="{href}">{name}</a>
		{/each}
</nav>

<main>
	{@render children()}
</main>

<footer>
	Bungee font by 2023 The Bungee Project Authors
	<br>
	Space mono font by 2016 The Space Mono Project Authors
</footer>
