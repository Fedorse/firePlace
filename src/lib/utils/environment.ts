import { dev } from '$app/environment';
import { PUBLIC_DEV_BASE_URL, PUBLIC_PROD_BASE_URL } from '$env/static/public';
import { DEFAULT_PRODUCT_IMAGE } from './constsImg';

export const BASE_URL = dev ? PUBLIC_DEV_BASE_URL : PUBLIC_PROD_BASE_URL;

if (!BASE_URL) {
	throw new Error('Base URL is not defined. Please check your environment variables.');
}

if (!DEFAULT_PRODUCT_IMAGE) {
	throw new Error(
		'Default product image URL is not defined. Please check your environment variables.'
	);
}

export const getProductImageUrl = (imgUrl) => {
	const img = imgUrl ? imgUrl : DEFAULT_PRODUCT_IMAGE;
	return `${BASE_URL}${img}`;
};
