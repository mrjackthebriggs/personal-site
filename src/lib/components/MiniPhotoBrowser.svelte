<script lang='ts'>
  import type { imgData } from '$lib/components/DataObjects'; // or keep your interface here

  let {images, imageWidth} = $props<{
    images: Record<string, { default: imgData }>,
    imageWidth?: number,
  }>();

  const imageMultiplier = 1.5;  // how wide the track is compared to the image width, adjust as needed
  let imgViewIndex = $state(0);
  let pics:[string,{ default: imgData }][] = $derived(Object.entries(images));
  let offset = $derived((imgViewIndex * imageWidth) * 1.05);
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: 5% auto 5%;
    align-items: center;
    align-content: start;
    justify-content: start;
    padding: 2vh 0;
    height:auto;
    border: 2px solid pink;
  }

  button {
    font-family: SpaceMono-reg, sans-serif;
    border-radius: 50px;
    height: 50px;
    width: 50px;
    min-width: 50px;
    min-height: 50px;
    box-shadow: 1px 1px 5px gray;
    z-index: 1;
  }

  .track-wrapper {
    mask-image: linear-gradient(to right,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,1) 20%,
      rgba(0,0,0,1) 80%,
      rgba(0,0,0,0) 100%
    );
    border: 2px solid brown;
  }

  .track {
    display: flex;
    transition: transform 0.4s ease;
    border: 2px solid red;
  }

  .track>* {
    flex-shrink: 0;
    margin: 0 2px;
    border: 2px solid blue;
  }
</style>

<div class="container">

  <button
    style="grid-column:1"
    onclick={() => { if (imgViewIndex > 0) imgViewIndex -= 1 }}
  >Back</button>

  <div class="track-wrapper" style="max-width:{imageWidth * imageMultiplier}px; grid-column:2;">
    <div class="track" style="transform: translateX(-{offset}px);">
      <div class="img-spacer"
      style="
      width:{(imageWidth * imageMultiplier)/8}px; 
      "
      ></div>
      {#each pics as [_path, mod], i}      
        <enhanced:img 
        id={_path}
        style="
        width:{imageWidth}px;
        height:auto;
        "
        src={mod.default} 
        alt="Project Images" />
      {/each}
    </div>
  </div>

  <button
    style="grid-column:3"
    onclick={() => { if (imgViewIndex < pics.length - 1) imgViewIndex += 1 }}
  >Next</button>

</div>