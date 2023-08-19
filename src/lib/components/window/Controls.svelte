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
					[name]: {
						screen:
							$windowsContext.windows[name].screen === 'fullscreen'
								? 'fullScreenWindow'
								: 'fullscreen'
					}
				}
			};
		});
	};
</script>

<div class="flex bg-headerView items-center gap-4">
	<div class="flex gap-2 p-4 items-center">
		<button
			on:click={() => handleAction('closed')}
			class="w-3 h-3 bg-[#FF5F57] rounded-full border border-black/20 cursor-pointer"
		/>
		<button
			on:click={() => handleAction('minimized')}
			class="w-3 h-3 bg-[#FEBC2E] rounded-full border border-black/20 cursor-pointer"
		/>
		<button
			on:click={handleFullscreen}
			class="w-3 h-3 bg-[#28C840] rounded-full border border-black/20 cursor-pointer"
		/>
	</div>
</div>
