import UploadImage from "./fileuploader";

const ImageUrls = async(images: [string] | any[]) =>
{
    const imagesUrls: string[] = []
    try {
        if (images.length > 1) {
            for (let i = 0; i < images.length; i++) {
                const url = await UploadImage(images[i])
                imagesUrls.push(url)
            }
        }else{
            const url = await  UploadImage(images[0])
            imagesUrls.push(url)
        }

        return imagesUrls
    } catch (error) {
        console.log(error)
    }

    return imagesUrls
}
export default ImageUrls