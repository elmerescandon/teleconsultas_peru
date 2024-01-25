import { getDoctorName } from "@/firebase/Doctor/getDoctorName";
import { getSpecialityName } from "@/firebase/Speciality/getSpecialityName";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { dateToHours, stringToDate } from "@/utils/functions/utils";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";

type HistoryCardProps = {
    appointment: IAppointment;
};

const HistoryCard = ({ appointment }: HistoryCardProps) => {
    const { doctorId, specialityId, date, startDate, endDate } = appointment;
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
        <div className="w-full border-2 rounded-lg px-4 py-2 border-brand-50">
            <div>
                <div>{stringToDate(date as unknown as Timestamp)}</div>
                <div>{dateToHours(startDate, endDate)}</div>
                <div className="w-36 text-left">{summary.doctorName}</div>
            </div>
            {/* <div className="flex gap-3 items-center">
                <button className="text-brand-50">Ver más</button>
            </div> */}
        </div>
    );
};

export default HistoryCard;
