<script lang='ts'>
  import type {imgData} from "$lib/components/DataObjects"

  let {images, isVert = true}:{images:Record<string,{ default: imgData }>, isVert?:boolean} = $props();
  let currentSrc = $state(Object.values(images)[0].default);
  let picStrings = $derived(Object.entries(images));
  let pics = $derived(Object.values(images));
  let mainImageHeight:number = $derived(Object.values(images)[0].default.img.h);
  let mainImageWidth:number = $derived(Object.values(images)[0].default.img.w);
  $inspect("mainImageHeight", mainImageHeight);
  $inspect("mainImageWidth", mainImageWidth);

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
    aspect-ratio: 11 / 16;
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
    aspect-ratio: 11 / 16;
  }
  .main-img{
    width:100%;
    object-fit:scale-down;
  }
</style>

<div
style="
border:black solid 2px;
width:{mainImageWidth}px;
height:auto;
overfflow:hidden;
display:flex;
flex-direction:{isVert ? 'column' : 'row'};
"
>
  <div 
  class="main-img-cont"
  >
    <enhanced:img  
    class="main-img"
    src={currentSrc.img.src} 
    alt="default"/>
  </div>
  <div 
  class="img-stack"
  style="
  grid-template-columns: repeat(auto-fill, {mainImageWidth ? mainImageWidth*0.3 +'px' : '10%'});
  grid-auto-rows: auto;
  "
  >
    {#each picStrings as [_path, mod], i}
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
