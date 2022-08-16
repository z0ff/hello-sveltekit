<script context="module" lang="ts">
    import type { LoadEvent, LoadOutput } from "@sveltejs/kit";

    export async function load({ fetch }: LoadEvent): Promise<LoadOutput> {
        const url = `${import.meta.env.VITE_API_BASE}whatsnew/article?limit=3`;

        const response = await fetch(url , {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_SECRET}`,
            },
        });

        const resp = await response.json();

        //const respStr = JSON.stringify(respJson);

        return response.ok
        ? {
            props: {
                articles: resp,
            }
        }
        : {
            status: response.status,
            error: new Error('Error')
        }
    };
</script>

<script lang="ts">
	import News from '../components/hero/News.svelte';
	import About from '../components/hero/About.svelte';
	import Contact from '../components/hero/Contact.svelte';
	import { pageTitle, articleName } from '../store';
	import type { Contents, Article } from '$lib/type.d';
	pageTitle.set('Home');
    articleName.set('');
	export let articles: Contents<Article>;
</script>

<div
	class="w-full from-primary to-secondary text-primary-content -my-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20"
>
	<div class="hero min-h-screen pb-[8rem]">
		<!--<div class="hero-overlay bg-opacity-60" />-->
		<div class="hero-content text-neutral-content">
			<div class="max-w-lg">
				<h1 class="mb-5 text-7xl md:text-9xl font-bold">Hello<br>there.</h1>
				<p class="mb-5 text-xl">めちゃ拙いWebサイト</p>
			</div>
		</div>
	</div>
</div>

<News articles={articles} />

<About />

<Contact />

<!--
	<div class="container p-5 w-full flex-grow">
	</div>
-->
