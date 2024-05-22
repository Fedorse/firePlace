export const filterProducts = (products, categoryIds) => {
	console.log(categoryIds);

	if (categoryIds.length === 0) {
		return products; // Если категории не выбраны, возвращаем все продукты
	}

	return products.filter((product) => categoryIds.includes(product.category_id));
};
