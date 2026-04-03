<script lang='ts'>
  let {images}:{images:Record<string,{ default: string }>} = $props();

  let imgViewIndex = $state(0);
  let widthOfComp = $state(500);
  let imageSize:number = 100;
  let picPrevs = $derived(Object.entries(images).splice(imgViewIndex, imgViewIndex + 2));
</script>

<style>
button{
  font-family: SpaceMono-reg, sans-serif;;
  border-radius: 50%;
  height:50px;
  width:50px;
  box-shadow: 1px 1px 5px gray;
}
.images{
  display: flex;
  /* border: 2px blue dotted; */
  overflow:hidden;
  mask-image: linear-gradient(to right,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%);
}
.fade-first-image{
  /* border: 2px red dotted; */
  /* mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%); */
}
.fade-last-image{
  /* border: 2px green dotted; */
  /* mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%); */
}
.container{
  display: flex;
  justify-content: center;
  place-items: center;
  /* border: 2px black dotted; */
}
.images>*{
  /* border: lightgray solid 2px; */
  margin: 0px 2px;
  padding: 0px;
}
</style>

<!-- style="width:{widthOfComp}px;" -->
<div class="container"
style="width:{widthOfComp}px;"
>
  <button onclick={(e) => {if(imgViewIndex > 0) imgViewIndex -= 1}}>Back</button>
  <div class="images"
  >
    {#each picPrevs as [_path, module], i}      
      <enhanced:img 
      style="
      height:{imageSize}px;
      width:auto;
      "
      src={module.default} 
      alt="Project Images" />
    {/each}
  </div>
  <button onclick={(e) => {if(imgViewIndex < Object.entries(images).length - 2) imgViewIndex += 1}}>Next</button>
</div>

