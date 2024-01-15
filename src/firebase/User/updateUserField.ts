import { collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import dbFirestore from "../config"

const updateUserField = async <T>(id: string, field: string, value: T) =>{
    try{
        const q = query(collection(dbFirestore, "users"), where("_id", "==", id));
        const snapShot = await getDocs(q);
        if (snapShot.empty) {
            throw new Error("No se encontró el usuario.")
        }
        const user = snapShot.docs[0];
        await updateDoc(doc(dbFirestore, "users",user.id), {
            [field]: value
        })
    }
    catch{
        throw new Error("Error actualizando al usuario")
    }
}

export default updateUserField;