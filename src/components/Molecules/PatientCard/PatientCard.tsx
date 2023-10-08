import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {
    getAppointmentHours,
    getSpecialityName,
} from "@/utils/functions/utils";
import useAppointmentInfo from "@/utils/hooks/useAppointmentInfo";
import specialitiesMockup from "@/utils/mockups/specialitiesMockup";
import Routes from "@/utils/routes/Routes";
import {
    PencilSquareIcon,
    TrashIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React from "react";

type PatientCardProps = {
    appointment: IAppointment;
};

const PatientCard = ({ appointment }: PatientCardProps) => {
    const router = useRouter();
    const { specialityId, patientId, startDate, endDate, _id, doctorId } =
        appointment;

    const { summary } = useAppointmentInfo(doctorId, specialityId, patientId);
    return (
        <div className="bg-neutral-100 rounded-2xl w-72 max-w-md">
            <div className="flex flex-col justify-start items-start p-4 gap-2">
                <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                        <div className="text-lg font-semibold">
                            {summary.patientName}
                        </div>
                        <div className="text-sm">{summary.specialityName}</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-sm font-semibold">
                        {appointment.date}
                    </div>
                    <div className="text-sm">
                        {getAppointmentHours(startDate, endDate)}
                    </div>
                </div>
                <div className="flex gap-5 py-1">
                    <button
                        onClick={() => {
                            router.push(
                                `${Routes.DOCTOR_APPOINTMENTS}/${patientId}`
                            );
                        }}
                    >
                        <UserIcon className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => {
                            router.push(
                                `${Routes.DOCTOR_APPOINTMENTS}/${patientId}/${_id}`
                            );
                        }}
                    >
                        <PencilSquareIcon className="w-5 h-5" />
                    </button>
                    <button>
                        <TrashIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PatientCard;
