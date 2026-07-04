<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let capt: string = '';
</script>

<style>
  .image-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers both the image and the text */
  max-width: 600px;    /* Adjust to your layout */
  margin: 0 auto;
  /* border: 2px solid red; */
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;      /* Removes baseline whitespace below image */
  margin: 0;
  padding: 5px;
  border-radius: 16px; /* Optional: adds rounded corners to the image */
  /* border: 2px solid blue; */
}

.copyright-text {
  margin-bottom: 10px;     /* Space between image and text */
  font-size: 0.85rem;  /* Smaller, subtle font size */
  color: var(--grey);         /* Muted gray text color */
  text-align: center;
  font-family: SpaceMono-reg, sans-serif;
  /* border: 2px solid green; */
}
</style>

<figure class="image-container">
	<img src={src} alt={alt} />
	<figcaption class="copyright-text">
    {capt}
  </figcaption>
</figure>