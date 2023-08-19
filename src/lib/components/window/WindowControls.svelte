<script lang="ts">
	export let name: Apps;
	import windowsContext from '$lib/store/window';
	import type { AppScreen, Apps } from '$lib/store/window/types';

	let prevScreenSize: AppScreen = 'windowed';
	$: console.log(prevScreenSize);

	const handleAction = (screenSize: AppScreen) => {
		windowsContext.update((state) => {
			return {
				...state,
				windows: {
					...state.windows,
					[name]: { screen: screenSize }
				}
			};
		});
	};
	const handleFullscreen = () => {
		prevScreenSize = $windowsContext.windows[name].screen;

		let fullscreen = prevScreenSize === 'fullscreen';

		// let element = $windowsContext.element;
		// if (element) element.dataset.screen = fullscreen ? prevScreenSize : 'fullscreen';

		windowsContext.update((state) => {
			return {
				...state,
				windows: {
					...state.windows,
					[name]: { screen: fullscreen ? prevScreenSize : 'fullscreen' }
				}
			};
		});
	};
</script>

<div class="flex bg-headerView">
	<div class="flex gap-2 p-4">
		<button
			on:click={() => handleAction('closed')}
			class="w-3 h-3 bg-[#FF5F57] rounded-full border border-black/20"
		/>
		<button
			on:click={() => handleAction('minimized')}
			class="w-3 h-3 bg-[#FEBC2E] rounded-full border border-black/20"
		/>
		<button
			on:click={handleFullscreen}
			class="w-3 h-3 bg-[#28C840] rounded-full border border-black/20"
		/>
	</div>
	<div>{name}</div>
</div>
