import { collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";


export const getUser = async (email: string) => {
    const q = query(collection(dbFirestore, "users"), where("email", "==", email));
    const snapShot = await getDocs(q);
    if (snapShot.empty) {
        return null;
    }
    const user = snapShot.docs[0].data();
    return user;
}