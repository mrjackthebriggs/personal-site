<script lang="ts">
  import type { Component } from 'svelte';
  import ArticleTile from './ArticleTile.svelte';
  import StyleTitle from "$lib/components/StyleTitle.svelte";
  import polpic from '$lib/images/title-pictures/polpic.png';
  import type { articleData } from '$lib/components/DataObjects';

  export let data: {
    articleData: articleData[];
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
    <ArticleTile
      article={article}
      articleLoader={() => articleLoaders[`./Articles/${article.slug}.md`]()}
      delay={0}
    />
  {/each}
{:else}
  <p>No articles found yet.</p>
{/if}

