<script lang="ts">
	import type { PageData } from './$types';

	import { Autocomplete } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption } from '@skeletonlabs/skeleton';
	import { getToastStore } from '@skeletonlabs/skeleton';

	import items from '$lib/data/1.20.2/items.json';

	import { onMount } from 'svelte';

	export let data: PageData;

	const toastStore = getToastStore();

	let blockName = '';
	let amount = 0;
	let output = '';
	let showBlockNameAutoComplete = false;
	let blockList: string[] = [];

	onMount(() => {
		const blockListString = localStorage.getItem('blockList');
		if (blockListString) {
			blockList = JSON.parse(blockListString);
		}
	});

	const blockNameAutoComplete: AutocompleteOption<string>[] = items
		.map((item) => {
			return {
				label: item.displayName,
				value: item.name
			};
		})
		.sort();

	function onBlockSelection(event: CustomEvent<AutocompleteOption<string>>): void {
		console.log(event.detail);
		blockName = event.detail.label;
	}

	function calculate() {
		if (blockName === '') {
			output = `${amount} is ${parseInt(`${amount / 64}`)} stacks & ${amount % 64}`;
		} else {
			const item = items.find((item) => item.displayName.includes(blockName));
			if (item) {
				output = `${amount} ${item.name} is ${parseInt(`${amount / item.stackSize}`)} stacks & ${
					amount % item.stackSize
				}`;
			} else {
				alert('Item not found');
				return;
			}
		}
		blockList = [...blockList, output];
		localStorage.setItem('blockList', JSON.stringify(blockList));
	}

	function handleDeleteBlockListItem(item: string) {
		const confirmation = confirm('Are you sure you want to delete this item?');
		if (!confirmation) return;
		blockList = blockList.filter((block) => block !== item);
		localStorage.setItem('blockList', JSON.stringify(blockList));
	}

	function handleCopyBlockListItem(item: string) {
		navigator.clipboard.writeText(item);
		toastStore.trigger({
			message: 'The stack amount has been copied to your clipboard',
			timeout: 2 * 1000
		});
	}
</script>

<section>
	<div class="flex justify-center items-center">
		<div class="flex gap-2 mx-2 my-3">
			<label class="label">
				<span>Block Name</span>
				<input
					class="input rounded-sm"
					type="search"
					placeholder="Input"
					bind:value={blockName}
					on:focus={() => {
						showBlockNameAutoComplete = true;
					}}
					on:blur={() => {
						setTimeout(() => {
							showBlockNameAutoComplete = false;
						}, 100);
					}}
				/>
				{#if showBlockNameAutoComplete}
					<div class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto absolute" tabindex="-1">
						<Autocomplete
							bind:input={blockName}
							options={blockNameAutoComplete}
							on:selection={(event) => {
								console.log(event);
								onBlockSelection(event);
							}}
						/>
					</div>
				{/if}
			</label>
			<label class="label">
				<span>Amount</span>
				<input class="input rounded-sm" type="number" placeholder="Input" bind:value={amount} />
			</label>
		</div>
	</div>
	<button
		class="w-[97%] variant-filled-secondary mx-2 mb-3 rounded-md flex items-center justify-center py-2"
		on:click={calculate}
	>
		<i class="fa-solid fa-calculator" />
	</button>

	{#each blockList as item}
		<div class="grid grid-cols-[1fr_3rem_3rem] bg-gray-900 rounded-sm mx-2 mb-2">
			<div class="flex items-center pl-2">
				<span>{item}</span>
			</div>
			<button
				class="w-full variant-filled-secondary flex items-center justify-center py-2"
				on:click={() => handleCopyBlockListItem(item)}
			>
				<i class="fa-solid fa-clipboard" />
			</button>
			<button
				class="w-full bg-red-600 flex items-center justify-center py-2"
				on:click={() => handleDeleteBlockListItem(item)}
			>
				<i class="fa-solid fa-trash" />
			</button>
		</div>
	{:else}
		<section class="card w-full">
			<div class="p-4 space-y-4">
				<div class="grid grid-cols-[1fr_3rem_3rem] gap-2">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-[1fr_3rem_3rem] gap-2">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-[1fr_3rem_3rem] gap-2">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-[1fr_3rem_3rem] gap-2">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
		</section>
	{/each}
</section>
