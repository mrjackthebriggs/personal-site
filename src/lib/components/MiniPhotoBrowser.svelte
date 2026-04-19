<!-- Need to add animations at some point, need to fix how photos are stored and swapped -->

<script lang='ts'>
  import {fly} from 'svelte/transition';
  import type {imgData} from "$lib/components/DataObjects";
  
  let {images, imageWidth, compWidth}:{images:Record<string,{ default: imgData }>, imageWidth:number, compWidth:number} = $props();
  let imgViewIndex = $state(0);
  let picPrevs = $derived(Object.entries(images).splice(imgViewIndex, imgViewIndex + 2));

  // Need some sort of function to clear the images at some point
</script>

<style>
button{
  font-family: SpaceMono-reg, sans-serif;;
  border-radius: 50px;
  height:50px;
  width:50px;
  min-width:50px;
  min-height: 50px;
  box-shadow: 1px 1px 5px gray;
  grid-row: 0;
  z-index: 1;
}
.images{
  border: 2px blue dotted;
  grid-row:0;
  z-index: 0;
  position:absolute;
  margin-left:5%;
  display: flex;
  overflow:hidden;
  justify-content: center;
  align-items: center;
  mask-image: linear-gradient(to right,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%);
}
.img-spacer{
  /* border: 2px pink dotted; */
}
.container{
  border: 2px black dotted;
  display: grid;
  place-items: center;
  justify-content: space-around;
  padding: 2vh 0vw;
}
.images>*{
  /* border: lightgray solid 2px; */
  margin: 0px 2px;
  padding: 0px;
}
</style>

<!-- style="width:{widthOfComp}px;" -->
<div class="container"
 style="
 width:{compWidth}px;
 height:{imageWidth}px;
 "
>
  <button 
  onclick={(e) => {if(imgViewIndex > 0) imgViewIndex -= 1}}
  style="grid-column:1"
  >Back</button>
  <div class="images"
  style="
  min-height:{imageWidth}px;
  max-width:{compWidth}px;
  grid-column:2;
  "
  >
    {#if picPrevs.length < 3 && imgViewIndex == 0}
    <div class="img-spacer"
    style="
    width:{imageWidth}px; 
    min-width:{imageWidth}px; 
    "
    ></div>
    {/if}
    {#each picPrevs as [_path, mod], i}      
      <enhanced:img 
      id={_path}
      style="
      width:{imageWidth}px;
      height:auto;
      "
      src={mod.default} 
      alt="Project Images" />
    {/each}
    {#if picPrevs.length < 3 && imgViewIndex == Object.entries(images).length - 2}
    <div class="img-spacer"
    style="min-width:{imageWidth}px;"
    ></div>
    {/if}
  </div>
  <button 
  onclick={(e) => {if(imgViewIndex < Object.entries(images).length - 2) imgViewIndex += 1}}
  style="grid-column:3"
  >Next</button>
</div>

