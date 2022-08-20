<script lang="ts">
	import { formatDate } from '$lib/datetime';
	import type { Contents, Article } from '$lib/type';
	export let articles: Contents<Article>;
</script>

<div class="hero min-h-fit bg-base-200">
	<div class="hero-content md:p-20 w-full flex-col md:flex-row">
		<div class="text-center lg:text-left">
			<h1 class="text-2xl md:text-5xl font-bold" style="word-break: keep-all; overflow-wrap: break-word;">新着<wbr>情報</h1>
		</div>
		<div class="flex-auto" />
		<div class="card m-5 w-full md:w-96 lg:w-[32rem] bg-base-100 shadow-2xl">
			<table class="table w-full table-fixed">
				<tbody>
					{#each articles.items as article, i}
						<tr class="hover"
							><td
								><a href={`/whatsnew/article/${article._id}`}>
									<div class="text-sm">{formatDate(article._sys.createdAt)}</div>
									<div class="font-bold truncate">{article.title}</div>
								</a></td
							></tr
						>
					{/each}
					<tr class="hover">
						<td>
							<a href="/whatsnew/1" class="text-xs block">もっと見る</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
