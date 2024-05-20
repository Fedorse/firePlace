import path from 'path';
import { promises as fs } from 'fs';
import { DEFAULT_PRODUCT_IMAGE } from './constsImg';

export const saveImage = async (imageFile) => {
	const uploadDir = path.join(process.cwd(), 'static/images/');
	const uniqueName = `${Date.now()}-${imageFile.name}`;
	const savePath = path.join(uploadDir, uniqueName);
	try {
		const buffer = await imageFile.arrayBuffer();
		await fs.writeFile(savePath, Buffer.from(buffer));

		return `/images/${uniqueName}`;
	} catch (error) {
		console.error('Error saving image:', error);
		return DEFAULT_PRODUCT_IMAGE;
	}
};

export const saveVideo = async (videoFile) => {
	const uploadDir = path.join(process.cwd(), 'static/videos/');
	const uniqueName = `${Date.now()}-${videoFile.name}`;
	const savePath = path.join(uploadDir, uniqueName);

	try {
		let buffer;
		if (videoFile instanceof Blob) {
			buffer = Buffer.from(await videoFile.arrayBuffer());
		} else {
			buffer = videoFile;
		}
		await fs.writeFile(savePath, buffer);

		return `/videos/${uniqueName}`;
	} catch (error) {
		console.error('Error saving video:', error);
		return null;
	}
};
