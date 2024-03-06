import {getZoomToken} from "@/firebase/Zoom/getZoomToken";
import IZoomToken from "@/utils/Interfaces/API/Zoom/IZoomToken";
import getTokenAuth from "./getTokenAuth";
import addZoomToken from "@/firebase/Zoom/addZoomToken";
import {Timestamp} from "firebase/firestore";
import updateZoomToken from "@/firebase/Zoom/updateZoomToken";

export const handleZoomToken = async () => {
  try {
    let newToken: string;
    const zoomToken: IZoomToken | null = await getZoomToken();
    if (zoomToken === null) {
      newToken = await getTokenAuth();
      await addZoomToken(newToken);
    } else {
      const zoomTime = zoomToken.date as Timestamp;
      // compare if zoom time is less than 1 hour considering zoomTime as Timestamp from firebase
      if (Date.now() - zoomTime.toMillis() > 3600000) {
        newToken = await getTokenAuth();
        await updateZoomToken(newToken);
      } else {
        newToken = zoomToken.token;
      }
    }
    return newToken;
  } catch (error) {
    throw error;
  }
};
