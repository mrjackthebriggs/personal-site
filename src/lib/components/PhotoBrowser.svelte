<script lang='ts'>
  import type {imgData} from "$lib/components/DataObjects"

  let {images}:{images:Record<string,{ default: imgData }>} = $props();
  let currentSrc = $state(Object.values(images)[0].default);
  let pics = $derived(Object.entries(images));
  let mainImageHeight:number = $state(NaN);
  let mainImageWidth:number = $state(NaN);
</script>

<style>
  .img-prevs{
    width:100%;
    height:100%;
    margin:0px;
    padding:0px;
    object-fit:scale-down;
  }
  .main-img-cont{
    border: pink 2px solid;
    display: flex;
    justify-content: center;
    width:auto;
    aspect-ratio: 12 / 16;
  }
  .img-stack{
    border: blue 2px solid;
    display: grid;
    gap: 5px;
    justify-content: start;
    align-items: center;
  }
  .pic-divs{
    border: red 2px solid;
    aspect-ratio: 12 / 16;
  }
  .main-img{
    width:100%;
    object-fit:scale-down;
  }
</style>

<div
style="
border:black solid 2px;
"
>
  <div 
  class="main-img-cont"
  >
    <enhanced:img  
    class="main-img"
    bind:clientWidth={mainImageWidth} 
    bind:clientHeight={mainImageHeight} 
    src={currentSrc.img.src} 
    alt="default"/>
  </div>
  <div 
  class="img-stack"
  style="
  grid-template-columns: repeat(auto-fill, {mainImageWidth ? mainImageWidth*0.3 +'px' : '10%'});
  grid-auto-rows: var(--height);
  "
  >
    {#each pics as [_path, mod], i}
      <div
      class="pic-divs"
      >
        <button 
        title="picture button"
        onclick={() => currentSrc = mod.default}
        class="img-prevs"
        >
          <enhanced:img 
          id={_path}
          class="img-prevs"
          src={mod.default} 
          alt="Project Images" />
        </button>
      </div>
    {/each}
  </div>
</div>
