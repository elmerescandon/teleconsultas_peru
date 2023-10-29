import { ICreateMeeting } from "@/utils/Interfaces/API/Zoom/ICreateMeeting";
import RoutesZoom from "@/utils/routes/RoutesZoom";


interface IResponse {
    data: ICreateMeeting
}
    

const createZoomAppointment = async (appointmentId: string, startTime: string) => {
    try{    
        const rest = await fetch(`${process.env.NEXT_PUBLIC_MYPAGE_URL}${RoutesZoom.ZOOM_MEETING}?appId=${appointmentId}&start_time=${startTime}`);
        const data : IResponse = await rest.json();
        return data.data.join_url;
    } catch (error) {
        throw new Error("Error creating Zoom appointment, please contact support");
    }
};


export default createZoomAppointment;