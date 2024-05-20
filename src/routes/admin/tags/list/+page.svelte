<script>
	import AdminEditIcon from '$lib/components/icons/AdminEditIcon.svelte';
	import AdminTitle from '$lib/components/admin/AdminTitle.svelte';
	export let data;
</script>

<AdminTitle text="Добавленные теги" />
<div class="text-lg min-w-full rounded-lg overflow-hidden px-24">
	<table class="text-lg w-full rounded-lg overflow-hidden shadow-lg">
		<thead class="text-xl bg-slate-200 border-slate-300 border">
			<tr>
				<th class="text-md font-semibold text-left pl-10 py-3">Название</th>
			</tr>
		</thead>
		<tbody>
			{#each data.tags as tag (tag.id)}
				<tr class="border-slate-300 border">
					<td
						class="text-slate-500 py-4 rounded-lg cursor-pointer text-lg hover:text-black hover:bg-slate-200"
					>
						<div class="flex gap-4 justify-between px-10">
							<a class="block w-full h-full" href="/admin/tags/{tag.id}">{tag.name}</a>
							<AdminEditIcon />
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
