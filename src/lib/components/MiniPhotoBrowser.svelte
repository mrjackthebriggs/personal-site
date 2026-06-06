<script lang='ts'>
  import type { imgData } from '$lib/components/DataObjects'; // or keep your interface here

  let {images} = $props<{
    images: Record<string, { default: imgData }>,
  }>();

  const imageMultiplier = 1.5;  // how wide the track is compared to the image width, adjust as needed
  let imgViewIndex = $state(0);
  let pics:[string,{ default: imgData }][] = $derived(Object.entries(images));
  let compWidth = $state(0);
  let offset = $derived((imgViewIndex * (compWidth * 1.02)));

</script>

<style>
  .container {
    display: grid;
    grid-template-columns: 5% auto 5%;
    align-items: center;
    align-content: start;
    justify-content: start;
    height:auto;
    /* border: 2px solid pink; */
  }

  .track-wrapper {
    min-width: 0;
    width: 100%;
    mask-image: linear-gradient(to right,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,1) 20%,
      rgba(0,0,0,1) 80%,
      rgba(0,0,0,0) 100%
    );
    overflow: hidden;
    /* border: 2px solid green; */
  }

  button {
    font-family: SpaceMono-reg, sans-serif;
    border: 2px solid rgb(96, 96, 96);
    border-radius: 13px;
    height: 50px;
    width: 50px;
    min-width: 50px;
    min-height: 50px;
    box-shadow: 2px 2px 4px gray;
    z-index: 1;
  }
  .img-spacer{
    width: 3vw; 
    flex-shrink: 0;
  }

  .track {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    transition: transform 0.4s ease;
    width: max-content;
    /* border: 2px solid red; */
  }

  .track > * {
    flex: 0 0 auto;
    margin: 0 2px;
    padding: 0;
    /* border: 2px solid blue; */
  }

  .photo {
    display: block;
    width: 20vw;
    max-width: 100%;
    height: auto;
    /* object-fit: contain; */
    /* border: 2px solid orange; */
  }
</style>

<div class="container"
>

  <button
    style="grid-column:1"
    onclick={() => { if (imgViewIndex > 0) imgViewIndex -= 1 }}
  >Back</button>

  <div class="track-wrapper" 
  >
    <div class="track" 
      style="transform: translateX(-{offset}px);"
      >
      <div class="img-spacer"></div>
      {#each pics as [_path, mod], i}      
        <enhanced:img 
        id={_path}
        bind:clientWidth={compWidth}
        class="photo"
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