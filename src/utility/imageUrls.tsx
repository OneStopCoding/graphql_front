import UploadImage from "./fileuploader";

const ImageUrls = async(images: [string] | any[]) =>
{
    const imagesUrls: string[] = []
    try {
        for (let i = 0; i < images.length; i++) {
            const url = await UploadImage(images[i][0])
            imagesUrls.push(url)
        }
        return imagesUrls
    } catch (error) {
        console.log(error)
    }

    return imagesUrls
}
export default ImageUrls