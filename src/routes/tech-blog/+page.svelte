<script lang="ts">
  import type { Component } from 'svelte';
  import ArticleTile from '$lib/components/ArticleTile.svelte';
  import StyleTitle from "$lib/components/StyleTitle.svelte";
  import comppic from '$lib/images/title-pictures/comp.png';
  import type { articleData, ArticleModule } from '$lib/components/DataObjects';

  export let data: {
    articleData: articleData[];
  };

  data.articleData.sort((a: articleData, b: articleData) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());

  const articleLoaders = import.meta.glob('./Articles/*.md') as Record<
    string,
    () => Promise<ArticleModule>
  >;

</script>

<StyleTitle
  title="Tech Tales"
  photo={comppic}
  alt="A picture of a computer"
/>

{#if data.articleData.length > 0}
  {#each data.articleData as article, i}
    <ArticleTile
      article={article}
      articleLoader={() => articleLoaders[`./Articles/${article.slug}.md`]()}
      delay={0}
      flipped={i % 2 == 0 ? false : true}
    />
  {/each}
{:else}
  <p
  style="margin:10%;"
  >No articles found yet.</p>
{/if}

