<script context="module" lang="ts">
    
    import type { LoadEvent, LoadOutput } from "@sveltejs/kit";

    export async function load({ fetch }: LoadEvent): Promise<LoadOutput> {
        const url = `${import.meta.env.VITE_API_BASE}machines/machine`;

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
                machines: resp,
            }
        }
        : {
            status: response.status,
            error: new Error('Error')
        }
    };
</script>

<script lang="ts">
    import type { Contents, Machine } from '$lib/type';
    import MachineList from "../components/MachineList.svelte";
    import { pageTitle, articleName } from "$lib/store";

    pageTitle.set("Machines");
    articleName.set("");

    export let machines: Contents<Machine>;
</script>

<MachineList machines={machines} />
