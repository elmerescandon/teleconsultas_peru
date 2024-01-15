import { addDoc, collection } from "firebase/firestore";
import dbFirestore from "../config";
import IPassword from "@/utils/Interfaces/dataModel/IPasswords";

const activateLostPassword = async (code: number, id: string) => {

    const passwordObject : IPassword = {
        code,
        id,
        status: "active",
        time: new Date().getTime().toString(),
    }

    try{
        await addDoc(collection(dbFirestore, "passwords"), passwordObject); 
    } catch (e) {
        throw new Error("No nos pudimos comunicar con el servidor, intente más tarde.");
    }   

}

export default activateLostPassword;