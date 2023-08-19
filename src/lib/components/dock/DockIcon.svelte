<script lang="ts">
	export let props: DockRoutes | DockLinks;

	import windowsContext from '$lib/store/window';
	import type { DockLinks, DockRoutes } from './types';

	function openWindow() {
		if (props.tag === 'div') {
			const name = props.label;
			windowsContext.update((state) => ({
				...state,
				activeWindow: name,
				zIndex: state.zIndex + 1,
				windows: {
					...state.windows,
					[name]: {
						screen:
							state.windows[name].screen === 'closed'
								? 'windowed'
								: state.windows[name].screen === 'minimized'
								? 'windowed'
								: state.windows[name].screen
					}
				}
			}));
		}
	}
</script>

<svelte:element
	this={props.tag}
	tabindex="0"
	on:click={props.tag === 'div' ? openWindow : null}
	href={props.tag === 'a' ? props.href : ''}
	rel="external"
	role="button"
	class="flex flex-col items-center gap-1 group relative cursor-pointer"
>
	<img
		src={props.src}
		alt={props.label}
		class:animate-dockIconAni={props.tag === 'div' &&
			$windowsContext.windows[props.label]?.screen !== 'closed'}
	/>
	<div
		class="h-1 w-1 rounded-full bg-black opacity-0 transition-[opacity] duration-500"
		class:opacity-100={props.tag === 'div' &&
			$windowsContext.windows[props.label]?.screen !== 'closed'}
	/>
	<div
		class="hidden group-hover:flex absolute -top-11 text-center bg-white px-2 border rounded-md whitespace-nowrap"
	>
		{props.label}
	</div>

	<svg
		width="23"
		height="9"
		viewBox="0 0 23 9"
		fill="none"
		class="hidden group-hover:flex absolute -top-[1.31rem]"
	>
		<path
			d="M0 2L2.2439 2C2.2439 2 4.4878 2 6.17073 3.51579C7.85366 5.03158 8.41463 5.78947 9.53659 7.05263C10.6585 8.31579 11.2195 8.31579 12.3415 7.05263C13.4634 5.78947 14.5854 4.52632 15.7073 3.51579C16.8293 2.50526 17.3902 2 20.1951 2C23 2 23 2 23 2"
			stroke="black"
			class="stroke-gray-200"
			stroke-width="2"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M0 2L2.2439 2C2.2439 2 4.4878 2.14114 6.17073 3.62128C7.85366 5.10141 8.41463 5.84147 9.53659 7.07492C10.6585 8.30836 11.2195 8.30836 12.3415 7.07492C13.4634 5.84147 14.5854 4.60803 15.7073 3.62128C16.8293 2.63452 17.3902 2 20.1951 2C23 2 23 2 23 2V0L11.0055 0L0 0L0 2Z"
			class="fill-white"
		/>
	</svg>
</svelte:element>
