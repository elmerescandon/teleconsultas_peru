import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import ICredentials from "@/utils/Interfaces/API/Users/ICredentials";

export const loginUser = async (credentials: ICredentials) => {
    const { email, password, role } = credentials;
    const q = query(collection(dbFirestore, "users"), and(where("email", "==", email), where("password", "==", password), where("role", "==", role)));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 1) {
        return querySnapshot.docs[0].data();
    } else {
        return null;
    }
    
}