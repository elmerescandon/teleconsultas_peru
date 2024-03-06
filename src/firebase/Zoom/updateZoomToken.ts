import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import dbFirestore from "../config";
import addZoomToken from "./addZoomToken";

const updateZoomToken = async (token: string) => {
  try {
    const q = query(
      collection(dbFirestore, "tokens"),
      where("id", "==", "zoom")
    );
    const snapShot = await getDocs(q);
    if (snapShot.empty) {
      await addZoomToken(token);
    }
    const tokenDoc = snapShot.docs[0];
    await updateDoc(doc(dbFirestore, "tokens", tokenDoc.id), {
      token: token,
      date: new Date(),
    });
  } catch {
    throw new Error("Error actualizando al usuario");
  }
};

export default updateZoomToken;
