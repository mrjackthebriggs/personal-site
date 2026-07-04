<script lang="ts">
  import StyleTitle from "$lib/components/StyleTitle.svelte";
  import Resume from './resume.svelte'
  import respic from "$lib/images/title-pictures/resumepic.png"
</script>

<StyleTitle
title="Resume"
photo={respic}
alt="a keyboard"
/>

<Resume/>
