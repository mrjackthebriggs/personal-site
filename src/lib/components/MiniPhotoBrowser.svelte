<script lang='ts'>
  import type { imgData } from '$lib/components/DataObjects'; // or keep your interface here

  let {images} = $props<{
    images: Record<string, { default: imgData }>,
  }>();

  const imageMultiplier = 1.5;  // how wide the track is compared to the image width, adjust as needed
  let imgViewIndex = $state(0);
  let pics:[string,{ default: imgData }][] = $derived(Object.entries(images));
  let compWidth = $state(0);
  let offset = $derived((imgViewIndex * (compWidth * 1.04)));

</script>

<style>
  .container {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    align-content: start;
    width: 100%;
    max-width: 100%;
    gap: 0.5rem;
    box-sizing: border-box;
    height:auto;
    margin-right: 5px;
    margin-bottom: 5px;
    /* border: 2px solid pink; */
  }

  .track-wrapper {
    min-width: 0;
    width: min(100%, 320px);
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    mask-image: linear-gradient(to right,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,1) 20%,
      rgba(0,0,0,1) 80%,
      rgba(0,0,0,0) 100%
    );
    overflow: hidden;
    /* border: 2px solid green; */
  }

  .mini-photo-btn {
    font-family: SpaceMono-reg, sans-serif;
    border: 2px solid var(--grey);
    border-radius: 13px;
    height: 50px;
    width: 50px;
    min-width: 50px;
    min-height: 50px;
    box-shadow: 4px 4px 2px var(--shadow);
    z-index: 2;
    color: var(--foreground);
    background-color: var(--primary-accent);
    cursor: pointer;
    flex-shrink: 0;
    transition: all 0.6s cubic-bezier(0.25, 0.82, 0.165, 1);
  }
  .mini-photo-btn:hover {
    border: 2px solid var(--secondary-accent);
  }
  .mini-photo-btn:active {
    box-shadow: 1px 1px 2px var(--shadow);
  }
  .img-spacer{
    display: none;
  }

  .track {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    transition: transform 0.4s ease;
    width: max-content;
    margin-left: 0;
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
    width: min(20vw, 220px);
    max-width: 100%;
    height: auto;
    border: 2px solid var(--foreground);
    border-radius: 5%;
    /* object-fit: contain; */
    /* border: 2px solid orange; */
  }
</style>

<div class="container"
>

  <button
    class="mini-photo-btn"
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
    class="mini-photo-btn"
    style="grid-column:3"
    onclick={() => { if (imgViewIndex < pics.length - 1) imgViewIndex += 1 }}
  >Next</button>

</div>