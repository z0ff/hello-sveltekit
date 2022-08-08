<script context="module" lang="ts">
    import type { LoadEvent, LoadOutput } from "@sveltejs/kit";

    export async function load({ params, fetch }: LoadEvent): Promise<LoadOutput> {
        const limit = 5;
        const pageNumber = Number(params.page);
        const skip = (pageNumber - 1) * limit;
        const url = `${import.meta.env.VITE_API_BASE}whatsnew/article?limit=${limit}&skip=${skip}`;

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
                pageNumber: pageNumber,
            }
        }
        : {
            status: response.status,
            error: new Error('Error')
        }
    };
</script>

<script lang="ts">
    import type { Contents, Article } from "$lib/type";
    import NewsList from "../../components/whatsnew/NewsList.svelte";
    import { pageTitle } from "../../store";

    pageTitle.set("What's new?");

    export let articles: Contents<Article>;
    export let pageNumber: number;
    console.log(pageNumber);
    const pages = Math.ceil(articles.total / articles.limit);
    console.log(pages);
</script>


<div class="container p-5 w-full flex-grow">
    <NewsList articles={articles} />
</div>

<div class="btn-group my-5">
    {#if pageNumber == 1}
    <a href=#undefined class="btn btn-disabled">Prev</a>
    {:else}
    <a href={`/whatsnew/${pageNumber - 1}`} class="btn">Prev</a>
    {/if}
    {#if pageNumber == pages}
    <a href=#undefined class="btn btn-disabled">Next</a>
    {:else}
    <a href={`/whatsnew/${pageNumber + 1}`} class="btn">Next</a>
    {/if}
</div>