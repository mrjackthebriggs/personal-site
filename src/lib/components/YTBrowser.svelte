<script lang="ts">
  export let videoId;
  export let width:number = NaN;
  export let height:number = NaN;
  export let start = 0;
  export let mute = true
</script>

<style>
  .yt-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  .yt-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid gray;
    border-radius: 5px;
    box-shadow: 2px 2px 3px gray;
  }
</style>

<div class="yt-container"
style="width: {isNaN(width) ? '100%' : width + 'px'}; height: {isNaN(height) ? 'auto' : height + 'px'};"
>
  <iframe 
  class="yt-iframe"
  // width={width ? width : "auto"} 
  // height={height ? height : "auto"} 
  src="https://www.youtube-nocookie.com/embed/{videoId}?si=ZoxbzuwxQG2tY258&amp;start={start}{mute?'&mute=1':''}" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
  </iframe>
</div>