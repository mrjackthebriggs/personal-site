<script lang='ts'>
  import type {imgData} from "$lib/components/DataObjects"

  let {images, isVert = false}:{images:Record<string,{ default: imgData }>, isVert?:boolean} = $props();
  let currentSrc = $state<imgData | null>(null);
  let picStrings = $derived(Object.entries(images));
  let initialSrc = $derived(() => Object.values(images)[0]?.default);

  $effect(() => {
    const initial = initialSrc();
    if (!currentSrc && initial) {
      currentSrc = initial;
    }
  });
</script>

<style>
  .photo-browser {
    /* border: 2px solid #000; */
    min-width: 100%;
    max-width: 760px;
    /* width: min(100%, 760px); */
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    box-sizing: border-box;
    align-items: center;
    /* border: 3px solid red; */
  }

  .photo-browser.horizontal {
    flex-direction: row;
    align-items:center;
    /* border: 3px solid blue; */
  }

  .main-img-cont {
    aspect-ratio: 1/1;
    flex: 0 1 1;
    min-width: 70%;
    max-width: 90%;
    max-height: 65vh;
    border: 1px solid #ddd;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.00);
    border: 2px solid rgba(0, 0, 0, 0.5);
    /* border: 3px solid green; */
  }

  .main-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    /* border: 3px solid orange; */
  }

  .img-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: start;
    justify-content: center;
    width: 100%;
    /* border: 3px solid purple; */
  }

  .pic-divs {
    min-width: 50px;
    width: 3vw;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid #ccc;
    background: #000;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.6);
    transition: all 0.2s cubic-bezier(0.25, 0.82, 0.165, 1); 
    
    /* border: 3px solid pink; */
  }

  .preview-button {
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    /* border: 3px solid lymewood; */
  }
  .pic-divs:hover {
    box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.8);
  }
  .pic-divs:active {    
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.6);
  }

  .img-prevs {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    /* border: 3px solid cyan; */
  }
</style>

<div class="photo-browser {isVert ? '' : 'horizontal'}">
  <div class="main-img-cont">
    {#if currentSrc}
      <enhanced:img
        class="main-img"
        src={currentSrc.img.src}
        alt="Current project"
      />
    {/if}
  </div>

  <div class="img-stack">
    {#each picStrings as [_path, mod], i}
      <div class="pic-divs">
        <button
          title="picture button"
          onclick={() => {
            currentSrc = mod.default;
          }}
          class="preview-button"
        >
          <enhanced:img
            id={_path}
            class="img-prevs"
            src={mod.default.img.src}
            alt="Project preview"
          />
        </button>
      </div>
    {/each}
  </div>
</div>
