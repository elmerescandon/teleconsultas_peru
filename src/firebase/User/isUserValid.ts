import IUserPost from "@/utils/Interfaces/API/Users/IUserPost";
import { and, collection, getCountFromServer, or, query, where } from "firebase/firestore";
import dbFirestore from "../config";

export const isUserValid = async (user: IUserPost) => {
    const q = query(collection(dbFirestore, "users"), and(  where("role","==", user.role) ,
                                                            or( where("email", "==", user.email),
                                                                where("id", "==", user.id))));
    const snapShot = await getCountFromServer(q);

    if (snapShot.data().count > 0) {
        return false;
    }
    return true;
}