<script lang="ts">
	import type { imgData } from '$lib/components/DataObjects';
	import { fly } from 'svelte/transition';
	import MiniPhotoBrowser from '$lib/components/MiniPhotoBrowser.svelte';
	import PhotoBrowser from '$lib/components/PhotoBrowser.svelte';
	import VideoBrowser from '$lib/components/YTBrowser.svelte';
	import { onMount } from 'svelte';

	const titleMaxLength = 60;
	const descriptionMaxLength = 400;

	let { title, description, images, ytLink, delay = 0} = 
		$props<{ title: string; description: string; images?: Record<string, { default: imgData }>; ytLink?: string; delay?: number; }>();

	// Testing
	title =
		'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.Nam pretium turpis et arcu.';

	description =
		'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.Nam pretium turpis et arcu.';

	let layoutTitle: string = $derived(
		title.length > titleMaxLength ? title.slice(0, titleMaxLength) + '...' : title
	);
	let layoutDescription: string = $derived(
		description.length > descriptionMaxLength
			? description.slice(0, descriptionMaxLength) + '...'
			: description
	);
</script>

<style>
	.main-cont {
		margin: 40px 5%;
		padding: 40px 40px;
		border: 2px black solid;
		border-radius: 20px 30px 20px 5px;
		width: 80%;
		box-shadow: 5px 5px rgba(58, 58, 58, 0.8);
		transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
		background-color: white;
	}
	.main-cont:hover {
		box-shadow: 24px 24px rgba(58, 58, 58, 0.4);
		transform: translate(-0.5vh, -0.5vw);
	}
	.expand-button {
		margin: 10px;
		border: 4px black solid;
		border-radius: 4px;
		font-size: 18px;
		font-weight: bold;
		text-align: center;
		width: auto;
		padding: 10px 20px;
		transition: all 0.2s cubic-bezier(0.25, 0.82, 0.165, 1);
		box-shadow: 5px 5px rgba(58, 58, 58, 0.8);
	}
	.expand-button:active {
		box-shadow: 2px 2px rgba(58, 58, 58, 0.8);
		border: 3px black solid;
		transform: translate(5px, 5px);
	}
	.content {
		display: flex;
		padding: 0px;
		margin: 0px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-content:start;
	}
	.media-content {
		min-width:40%;
		width:auto;
		flex:0;
	}
	.text-content {
		flex:1;
		max-width: 100%;
	}
</style>

<div class="main-cont" in:fly={{ y: 40, duration: 500, delay }}>
	<div class="content">
		<div class="text-content">
			<h1>{layoutTitle}</h1>
			<p>{layoutDescription}</p>
		</div>
		<div class="media-content">
			{#if images}
				<MiniPhotoBrowser images={images} imageWidth={200}/>
			{:else if ytLink}
				<VideoBrowser videoId={ytLink} />
			{/if}
		</div>
	</div>
	<button class="expand-button">Expand</button>
</div>