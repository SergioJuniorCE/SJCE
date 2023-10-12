<script lang="ts">
	import AppCard from '$lib/components/AppCard.svelte';

	const apps = [
		{
			name: 'Minecraft stack calculator',
			description: 'A simple calculator for calculating the amount of stacks of items you have',
			href: '/apps/minecraft-stack-calculator'
		}
	];
</script>

<div class="container h-full mx-auto">
	<div class="grid grid-cols-3 gap-3 my-3">
		{#each apps as app}
			<AppCard {...app} />
		{/each}
	</div>
</div>
