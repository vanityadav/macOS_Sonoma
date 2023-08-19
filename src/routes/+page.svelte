<script lang="ts">
	import { App } from '$lib/components/window';
	import Content from '$lib/components/window/Content.svelte';
	import Controls from '$lib/components/window/Controls.svelte';
</script>

<App name="HOME" let:app>
	<div class="flex flex-col h-full w-full bg-white/80 backdrop-blur">
		<Controls name={app} />
		<Content styles="bg-black/90 flex justify-center items-center flex-1">
			<p class="text-white">
				{app}
			</p>
		</Content>
	</div>
</App>
