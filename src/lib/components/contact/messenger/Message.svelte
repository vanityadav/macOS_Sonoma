<script lang="ts">
	import { afterUpdate } from 'svelte';
	import MessageBox from './MessageBox.svelte';
	import { messengerService } from './service/messenger';
	let element: HTMLDivElement;

	afterUpdate(() => {
		scrollToBottom(element);
	});

	const scrollToBottom = async (node: HTMLDivElement) => {
		node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
	};
</script>

<div class="flex flex-col gap-6 h-60 overflow-y-auto p-5" bind:this={element}>
	<span class="text-sm self-center">
		{new Intl.DateTimeFormat('default', { dateStyle: 'full' }).format(new Date())}
	</span>

	{#if $messengerService.context.step >= 1}
		<MessageBox bot>want to work together? just want to chat? drop me a message here 🙋‍♂️</MessageBox>
	{/if}
	{#if $messengerService.context.step >= 2}
		<MessageBox bot>what's your good name?</MessageBox>
	{/if}
	{#if $messengerService.context.step >= 4}
		<MessageBox>{$messengerService.context.name}</MessageBox>
	{/if}
	{#if $messengerService.context.step >= 5}
		<div class="flex flex-col gap-1">
			<MessageBox bot multiple>hi {$messengerService.context.name}, nice to meet you 😁</MessageBox>
			<MessageBox bot>so what did you want to talk about?</MessageBox>
		</div>
	{/if}
	{#if $messengerService.context.step >= 7}
		<MessageBox>{$messengerService.context.subject}</MessageBox>
	{/if}
	{#if $messengerService.context.step >= 8}
		<div class="flex flex-col gap-1">
			<MessageBox bot multiple>sure, i will help</MessageBox>
			<MessageBox bot>can you share your email address?📨</MessageBox>
		</div>
	{/if}
	{#if $messengerService.context.step >= 10}
		<MessageBox>{$messengerService.context.email}</MessageBox>
	{/if}
	{#if $messengerService.context.step >= 11}
		<div class="flex flex-col gap-1">
			<MessageBox bot multiple>thanks 🙏</MessageBox>
			<MessageBox bot>anything else you would like to add?</MessageBox>
		</div>
	{/if}
	{#if $messengerService.context.step >= 13}
		<MessageBox>{$messengerService.context.message}</MessageBox>
	{/if}
	{#if $messengerService.context.step >= 14}
		<div class="flex flex-col gap-1">
			<MessageBox bot multiple>i got your message</MessageBox>
			<MessageBox bot>i be around, see yaa 🙋‍♂️</MessageBox>
		</div>
	{/if}
</div>
