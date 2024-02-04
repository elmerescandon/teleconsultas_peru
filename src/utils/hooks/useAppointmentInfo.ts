import { getDoctorName } from "@/firebase/Doctor/getDoctorName";
import { getPatientName } from "@/firebase/Patient/getPatientName";
import { getSpecialityName } from "@/firebase/Speciality/getSpecialityName";
import { useEffect, useState } from "react";


const useAppointmentInfo = (doctorId: string, specialityId: string, patientName: string) => {

    const [summary, setSummary] = useState<{
        doctorName: string;
        specialityName: string;
        patientName: string;
    }>({ doctorName: "", specialityName: "", patientName: "" });

    useEffect(() => {
        const getInfoFromDb = async (
            doctorId: string,
            specialityId: string,
            patientId: string
        ) => {

            if (doctorId === "" || specialityId === "" || patientId === "") return;
            const doctor = await getDoctorName(doctorId);
            const speciality = await getSpecialityName(specialityId);
            const patient = await getPatientName(patientName)

            if (doctor && speciality && patient) {
                setSummary({
                    specialityName: speciality.name,
                    doctorName: `Dr. ${doctor.name} ${doctor.lastName}`,
                    patientName: `${patient.name} ${patient.lastName}`,
                });
            } else {
                setSummary({ doctorName: "", specialityName: "", patientName: "" });
            }
        };

        getInfoFromDb(doctorId, specialityId, patientName);
    }, [patientName]);

    return { summary };
};

export default useAppointmentInfo;