import LabelInformation from "@/components/Atoms/Labels/LabelInformation/LabelInformation";
import Loading from "@/components/Molecules/Loading/Loading";
import { getDoctorName } from "@/firebase/Doctor/getDoctorName";
import { getSpecialityName } from "@/firebase/Speciality/getSpecialityName";
import { useAppointment } from "@/utils/context/AppointmentContext/AppointmentContext";
import {
    getAppointmentHours,
    getReasonName,
    stringToDate,
} from "@/utils/functions/utils";
import reasonMockup from "@/utils/mockups/reasonMockup";
import { useEffect, useState } from "react";

const ReserveSummary = () => {
    const [specialityName, setSpecialityName] = useState("");
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

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getDoctorsFromDb = async (doctorId: string) => {
            setLoading(true);
            const doctor = await getDoctorName(doctorId);
            if (doctor) {
                setDoctorName(`Dr. ${doctor.name} ${doctor.lastName}`);
            } else {
                setDoctorName("");
            }
            setLoading(false);
        };
        getDoctorsFromDb(doctorId);
    }, [doctorId]);

    useEffect(() => {
        const getSpecialityFromDb = async (specialityId: string) => {
            setLoading(true);
            const speciality = await getSpecialityName(specialityId);
            if (speciality) {
                setSpecialityName(speciality.name);
            } else {
                setSpecialityName("");
            }
            setLoading(false);
        };
        getSpecialityFromDb(specialityId);
    }, [specialityId]);

    return (
        <div className="w-1/3 max-xl:w-full">
            <div className="flex gap-5 items-center">
                <div className="text-2xl font-semibold py-4">Resumen</div>
                {loading && <Loading size={5} />}
            </div>
            <div>
                <LabelInformation label="Especialidad" value={specialityName} />
                <LabelInformation label="Doctor" value={doctorName} />
                <LabelInformation
                    label="Razón de consulta"
                    value={getReasonName(reasonMockup, reason)}
                />

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
