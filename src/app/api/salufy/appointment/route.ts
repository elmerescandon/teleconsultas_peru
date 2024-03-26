import createAppointment from "@/firebase/Appointments/createAppointment";
import updateAppointment from "@/firebase/Appointments/updateAppointment";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
  try {
    const {appointment} = (await request.json()) as {appointment: IAppointment};
    createAppointment(appointment);
  } catch (error) {
    return new NextResponse((error as Error).message, {status: 406});
  }
}

export async function PUT(request: Request) {
  try {
    const {id, appointmentFields} = (await request.json()) as {
      id: string;
      appointmentFields: Partial<IAppointment>;
    };

    updateAppointment(id, appointmentFields);
  } catch (error) {
    return new NextResponse((error as Error).message, {status: 406});
  }
}
