import getTokenAuth from "@/lib/zoom/getTokenAuth";
import { sessionDuration, sessionSettings, sessionTimeZone, zoomMeetingURL } from "@/utils/constants/APIConstants"

export async function GET(request: Request){
    const {searchParams } = new URL(request.url);

    const appointmentId = searchParams.get('appId'); 
    const startTime = searchParams.get('start_time');

    if (!appointmentId || !startTime) return Response.redirect('/404', 301);

    const appointmentMatch = appointmentId.replace(/\D/g, '') as string;

    try {
        const zoomToken = await getTokenAuth();
        const res = await fetch(`${zoomMeetingURL}`,{
            headers: {
                'Authorization': 'Bearer ' + zoomToken,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                topic: `Salufy Salud: Cita ${appointmentMatch}`,
                type: 2,
                start_time: startTime.replace('.000', ''),
                duration: sessionDuration,
                timezone: sessionTimeZone,
                settings: sessionSettings,
            }),
        });
    
        const data = await res.json();
        return Response.json({data});
    } catch (error) {
        return Response.json({error});
    }


}