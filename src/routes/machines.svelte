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
    import type { Contents, Machine } from "../global";
    import MachineList from "../components/MachineList.svelte";
    import { pageTitle } from "../store";

    pageTitle.set("Machines");

    export let machines: Contents<Machine>;
</script>

<div class="prose pt-5 inline-block lg:hidden">
    <h1>Machines</h1>
</div>

<MachineList machines={machines} />
