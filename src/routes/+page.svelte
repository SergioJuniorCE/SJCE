<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if data.resultList}
	<ul>
		{#each data.resultList as post}
			<li>{post.title}</li>
		{/each}
	</ul>
{:else}
	<p>Loading...</p>
{/if}
