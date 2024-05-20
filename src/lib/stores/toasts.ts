import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

const createToastStore = () => {
	const { subscribe, update } = writable([]);

	return {
		subscribe,
		add: (message, type = 'info', ttl = 3000) => {
			const id = uuidv4();

			update((curr) => {
				return [...curr, { id, message, type, ttl }];
			});

			setTimeout(() => {
				update((curr) => {
					return curr.filter((toast) => toast.id !== id);
				});
			}, ttl);
		},
		remove: (id) => {
			update((curr) => {
				return curr.filter((toast) => toast.id !== id);
			});
		}
	};
};

export const toasts = createToastStore();
