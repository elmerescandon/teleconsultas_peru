import LabelInformation from "@/components/Atoms/Labels/LabelInformation/LabelInformation";
import { getDoctorName } from "@/firebase/Doctor/getDoctorName";
import { useAppointment } from "@/utils/context/AppointmentContext/AppointmentContext";
import {
    getAppointmentHours,
    getSpecialityName,
    stringToDate,
} from "@/utils/functions/utils";
import specialitiesMockup from "@/utils/mockups/specialitiesMockup";
import { useEffect, useState } from "react";

const ReserveSummary = () => {
    const [doctorName, setDoctorName] = useState("");

    const appointment = useAppointment();
    const {
        date,
        doctorId,
        specialityId,
        details,
        reason,
        endDate,
        startDate,
    } = appointment;

    useEffect(() => {
        const getDoctorsFromDb = async (doctorId: string) => {
            const doctor = await getDoctorName(doctorId);
            if (doctor) {
                setDoctorName(`Dr. ${doctor.name} ${doctor.lastName}`);
            }
        };
        getDoctorsFromDb(doctorId);
    }, [doctorId]);

    return (
        <div className="w-1/3 max-xl:w-full">
            <div className="text-2xl font-semibold py-4">Resumen</div>
            <div>
                <LabelInformation
                    label="Especialidad"
                    value={getSpecialityName(specialitiesMockup, specialityId)}
                />
                <LabelInformation label="Doctor" value={doctorName} />
                <LabelInformation label="Razón de consulta" value={reason} />

                <LabelInformation
                    label="Fecha programada"
                    value={stringToDate(date)}
                />
                <LabelInformation
                    label="Hora programada"
                    value={getAppointmentHours(startDate, endDate)}
                />
                <LabelInformation label="Detalles" value={details} />
            </div>
        </div>
    );
};

export default ReserveSummary;
