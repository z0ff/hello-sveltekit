<script context="module" lang="ts">
    
    import type { LoadEvent, LoadOutput } from "@sveltejs/kit";

    export async function load({ fetch }: LoadEvent): Promise<LoadOutput> {
        const url = `${import.meta.env.VITE_API_BASE}whatsnew/article`;

        const response = await fetch(url , {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_SECRET}`,
            }
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
    import type { Contents, Article } from "../../global";
    import NewsList from "../../components/whatsnew/NewsList.svelte";
    import { pageTitle } from "../../store";

    pageTitle.set("What's new?");

    export let articles: Contents<Article>;
</script>


<div class="container p-5 w-full flex-grow">
    <NewsList articles={articles} />
</div>

<div class="btn-group my-5">
    {#each [1, 2, 3, 4, 5] as i}
    <button class="btn">{i}</button>
    {/each}
</div>