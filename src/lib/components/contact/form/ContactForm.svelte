<script lang="ts">
	import { enhance } from '$app/forms';

	export let form: any;

	$: errors = form?.errors ? JSON.parse(form?.errors) : null;

	let submitting = false;
	let submitError = false;
	let submitted = false;

	const enhanceForm = () => {
		submitting = true;
		submitError = false;
		submitted = false;
		return async ({ update, result }: { result: any; update: any }) => {
			await update({ reset: true });
			if (result.type === 'failure') submitError = true;
			else submitted = true;
			submitting = false;
		};
	};
</script>

<form method="POST" use:enhance={enhanceForm} class="flex flex-col gap-4 py-4 items-center">
	<div class="w-full">
		<input
			type="text"
			name="name"
			placeholder="Name"
			class="border border-gray-400 p-2 rounded w-full outline-transparent focus:outline-blue-400"
			class:border-red-400={errors?.name}
		/>
		{#if errors?.name}
			<p class="text-red-400 text-sm pl-1">{errors?.name?.[0]}</p>
		{/if}
	</div>

	<div class="w-full">
		<input
			type="email"
			name="email"
			placeholder="Email"
			class="border border-gray-400 p-2 rounded w-full outline-transparent focus:outline-blue-400"
			class:border-red-400={errors?.email}
		/>
		{#if errors?.email}
			<p class="text-red-400 text-sm pl-1">{errors?.email?.[0]}</p>
		{/if}
	</div>

	<div class="w-full">
		<input
			type="text"
			name="subject"
			placeholder="Subject"
			class="border border-gray-400 p-2 rounded w-full outline-transparent focus:outline-blue-400"
			class:border-red-400={errors?.subject}
		/>
		{#if errors?.subject}
			<p class="text-red-400 text-sm pl-1">{errors?.subject?.[0]}</p>
		{/if}
	</div>

	<div class="w-full">
		<textarea
			rows="5"
			name="message"
			placeholder="Message"
			class="border border-gray-400 p-2 rounded w-full outline-transparent focus:outline-blue-400"
			class:border-red-400={errors?.message}
		/>
		{#if errors?.message}
			<p class="text-red-400 text-sm pl-1">{errors?.message?.[0]}</p>
		{/if}
	</div>
	{#if submitted}
		<p>
			Thanks for reaching out! We have got your request and will get back to you
			<abbr title="as soon as possible" class="no-underline"> ASAP.</abbr>
		</p>
	{/if}
	<button
		type="submit"
		value="Send"
		class="border border-gray-400 w-fit px-4 py-2 rounded text-white bg-black/80 hover:bg-black transition-colors duration-300"
		disabled={submitting}
	>
		{submitted
			? 'I be around 👋'
			: submitting
			? 'Setting Connection 🌏'
			: submitError
			? 'Yikes!😬 Retry '
			: "Let's Connect 🔗 "}
	</button>
</form>
