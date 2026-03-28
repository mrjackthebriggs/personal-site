<script lang="ts">
  let {title, photo, alt} = $props();
  let marqueeText = (title + " ").repeat(6); 

  // if(title.indexOf(' ') == -1 && title.length > 10){
  //   title = title.slice(0,title.length/2) + "\r" + title.slice(title.length/2);
  // }
</script>

<style>
  .title{
    /* border:2px purple solid; */
    rotate: -10deg;
		margin: 4vh 0% 0% 0vw;
    text-align: center;
    font-size: 46px;
		font-family:Bungee,Arial, Helvetica, sans-serif;
		z-index: 2;
    overflow-wrap: break-word;
    word-break: break-all;
    max-width: 40vw;
    
	}
  .title-bg{
    /* border:2px blue solid; */
    font-family:Bungee-Hollow,Arial, Helvetica, sans-serif;
    font-size: 60px;
    color: rgb(149, 149, 149);
    z-index: 1;
    margin-top:0px;
    margin-bottom: 0px;
    
  }

  .page-title{
    /* border:2px red solid; */
    display:grid;
    grid-template-columns: auto auto;
    justify-content:flex-start;
    align-items: center;
    gap: 20px;
    padding-left: 8vw;
    padding-right: 1vw;
    margin-top: 30px;
    margin-bottom: 30px;
    
  }

  .page-title{
    position: relative;
    text-align: left;  
  }

  .page-title img{
    /* border:2px green solid; */
    rotate: 8deg;
    width: auto; 
    max-height: 200px;
    height: 14vh;  
    min-height: 80px;  
    display: block;
    padding: 0px 0px;
    justify-self: right;
    object-fit: cover;
    justify-self: start;
    
  }

  .text-stack{
    /* border:2px orange solid; */
    display: grid;
    grid-template-areas: "stack";  
  }

  .text-stack>*{
    /* border:2px pink solid; */
    /* max-width: 50vw; */
    grid-area: stack;
    line-height: 1;
    justify-self: end;
    
  }

  .marquee-container {
    /* border:2px lightblue solid; */
    overflow:hidden; 
    white-space: nowrap;
    padding: 4vh 10vw;
    border-radius: 50%;
    width: 20vw;
    
  }

  .marquee-content {
    /* border:2px grey solid; */
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