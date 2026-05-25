<script lang="ts">
  import StyleTitle from "$lib/components/StyleTitle.svelte";
  import polpic from '$lib/images/title-pictures/polpic.png';

  export let data: {
    slug: string;
    title: string;
    description: string;
  };

  const modules = import.meta.glob('../Articles/*.md');
  const articleImport = modules[`../Articles/${data.slug}.md`];

  const articlePromise = articleImport
    ? articleImport().then((module) => module.default)
    : Promise.reject(new Error('Article not found'));
</script>

<StyleTitle
  title={data.title}
  photo={polpic}
  alt={data.title}
/>

{#if data.description}
  <p>{data.description}</p>
{/if}

{#await articlePromise then Article}
  <svelte:component this={Article} />
{:catch}
  <p>Article content could not be loaded.</p>
{/await}
