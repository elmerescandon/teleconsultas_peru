import IUserInfo from "@/redux/state-interfaces/User/IUserInfo";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import SendMail from "./SendMail";
import { dateToHours, dateToSpanishISO } from "@/utils/functions/utils";


const SendReserveNotification = async (appointment: IAppointment, user: IUserInfo, doctorName: string, specialityName: string) => {
    const subject = "Salufy - Reserva de turno";
    const htmlContent = `
        <h1>Reserva de turno</h1>
        <p>Estimado/a ${user.name},</p>
        <p>
            Se ha reservado una cita para usted. A continuación se detalla la información de la misma.
        </p>

        <p>
            <b>Información de la cita:</b>
            <ul>
                <li><b>Fecha:</b> ${dateToSpanishISO(appointment.date)}</li>
                <li><b>Hora:</b> ${dateToHours(appointment.startDate,appointment.endDate)}</li>
                <li><b>Doctor:</b> ${doctorName}</li>
                <li><b>Especialidad:</b> ${specialityName}</li>
            </ul>
        </p>
        <p>Que tenga un buen día.</p>
        <br/>
        <br/>
        <p>
            Atentamente, <br/>
            <b>Salufy</b>
        </p>
    `;
    
    try{
        await SendMail(user.email, subject, htmlContent);
    } catch (e) {
        throw new Error("No se pudo envíar el mail, intente más tarde.");
    }
}


export default SendReserveNotification;