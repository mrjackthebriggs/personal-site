<script lang="ts">
	import type { imgData } from '$lib/components/DataObjects';
	import { fly } from 'svelte/transition';
	import MiniPhotoBrowser from '$lib/components/MiniPhotoBrowser.svelte';
	import PhotoBrowser from '$lib/components/PhotoBrowser.svelte';
	import VideoBrowser from '$lib/components/YTBrowser.svelte';
	import { onMount } from 'svelte';

	const titleMaxLength = 60;
	const descriptionMaxLength = 200;

	let tileExpanded = $state(false);
	let mediaWidth:number = $state(0);
	let mounted = $state(false);

	let { title, description, images, ytLink, link, delay = 0} = 
		$props<{ title: string; description: string; images?: Record<string, { default: imgData }>; ytLink?: string; link?: string; delay?: number; }>();

	// Testing
	// title =
	// 	'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.Nam pretium turpis et arcu.';

	// description =
	// 	'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.Nam pretium turpis et arcu.';

	let layoutTitle: string = $derived(tileExpanded? title :
		title.length > titleMaxLength ? title.slice(0, titleMaxLength) + '...' : title
	);
	let layoutDescription: string = $derived(tileExpanded? description :
		description.length > descriptionMaxLength
			? description.slice(0, descriptionMaxLength) + '...'
			: description
	);

	onMount(() => {
		mounted = true;
	});
</script>

<style>
	.main-cont {
		border: 2px black solid;
		border-radius: 20px 30px 20px 5px;
		box-shadow: 5px 5px var(--shadow);
		padding: 40px 40px;
		background-color: var(--background);
	}
	.main-cont-shrunk {
		margin-top: 40px;
		margin-bottom: 40px;
		margin-left: 10%;
		max-width:70%;
		transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	.main-cont-exp {
		margin: 40px 5%;
		max-width:100%;
		width:auto;
		transition: all 1.6s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	.main-cont:hover {
		box-shadow: 24px 24px var(--light-shadow);
		transform: translate(-2px, -2px);
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
		box-shadow: 5px 5px var(--light-shadow);
	}
	.expand-button:active {
		box-shadow: 2px 2px var(--shadow);
		border: 3px black solid;
		transform: translate(5px, 5px);
	}
	.content {
		display: flex;
		margin: 0px;
		flex-wrap: wrap;
		justify-content: center;
		align-content:start;
	}
	.content-exp{
		padding: 10px;
		flex-direction: column;
		align-items: center;
		flex-grow: 1;
	}
	.content-shrunk{
		padding: 20px;
		flex-direction: row;
		gap: 30px; /* add spacing between text and photo viewer */
	}
	.media-content {
		display: flex;
		justify-content: center;
		align-items: center;
		width:auto;
		height:auto;
		flex:1;
		align-self: center;
	}
	.text-content {
		flex:1;
		max-width: 100%;
	}
	h1{
		font-size: 36px;
		margin-bottom: 10px;
	}
</style>

{#if mounted}
<div 
class="main-cont {tileExpanded ? 'main-cont-exp' : 'main-cont-shrunk'}"
in:fly={{ x:0, y: 40, duration: 1000, delay: delay }}
>
	<div 
	bind:clientWidth=	{mediaWidth}
	class="content {tileExpanded ? 'content-exp' : 'content-shrunk'}">
		<div class="text-content">
			<h1>{layoutTitle}</h1>
			<p>{layoutDescription}</p>
			{#if link}
				<a href={link} target="_blank" rel="noopener noreferrer">Link to {title}</a>
			{/if}
		</div>
		<div class="media-content"
		style="min-width:{tileExpanded ? '80%' : '40%'};"
		>
			{#if images}
				{#if tileExpanded}
					<PhotoBrowser images={images}/>
				{:else}
					<MiniPhotoBrowser images={images}/>
				{/if}
			{:else if ytLink}
				<VideoBrowser videoId={ytLink} />
			{/if}
		</div>
	</div>
	<button 
	onclick={() => tileExpanded = !tileExpanded}
	class="expand-button">
	{tileExpanded ? 'Collapse' : 'Expand'}
	</button>
</div>
{/if}