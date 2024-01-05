<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	type Diameter = 3 | 5 | 7 | 9;
	type Height = 4 | 5 | 6 | 7 | 8;
	let diameter: Diameter = 3;
	let height: Height = 4;
	let sidesWithWindows = 1;

	let walls = 0;
	let windows = 0;
	const valves = 2;

	$: diameter, height, sidesWithWindows, calculateBlocks();

	// This calculates the amount of blocks needed to build a railcraft tank for minecraft 1.7
	function calculateBlocks() {
		// A tank needs 2 valves, no more no less
		const innerDiameter = diameter - 2;
		const innerHeight = height - 2;

		const base = diameter * diameter;

		const sidings = (innerDiameter * 4 + 4) * innerHeight;

		windows = innerDiameter * innerHeight * sidesWithWindows;

		walls = base * 2 + sidings - valves - windows;
		// walls = base + (4 - sidesWithWindows);
	}
</script>

<h1 class="h1 text-3xl text-center my-3">Railcraft Tank Calculator</h1>

<div class="grid grid-cols-3 gap-3">
	<label class="label">
		<span>Diameter</span>
		<select class="select" bind:value={diameter}>
			<option value={3}>3</option>
			<option value={5}>5</option>
			<option value={7}>7</option>
			<option value={9}>9</option>
		</select>
	</label>
	<label class="label">
		<span>Height</span>
		<select class="select" bind:value={height}>
			<option value={4}>4</option>
			<option value={5}>5</option>
			<option value={6}>6</option>
			<option value={7}>7</option>
			<option value={8}>8</option>
		</select>
	</label>
	<label class="label">
		<span>Sides with windows</span>
		<select class="select" bind:value={sidesWithWindows}>
			<option value={0}>0</option>
			<option value={1}>1</option>
			<option value={2}>2</option>
			<option value={3}>3</option>
			<option value={4}>4</option>
		</select>
	</label>
</div>
<div class="mt-3 flex items-center justify-center">
	<button
		type="button"
		class="btn variant-filled"
		on:click={() => {
			calculateBlocks();
		}}>Calculate</button
	>
</div>

<div>
	<ul>
		<li>Walls: {walls}</li>
		<li>windows: {windows}</li>
		<li>valves: {valves}</li>
	</ul>
</div>
