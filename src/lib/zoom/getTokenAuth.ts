import IAuthResponse from "@/utils/Interfaces/API/Zoom/IAuthResponse";
import RoutesZoom from "@/utils/routes/RoutesZoom";

const getTokenAuth = async () => {
    try{    
        const res = await fetch(`http://localhost:3000/${RoutesZoom.ZOOM_AUTH}`);
        const dataResponse : IAuthResponse = await res.json();
        return dataResponse.data.access_token;

    } catch (error) {
        throw new Error("Token not received during Zoom authentication");
    }
};


export default getTokenAuth;