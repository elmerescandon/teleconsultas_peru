import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../config";

export const downloadData = async (
    folder: string,
    subfolder: string,
    dataName: string
) => {
    try {
        const URLData = await getDownloadURL(
            ref(storage, `${folder}/${subfolder}/${dataName}`)
        );
        return URLData;
    } catch (error) {
        // do nothing if error 404
        return "";	
        // throw new Error("No se pudo conectar a la base de datos");
    }
};
