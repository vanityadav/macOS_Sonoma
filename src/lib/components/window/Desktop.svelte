<script lang="ts">
	import type { ResizeSource } from './type';
	import windowsContext from '$lib/store/window';
	import type { Apps } from '$lib/store/window/types';

	let element: HTMLDivElement | null;
	windowsContext.subscribe((data) => (element = data.element));

	const mouseup = () => {
		if (element) {
			element.dataset.resizable = 'false';
			element.dataset.draggable = 'false';
			delete element.dataset.resizeSource;
			windowsContext.update((state) => ({ ...state, userSelectNone: false }));
		}
	};

	const mousemove = (e: MouseEvent) => {
		if (element) {
			let elementSize = element.getBoundingClientRect();

			// name of current app
			let name = element.id as Apps;

			// change it when changing menu bar size and gap
			let topOffset = $windowsContext.windows[name].screen === 'fullscreen' ? 0 : 26;

			// disable windowedFullscreen/fullscreen on move/resize
			if (
				(element.dataset.screen === 'fullscreenWindowed' && element.dataset.draggable === 'true') ||
				element.dataset.resizable === 'true'
			) {
				windowsContext.update((state) => ({
					...state,
					activeWindow: name,
					windows: { ...state.windows, [name]: { screen: 'windowed' } }
				}));
				element.dataset.screen = 'windowed';
			}

			// move window
			if (element.dataset.draggable === 'true') {
				let elementX = Number(element.dataset.elementX);
				let elementY = Number(element.dataset.elementY);
				// stop before hitting very top of the screen
				if (elementSize.top >= topOffset && e.clientY - elementY - topOffset >= 0)
					element.style.top = e.clientY - elementY - topOffset + 'px';
				element.style.left = e.clientX - elementX + 'px';
			}

			// resize cases
			if (element.dataset.resizable === 'true') {
				const resizeSource = element.dataset.resizeSource as ResizeSource;
				let minWidth = Number(element.dataset.minWidth);
				let minHeight = Number(element.dataset.minHeight);
				let px = Number(element.dataset.resizeX);
				let py = Number(element.dataset.resizeY);
				let width = Number(element.dataset.clientWidth);
				let height = Number(element.dataset.clientHeight);
				let resizeOffsetX = Number(element.dataset.resizeOffsetX);
				let resizeOffsetY = Number(element.dataset.resizeOffsetY);

				switch (resizeSource) {
					case 'top':
						if (e.clientY + resizeOffsetY - topOffset > 0 && elementSize.height > minHeight) {
							element.style.top = e.clientY + resizeOffsetY - topOffset + 'px';
						}
						if (e.clientY + resizeOffsetY - topOffset > 0) {
							element.style.height = `${height - (e.clientY - py)}px`;
						}
						break;

					case 'left':
						if (elementSize.width > minWidth) {
							element.style.left = e.clientX + resizeOffsetX + 'px';
						}
						element.style.width = `${width - (e.clientX - px)}px`;
						break;

					case 'topLeft':
						if (e.clientY + resizeOffsetY - topOffset > 0 && elementSize.height > minHeight) {
							element.style.top = e.clientY + resizeOffsetY - topOffset + 'px';
						}

						if (e.clientY + resizeOffsetY - topOffset > 0) {
							element.style.height = `${height - (e.clientY - py)}px`;
						}
						if (elementSize.width > minWidth) {
							element.style.left = e.clientX + resizeOffsetX + 'px';
						}
						element.style.width = `${width - (e.clientX - px)}px`;
						break;
					case 'topRight':
						if (e.clientY + resizeOffsetY - topOffset > 0 && elementSize.height > minHeight) {
							element.style.top = e.clientY + resizeOffsetY - topOffset + 'px';
						}
						if (e.clientY + resizeOffsetY - topOffset > 0) {
							element.style.height = `${height - (e.clientY - py)}px`;
						}
						element.style.width = `${width - (px - e.clientX)}px`;
						break;
					case 'bottomLeft':
						if (elementSize.width > minWidth) {
							element.style.left = e.clientX + resizeOffsetX + 'px';
						}
						element.style.width = `${width - (e.clientX - px)}px`;
						element.style.height = `${height - (py - e.clientY)}px`;
						break;

					case 'right':
						element.style.width = `${width - (px - e.clientX)}px`;
						break;
					case 'bottom':
						element.style.height = `${height - (py - e.clientY)}px`;
						break;
					case 'bottomRight':
						element.style.height = `${height - (py - e.clientY)}px`;
						element.style.width = `${width - (px - e.clientX)}px`;
						break;

					default:
						break;
				}
			}

			// stop the window when top is aligned with container
			if (elementSize.top < topOffset - 1) {
				return false;
			}
		}
	};
</script>

<main
	class="flex-1 h-full w-full relative transition-all duration-100"
	role="none"
	on:mouseup={mouseup}
	on:mousemove={mousemove}
	on:mouseleave={mouseup}
>
	<slot />
</main>
