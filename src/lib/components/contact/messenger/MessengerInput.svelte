<script lang="ts">
	import { messengerService } from './service/messenger';

	let value: string;
	$: if (!$messengerService.hasTag('editable')) value = '';

	let placeholder = 'click here to chat now';
	$: if ($messengerService.matches('enter subject')) placeholder = "what's on your mind?";
	$: if ($messengerService.matches('enter email')) placeholder = 'your email';
	$: if ($messengerService.matches('enter message')) placeholder = 'any additional info';
	$: if ($messengerService.matches('enter name')) placeholder = 'enter your name here';
	$: if ($messengerService.matches('sending')) placeholder = '';
</script>

<div class="flex items-center before: gap-4 p-5 shadow border-t">
	<a
		href="mailto:vanityadav08@gmail.com?subject=Let's chat about my website&body=Hi Vanit,%0A %0AI would like you to ...."
	>
		<svg
			enable-background="new 0 0 512 512"
			height="30"
			width="30"
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="m298.789 313.693c-12.738 8.492-27.534 12.981-42.789 12.981-15.254 0-30.05-4.489-42.788-12.981l-209.803-139.873c-1.164-.776-2.298-1.585-3.409-2.417v229.197c0 26.278 21.325 47.133 47.133 47.133h417.733c26.278 0 47.133-21.325 47.133-47.133v-229.198c-1.113.834-2.249 1.645-3.416 2.422z"
			/><path
				d="m20.05 148.858 209.803 139.874c7.942 5.295 17.044 7.942 26.146 7.942 9.103 0 18.206-2.648 26.148-7.942l209.803-139.874c12.555-8.365 20.05-22.365 20.05-37.475 0-25.981-21.137-47.117-47.117-47.117h-417.766c-25.98.001-47.117 21.137-47.117 47.142 0 15.085 7.496 29.085 20.05 37.45z"
			/></svg
		>
	</a>
	<div class="w-full relative text-lg" on:click={() => messengerService.send('click')} role="none">
		<input
			type="text"
			disabled={!$messengerService.hasTag('editable')}
			{placeholder}
			bind:value
			on:keydown={(e) => {
				if (e.key === 'Enter') messengerService.send({ type: 'send', value });
			}}
			class="rounded-full outline-none py-2 px-6 border-2 w-full focus:border-secondary focus-within:border-secondary"
		/>
		<button
			on:click={() => messengerService.send({ type: 'send', value })}
			class="absolute right-3 top-0 bottom-0 group"
		>
			<svg
				enable-background="new 0 0 512 512"
				height="30"
				width="30"
				viewBox="0 0 512 512"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="m51.7 29.2c-38.8 0-63.8 41.3-45.7 75.7l66.2 125.6 222.1 25.5-222.1 25.6-66.2 125.6c-18.1 34.4 6.8 75.7 45.7 75.7 7 0 14-1.4 20.5-4.2l409.8-177c40-17.3 40-74 0-91.3l-409.8-177c-6.5-2.8-13.5-4.2-20.5-4.2z"
					class="fill-primary transition-colors duration-150 group-hover:fill-secondary"
				/>
			</svg>
		</button>
	</div>
</div>
