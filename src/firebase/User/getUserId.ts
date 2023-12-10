import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import IUser from "@/utils/Interfaces/dataModel/IUser";


export const getUserId = async (email: string, role: string) => {
    const q = query(collection(dbFirestore, "users"), and(
                                                            where("email", "==", email), 
                                                            where("role", "==", role)));
    const snapShot = await getDocs(q);
    if (snapShot.empty) {
        return null;
    }
    const user = snapShot.docs[0].data();
    return (user as IUser)._id as string;
}