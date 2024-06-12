<script lang="ts">
	import '../../../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<main class="flex items-center justify-center h-screen">
	<slot></slot>
</main>
