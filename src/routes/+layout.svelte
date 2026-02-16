<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	const colorTheme = {
		
	};

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<style>
/* need to find way to bleed down css? */ 
:global(h1){
	padding: 10px 20px;
	color: blue;
}
:global(p){
	padding: 5px 20px;
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

{@render children()}
