import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { and, collection, getDocs, query, where } from "firebase/firestore";
import dbFirestore from "../config";
import IDateRangeAppointment from "@/utils/Interfaces/IDateRangeAppointment";

const getUserAppointmentsFiltered = async (userId: string, status: string, date: IDateRangeAppointment , specialityId: string) => {

    if (date.init === null || date.finish === null) {
        throw Error("Date range is not valid");
    }
    const initDate = new Date(date.init);
    const finishDate = new Date(date.finish);

    const q = query(collection(dbFirestore, "appointments"), and(where("patientId", "==", userId),
                                                                 where("status", "==", status), 
                                                                 where("specialityId", "==", specialityId),
                                                                //  and(where("date", ">=",initDate), where("date", "<=", finishDate))
                                                                 ));
    
    const snapShot = await getDocs(q);

    const appointments: IAppointment[] = [];
    if (snapShot.empty) {
        return appointments;
    }
    snapShot.docs.forEach((doc) => {
        const appointment = doc.data() as IAppointment;
        appointments.push(appointment);
    });
    return appointments;
    


}

export default getUserAppointmentsFiltered;