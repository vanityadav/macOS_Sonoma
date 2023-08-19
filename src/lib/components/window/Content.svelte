<script lang="ts">
	export let styles: string;
</script>

<div on:dblclick|stopPropagation on:mousedown|stopPropagation class={styles} role="none">
	<slot />
</div>
