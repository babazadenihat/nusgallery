export default async function handleFile(photo, setPhoto) {
    let promise = await prepareFile(photo);
    setPhoto(promise);
}
async function prepareFile(file) {
    let fileObject = {};
    let base64 = file && await convertFileToBase64(file);
    fileObject["FileName"] = file?.name;
    fileObject["MimeType"] = base64?.match(/^data:([A-Za-z-+/]+);base64,(.+)$/)?.[1];
    fileObject["base64"] = base64;

    return fileObject;
}

const convertFileToBase64 = async (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });