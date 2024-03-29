"use client";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {
    getAppointmentHours,
    getDoctorNameMockup as getDoctorName,
    getSpecialityName,
} from "@/utils/functions/utils";
import { getHourRange } from "@/utils/functions/utilsDate";
import useAppointmentInfo from "@/utils/hooks/useAppointmentInfo";
import doctorsMockup from "@/utils/mockups/doctorsMockup";
import specialitiesMockup from "@/utils/mockups/specialitiesMockup";
import Routes from "@/utils/routes/Routes";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";
import { Timestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React from "react";

type AppointmentCardProps = {
    appointment: IAppointment;
};

const AppointmentCard = ({ appointment }: AppointmentCardProps) => {
    const router = useRouter();
    const {
        specialityId,
        patientId,
        startDate,
        endDate,
        _id,
        doctorId,
        joinURL,
    } = appointment;

    const { summary } = useAppointmentInfo(doctorId, specialityId, patientId);

    const classNameIcon: string = `w-7 h-7 rounded-full p-1
    hover:text-white hover:bg-black  
    active:translate-y-1 transition-transform duration-300`;

    return (
        <div className="bg-neutral-100 rounded-2xl w-full">
            <div
                className="flex justify-between items-start p-4 gap-2
                            max-xl:flex-col"
            >
                <div>
                    <div className="text-lg">{summary.specialityName}</div>
                    <div className="text-lg italic">{summary.doctorName}</div>
                </div>

                <div className="flex flex-col gap-2 ">
                    <div className="text-md font-semibold">
                        {(appointment.date as unknown as Timestamp)
                            .toDate()
                            .toLocaleDateString()}
                    </div>
                    <div className="text-md">
                        {startDate && endDate && getHourRange(startDate, endDate)}
                    </div>
                </div>
                <div className="flex gap-5 py-1 items-center justify-center">
                    <a href={joinURL} target="_blank">
                        <ComputerDesktopIcon className={classNameIcon} />
                    </a>
                    <button
                        onClick={() => {
                            router.push(
                                `${Routes.DOCTOR_APPOINTMENTS}/${patientId}/${_id}`
                            );
                        }}
                    >
                        <PencilSquareIcon className={classNameIcon} />
                    </button>
                    <button>
                        <TrashIcon className={classNameIcon} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
