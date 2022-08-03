<script lang="ts">
	import type { Machine } from '../global';
	export let machine: Machine;
</script>

<div class="card card-compact w-full bg-neutral shadow-x1">
	<figure style="height: 300px">
		<img class="cover" src={machine.image.src} alt="../../static/placeholder_machine.png" />
	</figure>
	<div class="card-body bg-base-300">
		<h2 class="card-title">{machine.name}</h2>
		<table class="table table-zebra w-full">
			<tbody>
				<tr>
					<th>用途</th>
                    <td class="text-right">
                        {#each machine.usage as usage}
                            <div class="badge badge-outline">{usage}</div>
                        {/each}
                    </td>
				</tr>
				<tr>
					<th>OS</th>
                    <td class="text-right">{machine.os}</td>
				</tr>
				<tr>
					<th>CPU</th>
                    <td class="text-right">{machine.cpu}</td>
				</tr>
				<tr>
					<th>GPU</th>
                    <td class="text-right">{machine.gpu}</td>
				</tr>
				<tr>
					<th>メモリ</th>
                    <td class="text-right">{machine.ram} GB</td>
				</tr>
				<tr>
					<th>ストレージ</th>
                    <td class="text-right">{machine.storage} GB</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
