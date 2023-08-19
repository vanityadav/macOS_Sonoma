<script lang="ts">
	export let name: Apps;
	export let minWidth: number = 300;
	export let minHeight: number = 200;
	// required for tailwind dynamic values
	const twRefClass = 'sm:min-h-[200px] sm:min-w-[300px] shadow-primary';

	import { afterUpdate } from 'svelte';
	import type { ResizeSource } from './type';
	import windowsContext from '$lib/store/window';
	import type { Apps } from '$lib/store/window/types';
	import WindowControls from './WindowControls.svelte';

	// make changes here to keep the windows on screen
	afterUpdate(() => {
		let elementSize = element.getBoundingClientRect();
		let documentSize = document.body.getBoundingClientRect();
		if (elementSize.width + elementSize.left < 10) {
			element.style.left = '0px';
		}
		if (documentSize.width - elementSize.x < 10) {
			element.style.left = `${documentSize.width - elementSize.width}px`;
		}

		if (documentSize.height - elementSize.y < 90) {
			element.style.top = `${documentSize.height - 130}px`;
		}
		if ($windowsContext.activeWindow === name && element)
			element.style.zIndex = `${$windowsContext.zIndex}`;
	});

	$: fullscreen = $windowsContext.windows[name].screen === 'fullscreen';
	$: if (fullscreen) {
		element.style.transition = 'all .3s ease';
		element.style.inset = '0';
		element.style.width = '100%';
		element.style.height = '100%';
	}

	let element: HTMLDivElement,
		prevTop: string = '0px',
		prevLeft: string = '0px',
		prevHeight: string = '0px',
		prevWidth: string = '0px';

	const mouseDown = (e: any) => {
		windowsContext.update((state) => ({
			...state,
			element: element,
			zIndex: state.zIndex + 1,
			userSelectNone: true,
			activeWindow: name
		}));

		element.style.transition = 'none';
		element.dataset.draggable = 'true';
		element.dataset.elementX = e.layerX;
		element.dataset.elementY = e.layerY;
		element.style.zIndex = `${$windowsContext.zIndex}`;
	};

	const focusWindow = (e: any) => {
		windowsContext.update((state) => ({
			...state,
			zIndex: state.zIndex + 1,
			activeWindow: name
		}));
		element.style.zIndex = `${$windowsContext.zIndex}`;
	};

	const handleFullWindow = () => {
		// store the previous values before going full screen
		if ($windowsContext.windows[name].screen !== 'fullscreenWindowed') {
			prevTop = element.style.top;
			prevLeft = element.style.left;
			prevWidth = element.style.width;
			prevHeight = element.style.height;
		}
		// update the store
		windowsContext.update((state) => ({
			...state,
			zIndex: state.zIndex + 1,
			activeWindow: name,
			windows: {
				...state.windows,
				[name]: {
					screen:
						$windowsContext.windows[name].screen === 'fullscreenWindowed'
							? 'windowed'
							: 'fullscreenWindowed'
				}
			}
		}));

		// based upon the updated value now change the styles and set data attributes
		element.dataset.screen = $windowsContext.windows[name].screen;

		if ($windowsContext.windows[name].screen === 'fullscreenWindowed') {
			element.style.inset = '0';
			element.style.width = '100%';
			element.style.height = '100%';
		}

		if ($windowsContext.windows[name].screen === 'windowed') {
			element.style.top = prevTop;
			element.style.left = prevLeft;
			element.style.width = prevWidth;
			element.style.height = prevHeight;
		}
		// transition for screen required
		element.style.transition = 'all .3s ease';
	};

	const resizeMouseDown = (e: any, resizeSource: ResizeSource) => {
		let resizeOffsetX: number, resizeOffsetY: number;
		let resizerHeight = e.target.clientHeight;
		let resizerWidth = e.target.clientWidth;

		windowsContext.update((state) => ({
			...state,
			element: element,
			zIndex: state.zIndex + 1,
			userSelectNone: true,
			activeWindow: name
		}));

		element.style.zIndex = `${$windowsContext.zIndex}`;

		if (resizerHeight / 2 === e.layerY) resizeOffsetY = e.layerY;
		else {
			resizeOffsetY = resizerHeight / 2 - e.layerY;
		}
		if (resizerWidth / 2 === e.layerX) resizeOffsetX = e.layerX;
		else {
			resizeOffsetX = resizerWidth / 2 - e.layerX;
		}

		element.style.transition = 'none';
		element.dataset.resizable = 'true';
		element.dataset.minWidth = String(minWidth);
		element.dataset.minHeight = String(minHeight);
		element.dataset.resizeSource = resizeSource;
		element.dataset.resizeX = String(e.clientX);
		element.dataset.resizeY = String(e.clientY);
		element.dataset.resizeOffsetX = String(resizeOffsetX);
		element.dataset.resizeOffsetY = String(resizeOffsetY);
		element.dataset.clientWidth = String(element.clientWidth);
		element.dataset.clientHeight = String(element.clientHeight);
	};
</script>

<div
	style="width:60%; height:60%;  
	position: absolute;
	top: 20%;
	left: 20%;"
	class="sm:min-h-[{minHeight}px] sm:min-w-[{minWidth}px] shadow-primary"
	role="none"
	id={name}
	bind:this={element}
	on:click={focusWindow}
	on:mousedown={mouseDown}
	on:dblclick={handleFullWindow}
>
	<WindowControls {name} />
	<!-- window -->
	<slot />
	<!-- resize div's -->
	<div
		on:mousedown|stopPropagation|self={(e) => resizeMouseDown(e, 'left')}
		on:dblclick|stopPropagation
		role="none"
		id="left"
		class="cursor-ew-resize w-4 absolute -left-2 top-2 bottom-2"
	/>
	<div
		on:mousedown|stopPropagation|self={(e) => resizeMouseDown(e, 'right')}
		on:dblclick|stopPropagation
		role="none"
		id="right"
		class="cursor-ew-resize w-4 absolute -right-2 top-2 bottom-2"
	/>
	<div
		on:mousedown|stopPropagation|self={(e) => resizeMouseDown(e, 'bottom')}
		on:dblclick|stopPropagation
		role="none"
		id="bottom"
		class="cursor-ns-resize h-4 absolute -bottom-2 left-2 right-2"
	/>
	<div
		on:mousedown|stopPropagation|self={(e) => resizeMouseDown(e, 'top')}
		on:dblclick|stopPropagation
		role="none"
		id="top"
		class="cursor-ns-resize h-4 absolute -top-2 left-2 right-2"
	/>

	<div
		on:mousedown|stopPropagation|self={(e) => resizeMouseDown(e, 'topRight')}
		on:dblclick|stopPropagation
		role="none"
		id="top-right"
		class="cursor-nesw-resize h-4 w-4 absolute -right-2 -top-2"
	/>
	<div
		on:mousedown|stopPropagation|self={(e) => resizeMouseDown(e, 'topLeft')}
		on:dblclick|stopPropagation
		role="none"
		id="top-left"
		class="cursor-nwse-resize h-4 w-4 absolute -left-2 -top-2"
	/>
	<div
		on:mousedown|stopPropagation|self={(e) => resizeMouseDown(e, 'bottomRight')}
		on:dblclick|stopPropagation
		role="none"
		id="bottom-right"
		class="cursor-nwse-resize h-4 w-4 absolute -right-2 -bottom-2"
	/>
	<div
		on:mousedown|stopPropagation|self={(e) => resizeMouseDown(e, 'bottomLeft')}
		on:dblclick|stopPropagation
		role="none"
		id="bottom-left"
		class="cursor-nesw-resize h-4 w-4 absolute -left-2 -bottom-2"
	/>
</div>
