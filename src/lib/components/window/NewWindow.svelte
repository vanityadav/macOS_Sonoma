<script lang="ts">
	export let name: Apps;
	import Window from './Window.svelte';
	import windowsContext from '$lib/store/window';
	import type { Apps } from '$lib/store/window/types';
</script>

{#if $windowsContext.windows[name].screen !== 'closed' && $windowsContext.windows[name].screen !== 'minimized'}
	<Window {name}>
		<slot />
	</Window>
{/if}
