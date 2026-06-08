<script lang="ts">
  import StyleTitle from "$lib/components/StyleTitle.svelte";
  import photopic from '$lib/images/title-pictures/photopic.png';
  import type { imgData } from '$lib/components/DataObjects';
  import PhotoBrowser from '$lib/components/PhotoBrowser.svelte';
  import {fly} from 'svelte/transition'

  const photoImageModules = import.meta.glob(
		'./photos/*.{avif,AVIF,gif,GIF,heif,HEIF,jpeg,JPEG,jpg,JPG,png,PNG,tiff,TIFF,webp,WEBP}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	) as Record<string, { default: imgData }>;

  const sortedPhotoEntries = (a: [string, { default: imgData }], b: [string, { default: imgData }]) => {
    const nameA = a[0];
    const nameB = b[0];
    return nameB.localeCompare(nameA);
  };
</script>

<style>
  #photo-gallery {
    /* display: flex; */
    /* justify-content: center; */
    margin-top: 2px;
    margin-left: min(60px, 16vw);
    max-width: 70%;
    /* border: 2px solid red; */
  }
</style>

<StyleTitle
title="Photo Gallery"
photo={photopic}
alt="a Polaroid Sun 600 Camera"
/>

<div id="photo-gallery"
in:fly={{y:40, duration: 800}}
> 
  <PhotoBrowser images={photoImageModules} isVert={true} sortFunc={sortedPhotoEntries} />
</div>