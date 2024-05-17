<script>
	import { enhance } from '$app/forms';

	let selectedTab = 'tab1';

	export let data;
</script>

<h3>Form edit tags</h3>

<div>
	<form
		use:enhance={async ({ update }) => {
			await update;
		}}
		method="POST"
		class=""
	></form>
</div>
<div class="flex flex-col w-full">
	<form
		use:enhance={async ({ update }) => {
			await update;
		}}
		method="POST"
		class=""
	>
		<input type="hidden" name="id" value={data.tag?.id} />
		<div class="p-0 sm:p-4 bg-gray-400">
			<div class="w-full" role="tablist">
				<label
					for="tab1"
					class="inline-block cursor-pointer p-4 text-center text-gray-700 bg-white rounded-t-lg border-b-2 border-transparent"
					aria-label="Основная информация">main info</label
				>
				<input
					type="radio"
					id="tab1"
					name="newProduct"
					class="hidden"
					role="tab"
					checked
					bind:group={selectedTab}
					value="tab1"
				/>

				<label
					for="tab2"
					class="inline-block cursor-pointer p-4 text-center text-gray-700 bg-white rounded-t-lg border-b-2"
					aria-label="Дополнительная информация">local</label
				>
				<input
					type="radio"
					id="tab2"
					name="newProduct"
					class="hidden"
					role="tab"
					bind:group={selectedTab}
					value="tab2"
				/>

				<div class="tab-content bg-base-100 border-base-300 rounded-b-lg p-6">
					<div class={selectedTab === 'tab1' ? 'block' : 'hidden'}>
						<div class="flex flex-col gap-5">
							<input
								value={data.tag?.name}
								type="text"
								name="name"
								placeholder="add name category"
							/>
						</div>
					</div>
					<div class={selectedTab === 'tab2' ? 'block' : 'hidden'}>
						<div class="flex flex-col gap-5">
							<input
								value={data.tag?.name_en}
								type="text"
								name="name_en"
								placeholder="add name en category"
							/>
						</div>
					</div>
				</div>
			</div>

			<div>
				<button
					formaction="?/updateCategory"
					class="bg-blue-300 text-white font-semibold p-2 rounded-lg"
				>
					update tags
				</button>
				<button
					formaction="?/deleteCategory"
					class="bg-blue-300 text-white font-semibold p-2 rounded-lg"
				>
					delete tags
				</button>
			</div>
		</div>
	</form>
</div>
