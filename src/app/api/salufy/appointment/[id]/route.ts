import getAppointment from "@/firebase/Appointments/getAppointment";
import {NextResponse} from "next/server";

export async function GET(req: Request, {params}: {params: {id: string}}) {
  try {
    const {id} = params;
    if (!id || id === "") {
      throw new Error("No id provided");
    }
    const appointment = await getAppointment(id as string);

    if (!appointment) {
      throw new Error("Failed to fetch appointment");
    }
    return new NextResponse(JSON.stringify({appointment}), {status: 200});
  } catch (error) {
    return new NextResponse((error as Error).message, {status: 406});
  }
}
