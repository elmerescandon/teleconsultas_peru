import {and, collection, getDocs, query, where} from "firebase/firestore";
import dbFirestore from "../config";
import IZoomToken from "@/utils/Interfaces/API/Zoom/IZoomToken";

export const getZoomToken = async () => {
  try {
    const q = query(
      collection(dbFirestore, "tokens"),
      and(where("id", "==", "zoom"))
    );
    const snapShot = await getDocs(q);
    if (snapShot.empty) {
      return null;
    }
    const zoomToken = snapShot.docs[0].data();
    return zoomToken as IZoomToken;
  } catch (error) {
    throw error;
  }
};
