import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import IUser from "@/utils/Interfaces/dataModel/IUser";


export const getUsersFromArray = async (usersId: string[]) => {
    try {
        const q = query(collection(dbFirestore, "users"), and(where("_id", "in", usersId)));
        const snapShot = await getDocs(q);
        if (snapShot.empty) {
            throw new Error("No se encontraron usuarios");
        }
        return snapShot.docs.map(doc => doc.data()) as IUser[];
    } catch (error) {
        throw error as Error;
    }
}