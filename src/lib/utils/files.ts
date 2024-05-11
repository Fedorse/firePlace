import { promises as fs } from 'fs';
import path from 'path'
import { DEFAULT_PRODUCT_IMAGE } from './constsImg'

export const saveImage = async (imageFile) => {
    const uploadDir = path.join(process.cwd(), 'static/images/')
    const uniqueName = `${Date.now()}-${imageFile.name}`
    const savePath = path.join(uploadDir, uniqueName)
try {
    const buffer = await imageFile.arrayBuffer();
    await fs.writeFile(savePath, Buffer.from(buffer));


    return `/images/${uniqueName}`

} catch (error) {
return DEFAULT_PRODUCT_IMAGE
}
}
