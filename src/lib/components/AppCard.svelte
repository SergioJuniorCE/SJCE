<script lang="ts">
	export let name: string;
	export let description: string;
	export let href: string;
</script>

<a {href} class="bg-gray-900 rounded-md p-3 border-white border-[1px] hover:bg-white hover:bg-opacity-10">
	<h3>{name}</h3>
	<p>{description}</p>
</a>
