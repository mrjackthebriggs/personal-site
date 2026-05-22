<script lang="ts">
	import MiniPhotoBrowser from '$lib/components/MiniPhotoBrowser.svelte';
	import PhotoBrowser from '$lib/components/PhotoBrowser.svelte';
	import StyleTitle from '$lib/components/StyleTitle.svelte';
	import YTBrowser from '$lib/components/YTBrowser.svelte';
	import projpic from '$lib/images/title-pictures/hobpic.png';
	import ProjectTile from './ProjectTile.svelte';
	import projectDesc from './projectDesc.json';
	import type { imgData } from '$lib/components/DataObjects';

	const projImageModules = import.meta.glob(
		'$lib/images/projects/**/*.{avif,AVIF,gif,GIF,heif,HEIF,jpeg,JPEG,jpg,JPG,png,PNG,tiff,TIFF,webp,WEBP}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	) as Record<string, { default: imgData }>;

	const imagesByProject: Record<string, Record<string, { default: imgData }>> = {};

	for (const [path, module] of Object.entries(projImageModules)) {
		const match = path.match(/\/projects\/([^/]+)\//);
		if (!match) continue;
		const projectKey = match[1];
		imagesByProject[projectKey] ??= {};
		imagesByProject[projectKey][path] = module;
	}
</script>

<StyleTitle title="My Projects" photo={projpic} alt="a project I made" />

{#each Object.entries(projectDesc) as [key, proj], i}
	<ProjectTile
		title={proj.title}
		description={proj.desc}
		delay={(i + 1) * 300}
		images={imagesByProject[key]}
		ytLink={"ytVid" in proj ? proj.ytVid : undefined}
		link={"link" in proj ? proj.link : undefined}
	/>
{/each}

