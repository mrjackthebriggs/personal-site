<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	const colorTheme = $state({
		
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<style>
/* base text settings, global specialisations bellow*/ 
:global(h1,h2,h3,h4,h5){
	padding: 5px 20px;
	color: blue;
}
:global(p){
	padding: 2px 20px;
}
nav{
	background-color: green;
	padding: 15px;
	margin: auto 15px;
	border: 4px darkgreen solid;
	border-radius: 40px 10px;
	justify-content: space-around;
}
nav>a{
	color: yellow;
	margin: 0px 20px;    
}
</style>
<nav>
	<a href="/">Home</a>
	<a href="/resume">Resume</a>
	<a href="/projects">Projects</a>
	<a href="/politics">Politics</a>
	<a href="/music">Music</a>
	<a href="/skateboarding">Skateboarding</a>
</nav>

<h2>header </h2>
<h3>header </h3>
<h4>header </h4>
<h5>header </h5>

{@render children()}

<footer>
	Bungee font by 2023 The Bungee Project Authors
	<br>
	Space mono font by 2016 The Space Mono Project Authors
</footer>
