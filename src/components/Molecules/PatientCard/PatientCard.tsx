import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {
    getAppointmentHours,
    getPatientName,
    getSpecialityName,
} from "@/utils/functions/utils";
import patientsMockup from "@/utils/mockups/patientsMockup";
import specialitiesMockup from "@/utils/mockups/specialitiesMockup";
import React from "react";

type PatientCardProps = {
    appointment: IAppointment;
};

const PatientCard = ({ appointment }: PatientCardProps) => {
    const { specialityId, patientId, startDate, endDate, status } = appointment;
    return (
        <div className="bg-neutral-100 rounded-2xl w-full">
            <div className="flex flex-col justify-start items-start p-4 gap-2">
                <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                        <div className="text-lg font-semibold">
                            {getPatientName(patientsMockup, patientId)}
                        </div>
                        <div className="text-sm">
                            {getSpecialityName(
                                specialitiesMockup,
                                specialityId
                            )}
                        </div>
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
            </div>
        </div>
    );
};

export default PatientCard;
