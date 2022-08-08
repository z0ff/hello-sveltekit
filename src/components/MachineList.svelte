<script lang="ts">
    import type { Contents, Machine } from "$lib/type";
    import MachineInfo from "./MachineInfo.svelte";
    export let machines: Contents<Machine>;
</script>


<div class="container p-5 w-full flex-grow">
    <div class="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {#each machines.items as machine}
        <MachineInfo machine={ machine } />
        {/each}
    </div>
</div>