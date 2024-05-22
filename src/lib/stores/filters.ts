import { writable } from 'svelte/store';

const INITIAL_DATA = {
	categories: []
};

const createFiltersStore = () => {
	const { subscribe, update, set } = writable({ ...INITIAL_DATA });

	const toggleCategory = (categoryId) => {
		update((current) => {
			const categories = current.categories;

			if (categories.includes(categoryId)) {
				return { ...current, categories: categories.filter((id) => id !== categoryId) };
			} else {
				return { ...current, categories: [...categories, categoryId] };
			}
		});
	};

	const reset = () => set({ ...INITIAL_DATA });

	return {
		subscribe,
		toggleCategory,
		reset
	};
};

export const filters = createFiltersStore();
