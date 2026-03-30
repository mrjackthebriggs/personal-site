<script lang='ts'>

  let {images}:{images:Record<string,{ default: string }>} = $props();
</script>

{#each Object.entries(images) as [_path, module]}
	<enhanced:img src={module.default} alt="some alt text" />
{/each}

