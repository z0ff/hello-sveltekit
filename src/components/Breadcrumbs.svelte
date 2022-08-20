<script lang="ts">
    export let page: string;
    export let article: string;
    export let link: string;
</script>

<div class="breadcrumbs text-xl text-left">
	<ul>
		<li><a href="/">Home</a></li>
		{#if article == ''}
			<li class="font-bold">{page}</li>
		{:else}
			<li><a href={link}>{page}</a></li>
			<li class="font-bold truncate">{article}</li>
		{/if}
	</ul>
</div>
