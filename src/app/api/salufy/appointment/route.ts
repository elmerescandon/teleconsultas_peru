import createAppointment from "@/firebase/Appointments/createAppointment";
import updateAppointment from "@/firebase/Appointments/updateAppointment";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
    try {
        const {appointment} = (await request.json()) as {
            appointment: IAppointment;
        };
        const appointmentId = await createAppointment(appointment);
        return new NextResponse(JSON.stringify({appointmentId}), {status: 200});
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

        if (appointmentFields.date) {
            appointmentFields.date = new Date(appointmentFields.date as Date);
        }
        if (appointmentFields.startDate) {
            appointmentFields.startDate = new Date(
                appointmentFields.startDate as Date
            );
        }
        if (appointmentFields.endDate) {
            appointmentFields.endDate = new Date(
                appointmentFields.endDate as Date
            );
        }

        await updateAppointment(id, appointmentFields);
        console.log("Appointment updated");
        return new NextResponse("Appointment updated", {status: 200});
    } catch (error) {
        return new NextResponse((error as Error).message, {status: 406});
    }
}
