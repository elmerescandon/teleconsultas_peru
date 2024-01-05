import getAppointment from "@/firebase/Appointments/getAppointment";
import { getDoctorName } from "@/firebase/Doctor/getDoctorName";
import getTokenAuth from "@/lib/zoom/getTokenAuth";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { sessionDuration, sessionSettings, sessionTimeZone, zoomMeetingURL } from "@/utils/constants/APIConstants"
import { NextResponse } from "next/server";

export async function GET(request: Request){
    const {searchParams } = new URL(request.url);

    const appointmentId = searchParams.get('appId'); 
    const startTime = searchParams.get('start_time');

    if (!appointmentId || !startTime) return Response.redirect('/404', 301);

    const appointmentMatch = appointmentId.replace(/\D/g, '') as string;

    try {

        const appointment = await getAppointment(appointmentId);
        if (!appointment) return Response.redirect('/404', 301);

        const doctorData = await getDoctorName(appointment.doctorId);
        if (!doctorData) return Response.redirect('/404', 301);




        const zoomToken = await getTokenAuth();
        const res = await fetch(`${zoomMeetingURL}`,{
            headers: {
                'Authorization': 'Bearer ' + zoomToken,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                topic: `Salufy Salud: ${doctorData.name} ${doctorData.lastName} -  Cita ${appointmentMatch}`,
                type: 2,
                start_time: startTime.replace('.000', ''),
                duration: sessionDuration,
                timezone: sessionTimeZone,
                settings: sessionSettings,
                join_before_host: true,
            }),
        });
    
        const data = await res.json();
        return NextResponse.json({data});
    } catch (error) {
        return NextResponse.json({error});
    }


}