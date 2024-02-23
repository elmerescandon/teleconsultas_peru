import { ICreateMeeting } from "@/utils/Interfaces/API/Zoom/ICreateMeeting";
import { DateValue } from "@/utils/alias/alias";
import RoutesZoom from "@/utils/routes/RoutesZoom";
import { Timestamp } from "firebase/firestore";


interface IResponse {
    data: ICreateMeeting
}


const createZoomAppointment = async (appointmentId: string, startTime: DateValue) => {
    try {
        const dateString = (startTime as Timestamp).toDate().toISOString();
        const rest = await fetch(`${process.env.NEXT_PUBLIC_MYPAGE_URL}${RoutesZoom.ZOOM_MEETING}?appId=${appointmentId}&start_time=${dateString}`);
        const data: IResponse = await rest.json();
        return data.data.join_url;
    } catch (error) {
        throw new Error("Error creating Zoom appointment, please contact support");
    }
};


export default createZoomAppointment;