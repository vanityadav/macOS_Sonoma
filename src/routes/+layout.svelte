<script lang="ts">
	import '../app.css';
	import Dock from '$lib/components/dock';
	import MenuBar from '$lib/components/menubar';
	import windowsContext from '$lib/store/window';
	import { Desktop } from '$lib/components/window';
</script>

<svelte:head>
	<title>macOS Sonoma</title>
	<meta name="keywords" content="" />
	<meta name="author" content="Vanit Yadav" />
	<meta name="description" content="" />
</svelte:head>

<!-- Bg Image -->
<div class="h-screen w-screen bg-app-bg bg-cover fixed inset-0 -z-10" />

<!-- App  -->
<div
	class="h-screen w-screen overflow-hidden font-primary flex flex-col gap-[2px]"
	class:select-none={$windowsContext.userSelectNone}
>
	<MenuBar />
	<Desktop>
		<slot />
	</Desktop>
	<Dock />
</div>
