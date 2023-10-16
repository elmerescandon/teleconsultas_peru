import PopUpAppointment from "@/components/Atoms/PopUp/PopUpAppointment/PopUpAppointment";
import { getDoctorName } from "@/firebase/Doctor/getDoctorName";
import { getSpecialityName } from "@/firebase/Speciality/getSpecialityName";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { stringToDate } from "@/utils/functions/utils";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

type PatientDateProps = {
    appointment: IAppointment;
};

const PatientDate = ({ appointment }: PatientDateProps) => {
    const [popUpOpen, setPopUpOpen] = useState(false);
    const { doctorId, specialityId, date } = appointment;
    const [summary, setSummary] = useState<{
        doctorName: string;
        specialityName: string;
    }>({ doctorName: "", specialityName: "" });

    useEffect(() => {
        const getInfoFromDb = async (
            doctorId: string,
            specialityId: string
        ) => {
            if (doctorId === "" || specialityId === "") return;
            const doctor = await getDoctorName(doctorId);
            const speciality = await getSpecialityName(specialityId);

            if (doctor && speciality) {
                setSummary({
                    specialityName: speciality.name,
                    doctorName: `Dr. ${doctor.name} ${doctor.lastName}`,
                });
            } else {
                setSummary({ doctorName: "", specialityName: "" });
            }
        };

        getInfoFromDb(doctorId, specialityId);
    }, []);

    return (
        <div className="w-full">
            <button
                className="flex items-center w-full px-10 py-3 justify-between bg-brand-600 text-basic-white rounded-3xl"
                onClick={() => setPopUpOpen(true)}
            >
                <div>
                    <div>{summary.specialityName}</div>
                    <div>{stringToDate(date)}</div>
                </div>
                <div className="w-36 text-left">{summary.doctorName}</div>
                <div className="flex gap-3 items-center">
                    <p className="text-brand-50">Ver más</p>
                    <BookOpenIcon className="w-8 h-8 text-brand-100" />
                </div>
            </button>
            {popUpOpen && (
                <PopUpAppointment
                    onClose={() => setPopUpOpen(false)}
                    appointment={appointment}
                />
            )}
        </div>
    );
};

export default PatientDate;
