import { and, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import dbFirestore from "../config"

const deactivateLostPassword = async (code: number, id: string) =>{
    try{
        const q = query(collection(dbFirestore, "passwords"), where("code", "==", code), where("id", "==", id));
        const querySnapshot = await getDocs(q);
        if(querySnapshot.size > 0){
            const docRef = doc(dbFirestore, "passwords", querySnapshot.docs[0].id);
            await updateDoc(docRef, {
                status: "restored"
            })
        }
    }
    catch{
        throw new Error("Error al desactivar el código de recuperación.")
    }
}

export default deactivateLostPassword;