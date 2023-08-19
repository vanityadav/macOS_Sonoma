<script lang="ts">
	import { MenuLabel } from '$lib/components/text-styles';

	let clock = new Intl.DateTimeFormat('default', {
		hour: '2-digit',
		minute: '2-digit',
		hourCycle: 'h12'
	}).format(new Date());
	let day = new Intl.DateTimeFormat('default', {
		weekday: 'short'
	}).format(new Date());
	let date = new Intl.DateTimeFormat('default', {
		month: 'short',
		day: 'numeric'
	}).format(new Date());

	setInterval(() => {
		clock = new Intl.DateTimeFormat('default', {
			hour: '2-digit',
			minute: '2-digit',
			hourCycle: 'h12'
		}).format(new Date());
		day = new Intl.DateTimeFormat('default', {
			weekday: 'short'
		}).format(new Date());
		date = new Intl.DateTimeFormat('default', {
			month: 'short',
			day: 'numeric'
		}).format(new Date());
	}, 1000);
</script>

<div class="flex items-center gap-2">
	<MenuLabel>{day} {date}</MenuLabel>
	<MenuLabel>{clock}</MenuLabel>
</div>
