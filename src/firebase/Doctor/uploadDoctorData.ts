import { ref, uploadBytes } from "firebase/storage"
import { storage } from "../config"

export const uploadDoctorData = async (doctorData: File, dataName: string) => {
    try{
        const storageRef = ref(storage, `doctors/${dataName}`);
        await uploadBytes(storageRef, doctorData);
        console.log("File uploaded successfully")
    } catch (error) {
        console.log(error)
    }
}