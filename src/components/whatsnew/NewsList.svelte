<script lang="ts">
	import type { Contents, Article } from '$lib/type';
	export let articles: Contents<Article>;

    function formatDate(s: string) {
        if (s.length != 24) return null;
        return `${s.slice(0,4)}/${s.slice(5,7)}/${s.slice(8,10)}`;
    }
</script>

<div class="flex flex-col max-w-5xl mx-auto">
	{#each articles.items as article, i}
		<div
			class="card card-compact mx-auto w-full max-w-5xl min-h-32 card-side bg-base-100 rounded-none"
		>
			<a href={`/whatsnew/article/${article._id}`}><figure class="p-5 w-32 h-32">
				<img
					class="w-full h-full object-cover rounded-xl"
					src={article.meta == undefined || article.meta.ogImage == undefined
						? '/placeholder_machine.png'
						: article.meta.ogImage.src}
                    alt="thumbnail"
				/>
			</figure></a>
			<div class="card-body">
				<a href={`/whatsnew/article/${article._id}`} class="card-title text-sm md:text-xl">{article.title}</a>
				<p class="text-xs">{formatDate(article._sys.createdAt)}</p>
                <!--
				<div class="card-actions justify-end">
					<a href={`/whatsnew/article/${article._id}`} class="btn btn-primary btn-sm">Read More</a>
				</div>
            -->
			</div>
		</div>
        {#if i < articles.items.length - 1}
        <div class="divider"></div>
        {/if}
	{/each}
</div>
