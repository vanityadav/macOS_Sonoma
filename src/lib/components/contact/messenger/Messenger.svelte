<script lang="ts">
	import Message from './Message.svelte';
	import MessengerHeader from './MessengerHeader.svelte';
	import MessengerInput from './MessengerInput.svelte';
</script>

<div class="flex flex-col gap-8 bg-hover rounded-3xl overflow-hidden">
	<MessengerHeader />
	<Message />
	<MessengerInput />
</div>
