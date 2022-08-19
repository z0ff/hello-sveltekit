<script context="module" lang="ts">
	import type { LoadEvent, LoadOutput } from '@sveltejs/kit';

	export async function load({ params, fetch }: LoadEvent): Promise<LoadOutput> {
		const url = `${import.meta.env.VITE_API_BASE}whatsnew/article/${params._id}`;

		const response = await fetch(url, {
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_API_SECRET}`
			}
		});

		const resp = await response.json();

		//const respStr = JSON.stringify(respJson);

		return response.ok
			? {
				props: {
					article: resp
				}
			  }
			: {
				status: response.status,
				error: new Error('Error')
			  };
	}
</script>

<script lang="ts">
    import type { Article } from '$lib/type';
	export let article: Article;
    import { pageTitle, articleName } from "$lib/store";

    pageTitle.set("What's new");
	articleName.set(article.title);
	const img_src =
		article.meta == undefined || article.meta.ogImage == undefined
			? null
			: article.meta.ogImage.src;
</script>

<div class="p-2 px-5 w-full max-w-5xl">
	<div class="breadcrumbs text-sm text-left">
		<ul>
			<li><a href='/whatsnew/1'>記事一覧</a></li> 
			<li class="truncate">{ article.title }</li>
		</ul>
	</div>
</div>
<div class="hero min-h-60 max-h-fit" style={`background-image: url(${img_src});`}>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-5xl">
			<h1 class="mb-5 text-5xl font-bold">{article.title}</h1>
            <p>作成: {article._sys.createdAt}<br>更新: {article._sys.updatedAt}</p>
		</div>
	</div>
</div>

<div class="container p-5 w-full max-w-5xl flex-grow">
	<div class="prose max-w-none">
		{@html article.body}
	</div>
</div>
