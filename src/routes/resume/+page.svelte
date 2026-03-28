<script lang="ts">
  import StyleTitle from "$lib/components/StyleTitle.svelte";
  import Resume from './resume.svelte'
  import respic from "$lib/images/title-pictures/resumepic.png"
</script>

<style>
  p{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border: 2px solid black;
  }
</style>
<p>poopy</p>

<StyleTitle
title="Resume"
photo={respic}
alt="a keyboard"
/>

<Resume/>
