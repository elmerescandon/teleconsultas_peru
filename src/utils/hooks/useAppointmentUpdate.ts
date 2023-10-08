import { use, useEffect, useState } from "react";
import IAppointment from "../Interfaces/reducers/IAppointment";
import useAppointmentInfo from "./useAppointmentInfo";
import updateAppointmentField from "@/firebase/Appointments/updateAppointmentField";


const useAppointmentUpdate = (appointment: IAppointment) => {
    const [currentAppointment, setCurrentAppointment] = useState<IAppointment>(appointment);
    const [building, setBuilding] = useState<boolean>(true);

    const {
        date,
        doctorId,
        specialityId,
        price,
        summary,
        diagnosis,
        symptoms,
        prescription,
        treatment,
        startDate,
        endDate,
        status,
        patientId,
        _id,
    } = currentAppointment;

    const { summary: dataSummary } = useAppointmentInfo(
        doctorId,
        specialityId,
        patientId
    );

    const updateField = async <T>(appointmentId: string, value: T, field: string) => {
        try {
            await updateAppointmentField<T>(appointmentId, field, value);
        } catch {
            throw new Error("Error updating appointment");
        }
    }


    useEffect(() => {
        if (building) {
            setBuilding(false);
            return;
        }
        if (summary)
            updateField<string>(_id, summary, "summary");
    }, [summary]);

    useEffect(() => {
        if (building) {
            setBuilding(false);
            return;
        }
        if (symptoms)
            updateField<string[]>(_id, symptoms, "symptoms");
    }, [symptoms]);



    useEffect(() => {
        if (building) {
            setBuilding(false);
            return;
        }
        if (diagnosis)
            updateField<string[]>(_id, diagnosis, "diagnosis");
    }, [diagnosis]);



    useEffect(() => {
        if (building) {
            setBuilding(false);
            return;
        }
        if (prescription)
            updateField<string[]>(_id, prescription, "prescription");
    }, [prescription]);

    useEffect(() => {
        if (building) {
            setBuilding(false);
            return;
        }
        if (treatment)
            updateField<string[]>(_id, treatment, "treatment");
    }, [treatment]);
    
    return {currentAppointment, setCurrentAppointment, dataSummary};
};

export default useAppointmentUpdate;

