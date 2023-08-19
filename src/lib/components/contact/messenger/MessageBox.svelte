<script lang="ts">
	import { fly } from 'svelte/transition';

	export let bot: boolean = false;
	export let multiple: boolean = false;
</script>

<div
	class="flex flex-col gap-1"
	class:self-start={bot}
	class:self-end={!bot}
	transition:fly={{ y: 10, duration: 300 }}
>
	<p
		class="px-4 py-2 sm:rounded-full rounded-2xl relative"
		class:bg-active={bot}
		class:bg-secondary={!bot}
		class:text-white={!bot}
	>
		<span class="whitespace-break-spaces w-max"><slot /> </span>
		{#if !multiple}
			<svg
				width="17"
				height="24"
				viewBox="0 0 17 24"
				class="absolute bottom-0"
				class:-left-[7px]={bot}
				class:-right-[7px]={!bot}
				class:-scale-x-100={!bot}
				fill="none"
			>
				<path
					d="M6.99995 6.5V0.5L17 13.5C17 13.5 15.2364 17.7636 13.5 19.5C11.7636 21.2364 9.86761 24 1 24H0.5C3.5 22.5 4.5 21 5.5 19.5C6.74035 17.6395 6.99995 15.5 6.99995 13.5V6.5Z"
					class:fill-secondary={!bot}
					class:fill-active={bot}
				/>
			</svg>
		{/if}
	</p>
	{#if !multiple}
		<span class="text-xs px-4" class:self-start={bot} class:self-end={!bot}>
			{new Intl.DateTimeFormat('default', {
				hour: 'numeric',
				minute: 'numeric'
			}).format(new Date())}</span
		>
	{/if}
</div>
