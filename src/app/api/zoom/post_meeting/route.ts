import getAppointment from "@/firebase/Appointments/getAppointment";
import {getDoctorName} from "@/firebase/Doctor/getDoctorName";
import getTokenAuth from "@/lib/zoom/getTokenAuth";
import {ICreateMeeting} from "@/utils/Interfaces/API/Zoom/ICreateMeeting";
import {
  sessionDuration,
  sessionSettings,
  sessionTimeZone,
  zoomMeetingURL,
} from "@/utils/constants/APIConstants";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url);

  const appointmentId = searchParams.get("appId");
  const startTime = searchParams.get("start_time");

  if (!appointmentId || !startTime) return NextResponse.error();

  const appointmentMatch = appointmentId.replace(/\D/g, "") as string;

  try {
    const appointment = await getAppointment(appointmentId);
    if (!appointment) throw new Error("Failed to get appointment data");

    const doctorData = await getDoctorName(appointment.doctorId);
    if (!doctorData) throw new Error("Failed to get doctor data");

    const zoomToken = await getTokenAuth();
    const res = await fetch(`${zoomMeetingURL}`, {
      headers: {
        Authorization: "Bearer " + zoomToken,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        topic: `Salufy Salud: ${doctorData.name} ${doctorData.lastName} -  Cita ${appointmentMatch}`,
        type: 2,
        start_time: startTime.replace(".000", ""),
        duration: sessionDuration,
        timezone: sessionTimeZone,
        settings: sessionSettings,
      }),
    });

    console.log(res);
    if (!res.ok) throw new Error("Failed to get data from Zoom API");

    const data: ICreateMeeting = await res.json();
    if (data.join_url === "" || data.join_url === undefined)
      throw new Error("Link not created");

    return NextResponse.json({data});
  } catch (error) {
    const errorMessage = (error as Error).message;
    NextResponse.json(
      {error: errorMessage},
      {status: 501, statusText: errorMessage}
    );
  }
}
