import { and, collection, getCountFromServer, or, query, where } from "firebase/firestore";
import dbFirestore from "../config";

export const isUserValidMail = async (mail: string, role: string) => {
    const q = query(collection(dbFirestore, "users"), and(  where("role","==", role) ,
                                                            where("email", "==", mail),));
    const snapShot = await getCountFromServer(q);

    if (snapShot.data().count === 0) {
        return false;
    }
    return true;
}