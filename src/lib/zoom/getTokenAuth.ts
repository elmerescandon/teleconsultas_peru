import IAuthResponse from "@/utils/Interfaces/API/Zoom/IAuthResponse";
import RoutesZoom from "@/utils/routes/RoutesZoom";

const getTokenAuth = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_MYPAGE_URL}${RoutesZoom.ZOOM_AUTH}`
    );
    if (!res.ok) {
      throw new Error("Failed to get the Zoom Token");
    }

    const dataResponse: IAuthResponse = await res.json();
    return dataResponse.data.access_token;
  } catch (error) {
    throw error;
  }
};

export default getTokenAuth;
