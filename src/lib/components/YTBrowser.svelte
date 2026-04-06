<script>
  export let videoId;
  export let width = 560;
  export let height = 315;
  export let start = 0;
  export let mute = true
</script>

<iframe 
width="auto" 
height="auto" 
src="https://www.youtube-nocookie.com/embed/{videoId}?si=ZoxbzuwxQG2tY258&amp;start={start}{mute?'&mute=1':''}" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" 
allowfullscreen>
</iframe>