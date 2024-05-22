import { writable } from 'svelte/store';

const INITIAL_DATA = {
	categories: ['all']
};

const createFiltersStore = () => {
	const { subscribe, update, set } = writable({ ...INITIAL_DATA });

	const toggleCategory = (categoryId) => {
		update((current) => {
			const categories = current.categories;
			if (categoryId === 'all') {
				return { ...current, categories: ['all'] };
			}
			if (categories.includes(categoryId)) {
				const updatedCategories = categories.filter((id) => id !== categoryId);
				return { ...current, categories: updatedCategories.length ? updatedCategories : ['all'] };
			} else {
				const updatedCategories = categories.includes('all')
					? [categoryId]
					: [...categories, categoryId];
				return { ...current, categories: updatedCategories };
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
