<script lang="ts">
	import { fly } from 'svelte/transition';
	import DockIcon from './DockIcon.svelte';
	import { quartInOut } from 'svelte/easing';
	import { dockRoutes, dockLinks } from './apps';
	import windowsContext from '$lib/store/window';
</script>

{#if $windowsContext.windows[$windowsContext.activeWindow].screen !== 'fullscreen'}
	<div
		class="bg-white/20 backdrop-blur-md m-auto rounded-2xl p-1 w-max mb-1 z-[99999999999999] hover:scale-[2] origin-bottom transition-all duration-150"
		transition:fly={{ x: -1000, y: 10, easing: quartInOut, duration: 200 }}
	>
		<nav class="flex items-center justify-between">
			{#each dockRoutes as props}
				<DockIcon {props} />
			{/each}
			<div class="h-12 border rounded-full border-white/40 mx-3" />
			{#each dockLinks as props}
				<DockIcon {props} />
			{/each}
		</nav>
	</div>
{/if}
