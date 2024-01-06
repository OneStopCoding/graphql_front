import UploadImage from "./fileuploader";

const ImageUrls = async(values: { images: string | any[]; }) =>
{
    const images = []
    try {
        for (let i = 0; i < values.images.length; i++) {
            const url = await UploadImage(values.images[i])
            images.push(url)
        }
        return images
    } catch (error) {
        console.log(error)
    }

    return images
}
export default ImageUrls