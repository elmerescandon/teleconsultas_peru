import { ref, uploadBytes } from "firebase/storage"
import { storage } from "../config"

export const uploadData = async (folder: string, subfolder: string,  dataName: string, data: File,   ) => {
    try{
        const storageRef = ref(storage, `${folder}/${subfolder}/${dataName}`);
        await uploadBytes(storageRef, data);
    } catch (error) {
        throw error;
    }
}