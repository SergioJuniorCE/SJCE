<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="container flex flex-col gap-3 pt-3">
	<h1 class="text-center text-3xl">Yoggan.dev</h1>

	<div class="flex flex-col gap-3">
		{#each data.posts as post}
			<div class="flex flex-col gap-1">
				<div class="flex gap-1">
					<div class="flex-1">
						<div class="text-xl font-bold">{post.title}</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>
