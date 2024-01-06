import axios from "axios";

const formData = new FormData()
const UploadImage = async (file: any) => {
    formData.append("file", file)
    formData.append("upload_preset", "idy1yyvr")
    const result = await axios.post('https://api.cloudinary.com/v1_1/dyhr4m8ep/image/upload', formData)
    return result.data.url
}
export default UploadImage