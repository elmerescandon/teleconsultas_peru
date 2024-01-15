import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../config";

export const downloadDoctorData = async (
    subfolder: string,
    dataName: string
) => {
    try {
        const URLData = await getDownloadURL(
            ref(storage, `doctors/${subfolder}/${dataName}`)
        );
        if (URLData === "") throw new Error("No se encontró el archivo");
        return URLData;
    } catch (error) {
        throw new Error("No se pudo conectar a la base de datos");
    }
};
