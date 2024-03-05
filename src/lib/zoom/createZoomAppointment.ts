import getAppointment from "@/firebase/Appointments/getAppointment";
import {getDoctorName} from "@/firebase/Doctor/getDoctorName";
import {ICreateMeeting} from "@/utils/Interfaces/API/Zoom/ICreateMeeting";
import {DateValue} from "@/utils/alias/alias";
import RoutesZoom from "@/utils/routes/RoutesZoom";
import {Timestamp} from "firebase/firestore";
import getTokenAuth from "./getTokenAuth";

interface IResponse {
  data: ICreateMeeting;
}

const createZoomAppointment = async (
  appointmentId: string,
  startTime: DateValue
) => {
  try {
    const newToken = await getTokenAuth();

    const dateString = (startTime as Timestamp).toDate().toISOString();
    const appointment = await getAppointment(appointmentId);
    if (!appointment) throw new Error("Failed to get appointment data");

    const doctorData = await getDoctorName(appointment.doctorId);
    if (!doctorData) throw new Error("Failed to get doctor data");

    console.log({
      appointmentId: appointmentId,
      startTime: dateString,
      doctorName: doctorData.name,
      doctorLastName: doctorData.lastName,
      token: newToken,
    });

    const rest = await fetch(
      `${process.env.NEXT_PUBLIC_MYPAGE_URL}${RoutesZoom.ZOOM_MEETING}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appointmentId: appointmentId,
          startTime: dateString,
          doctorName: doctorData.name,
          doctorLastName: doctorData.lastName,
          token: newToken,
        }),
      }
    );

    if (!rest.ok) {
      throw new Error(
        "Error creating Zoom appointment, please contact support"
      );
    }

    const data: IResponse = await rest.json();
    if (!data.data.join_url || data.data.join_url === "")
      throw new Error("Link not created");

    return data.data.join_url;
  } catch (error) {
    throw error;
  }
};

export default createZoomAppointment;
