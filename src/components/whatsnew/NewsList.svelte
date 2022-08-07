<script lang="ts">
    import type { Contents, Article } from '../../global';
	export let articles: Contents<Article>;
</script>

<div class="flex flex-col gap-5">
{#each articles.items as article}
	<!--
    <div class="prose">
        {@html article.body}
    </div>
    {article.title}
    -->

	<div class="card card-compact mx-auto w-full max-w-5xl sm:h-48 sm:card-side bg-base-100 shadow-xl">
		<figure class="sm:w-48 h-48 sm:h-full">
            {#if article.meta.ogImage == undefined}
                <img class="w-full h-full object-cover" src="placeholder_machine.png" />
            {:else}
                <img class="w-full h-full object-cover" src={article.meta.ogImage.src} />
            {/if}
        </figure>
		<div class="card-body">
			<h2 class="card-title">{article.title}</h2>
			<p class="text-xs">作成:{article._sys.createdAt}<br>更新:{article._sys.updatedAt}</p>
			<p>{article.meta.description}</p>
			<div class="card-actions justify-end">
				<a href={`/whatsnew/${ article._id }`} class="btn btn-primary">Read More</a>
			</div>
		</div>
	</div>
{/each}
</div>
