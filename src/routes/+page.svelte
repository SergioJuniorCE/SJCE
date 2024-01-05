<script lang="ts">
	import AppCard from '$lib/components/AppCard.svelte';

	const apps = [
		{
			name: 'Minecraft stack calculator',
			description: 'A simple calculator for calculating the amount of stacks of items you have',
			href: '/apps/minecraft-stack-calculator'
		},
		{
			name: "Railcraft tank calculator",
			description: "A calculator for calculating the amount of items you need for a certain sized tank",
			href: '/apps/railcraft-tank-calculator'
		},
		{
			name: "Encrypted messages",
			description: "Encrypt and decrypt messages with a password",
      href: '/apps/encrypted-messages'
		}
	];
</script>

<div class="container mx-auto">
	<div class="grid sm:grid-cols-1 mx-2 md:grid-cols-3 md:gap-3 my-3">
		{#each apps as app}
			<AppCard {...app} />
		{/each}
	</div>
</div>
