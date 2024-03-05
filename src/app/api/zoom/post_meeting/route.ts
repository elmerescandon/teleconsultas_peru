import {ICreateMeeting} from "@/utils/Interfaces/API/Zoom/ICreateMeeting";
import IPostMeeting from "@/utils/Interfaces/API/Zoom/IPostMeeting";
import {
  sessionDuration,
  sessionSettings,
  sessionTimeZone,
  zoomMeetingURL,
} from "@/utils/constants/APIConstants";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
  const postData: IPostMeeting = await request.json();

  const {token, appointmentId, startTime, doctorName, doctorLastName} =
    postData;

  if (
    appointmentId === "" ||
    startTime === "" ||
    doctorName === "" ||
    doctorLastName === ""
  )
    throw new Error("Missing parameters");

  const appointmentMatch = appointmentId.replace(/\D/g, "") as string;

  try {
    const res = await fetch(`${zoomMeetingURL}`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        topic: `Salufy Salud: ${doctorName} ${doctorLastName} -  Cita ${appointmentMatch}`,
        type: 2,
        start_time: startTime.replace(".000", ""),
        duration: sessionDuration,
        timezone: sessionTimeZone,
        settings: sessionSettings,
      }),
    });

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
