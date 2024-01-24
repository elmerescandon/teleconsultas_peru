import PopUpAppointment from "@/components/Atoms/PopUp/PopUpAppointment/PopUpAppointment";
import { getDoctorName } from "@/firebase/Doctor/getDoctorName";
import { getSpecialityName } from "@/firebase/Speciality/getSpecialityName";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { dateToHours, stringToDate } from "@/utils/functions/utils";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { Timestamp } from "firebase/firestore";
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
                className="flex items-center w-full px-10 py-3 justify-between bg-brand-600 text-basic-white rounded-3xl
                            max-lg:flex-col max-lg:items-start max-lg:gap-2
                            max-md:px-5"
                onClick={() => setPopUpOpen(true)}
            >
                <div
                    className="flex w-full items-center justify-between pr-5 gap-5
                                max-xl:justify-between 
                                max-md:flex-col max-md:items-start max-md:gap-2"
                >
                    <div
                        className="text-xl 
                                    max-lg:font-semibold"
                    >
                        {summary.specialityName}
                    </div>
                    <div
                        className="italic 
                                  max-md:text-left"
                    >
                        <p>
                            {stringToDate(
                                appointment.date as unknown as Timestamp
                            )}
                        </p>
                        <p>
                            {dateToHours(
                                appointment.startDate,
                                appointment.endDate
                            )}
                        </p>
                    </div>
                </div>
                <div className="text-left w-full">{summary.doctorName}</div>
                <div className="flex gap-3 items-center w-1/3">
                    <p className="text-brand-50 w-full">Ver más</p>
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
