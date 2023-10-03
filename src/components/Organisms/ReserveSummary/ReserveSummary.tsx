import LabelInformation from "@/components/Atoms/Labels/LabelInformation/LabelInformation";
import { getDoctorsFromSpeciality } from "@/firebase/Doctor/getDoctorsFromSpeciality";
import { useAppointment } from "@/utils/context/AppointmentContext/AppointmentContext";
import {
    getAppointmentHours,
    getDoctorName,
    getSpecialityName,
    stringToDate,
} from "@/utils/functions/utils";
import doctorsMockup from "@/utils/mockups/doctorsMockup";
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
            const doctors = await getDoctorsFromSpeciality(specialityId);
            if (doctors) {
                setDoctorName("");
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
                <LabelInformation
                    label="Doctor"
                    value={getDoctorName(doctorsMockup, doctorId)}
                />
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
