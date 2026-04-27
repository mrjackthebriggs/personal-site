<script lang='ts'>
  import type { imgData } from '$lib/components/DataObjects'; // or keep your interface here

  let {images, imageWidth, compWidth} = $props<{
    images: Record<string, { default: imgData }>,
    imageWidth?: number,
    compWidth?: number
  }>();

  let imgViewIndex = $state(0);
  let pics:[string,{ default: imgData }][] = $derived(Object.entries(images));
  let offset = $derived(imgViewIndex * imageWidth);
</script>

<style>
  .container {
    display: grid;
    place-items: center;
    justify-content: space-around;
    padding: 2vh 0;
    overflow: hidden;
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
    overflow: hidden;
    mask-image: linear-gradient(to right,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,1) 20%,
      rgba(0,0,0,1) 80%,
      rgba(0,0,0,0) 100%
    );
  }

  .track {
    display: flex;
    transition: transform 0.4s ease;
  }

  .track>* {
    flex-shrink: 0;
    margin: 0 2px;
  }
</style>

<div class="container" style="width:{compWidth}px; height:{imageWidth}px;">

  <button
    style="grid-column:1"
    onclick={() => { if (imgViewIndex > 0) imgViewIndex -= 1 }}
  >Back</button>

  <div class="track-wrapper" style="width:{compWidth * 0.7}px; grid-column:2;">
    <div class="track" style="transform: translateX(-{offset}px);">
      <div class="img-spacer"
      style="
      width:40%; 
      min-width:{imageWidth}px; 
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