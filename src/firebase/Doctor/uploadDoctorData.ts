import { ref, uploadBytes } from "firebase/storage"
import { storage } from "../config"

export const uploadDoctorData = async (doctorData: File, dataName: string, subfolder: string) => {
    try{
        const storageRef = ref(storage, `doctors/${subfolder}/${dataName}`);
        await uploadBytes(storageRef, doctorData);
    } catch (error) {
        throw error;
    }
}