<script context="module" lang="ts">
    import type { Contents, Content } from 'newt-client-js';
    
    interface Image {
        _id: string
        fileName: string
        fileSize: string
        fileType: string
        height: Number
        width: Number
        src: string
    };

    interface Machine extends Content {
        name: string
        usage: string
        os: string
        cpu: string
        gpu: string
        ram: Number
        storage: Number
        image: Image
    };
    
    import type { LoadEvent, LoadOutput } from "@sveltejs/kit";

    export async function load({ fetch }: LoadEvent): Promise<LoadOutput> {
        const url = `${import.meta.env.VITE_API_BASE}machines/machine`;

        const response = await fetch(url , {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_SECRET}`,
            }
        });

        const respJson = await response.json();

        const respStr = JSON.stringify(respJson);

        return response.ok
        ? {
            props: {
                machines: respStr,
            }
        }
        : {
            status: response.status,
            error: new Error('Error')
        }
    };
</script>

<script lang="ts">
    export let machines: string;
</script>

<p>{ machines }</p>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
