<script lang="ts">
  let {title, photo, alt} = $props();
  let marqueeText = (title + " ").repeat(6); 

  // if(title.indexOf(' ') == -1 && title.length > 10){
  //   title = title.slice(0,title.length/2) + "\r" + title.slice(title.length/2);
  // }
</script>

<style>
  .title{
    rotate: -15deg;
		margin: 13vh 0% 0% 2vw;
    font-size: 46px;
		font-family:Bungee,Arial, Helvetica, sans-serif;
		z-index: 2;
    overflow-wrap: break-word;
    word-break: break-all;
    
	}
  .title-bg{
    font-family:Bungee-Hollow,Arial, Helvetica, sans-serif;
    font-size: 60px;
    color: rgb(149, 149, 149);
    z-index: 1;
    margin-bottom: 5vh;
    
  }

  .page-title{
    display:grid;
    grid-template-columns: auto auto;
    justify-content:start;
    align-items: center;
    gap: 2vw;
    margin-left: 100px;
    margin-right: 7vw;
    margin-top: 50px;
    margin-bottom: 0px;
    
  }

  .page-title{
    position: relative;
    text-align: left;
    
  }

  .page-title img{

    width: auto; 
    height: 150px;    
    display: block;
    padding: 0px 0px;
    justify-self: right;
    object-fit: cover;
    justify-self: start;
    
  }

  .text-stack{
    display: grid;
    grid-template-areas: "stack";  
  }

  .text-stack>*{
    grid-area: stack;
    line-height: 1;
    justify-self: start;
    
  }

  .marquee-container {
    overflow:hidden; 
    white-space: nowrap;
    padding: 8vh 8vw;
    border-radius: 50%;
    width: 20vw;
    
  }

  .marquee-content {
    display: inline-block;
    animation: scroll-left 50s linear infinite;
    
  }

  @keyframes scroll-left {
    0% { transform: translateX(-25%); }
    100% { transform: translateX(-75%); }
  }
</style>

<div class="page-title">
  <div class="text-stack">
    <h1 class="title" >{title}</h1>
    <div class="marquee-container">
      <div class="marquee-content">
        <h1 class="title-bg" >{marqueeText}</h1>
      </div>
    </div>
  </div>
  <img alt={alt} src={photo}/>
</div>