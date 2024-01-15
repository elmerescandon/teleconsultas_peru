import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import IPassword from "@/utils/Interfaces/dataModel/IPasswords";


export const validatePasswordCode = async (code: number) => {
    const q = query(collection(dbFirestore, "passwords"), and(where("code", "==", code), where("status", "==", "active")));
    const snapShot = await getDocs(q);
    if (snapShot.empty) {
        throw Error("Código inválido, por favor verifique el código e intente nuevamente.");
    }
    return snapShot.docs[0].data() as IPassword;
}   