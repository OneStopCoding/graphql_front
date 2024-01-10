import {mixed} from "yup";

const ImageValidation = mixed<FileList>()
    .test("FILE_SIZE", "Only files up to 10Mb are allowed!!",
        files =>
            !files ||
            files.length === 0 ||
            Array.from(files).every(file => file.size <= 10_000_000)
    )
    .test("FILE_TYPE", "Invalid image format!",
        files =>
            !files ||
            files.length === 0 ||
            Array.from(files).every(
                file => file && ['image/png', 'image/gif', 'image/jpg', ('image/jpeg')].includes(file.type)
            )
    )
export default ImageValidation