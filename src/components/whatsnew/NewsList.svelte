<script lang="ts">
	import { formatDate } from '$lib/datetime';
	import type { Contents, Article } from '$lib/type';
	export let articles: Contents<Article>;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
	{#each articles.items as article, i}
		<a href={`/whatsnew/article/${article._id}`}>
			<div
				class="card card-compact mx-auto w-full h-64 bg-base-100 shadow-xl"
			>
				<figure class="h-36">
					<img
						class="w-full h-full object-cover"
						src={article.meta == undefined || article.meta.ogImage == undefined
							? '/placeholder_machine.png'
							: article.meta.ogImage.src}
						alt="thumbnail"
					/>
				</figure>
				<div class="card-body my-auto">
					<p class="text-xs">{formatDate(article._sys.createdAt)}</p>
					<h2 class="card-title link link-hover text-xl line-clamp-2">{article.title}</h2>
				</div>
			</div>
		</a>
	{/each}
</div>
