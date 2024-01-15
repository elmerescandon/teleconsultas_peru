import { and, collection, getCountFromServer, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";

const checkLostPassword = async (id: string) => {

    const q = query(collection(dbFirestore, "passwords"), and(where("id", "==", id),
                                                              where("status", "==", "active")));
    const snapShot = await getCountFromServer(q);


    if (snapShot.data().count > 0) {
        return true;
    }
    return false;
}
export default checkLostPassword;