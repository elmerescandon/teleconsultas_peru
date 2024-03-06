import {collection, addDoc} from "firebase/firestore";
import dbFirestore from "../config";
import IZoomToken from "@/utils/Interfaces/API/Zoom/IZoomToken";

const addZoomToken = async (token: string) => {
  try {
    const zoomToken: IZoomToken = {
      id: "zoom",
      date: new Date(),
      token,
    };
    await addDoc(collection(dbFirestore, "tokens"), zoomToken);
  } catch (e) {
    throw e;
  }
};

export default addZoomToken;
