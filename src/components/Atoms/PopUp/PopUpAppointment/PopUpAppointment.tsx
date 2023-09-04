import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import React from "react";
import ButtonPrimary from "../../Buttons/ButtonPrimary/ButtonPrimary";
import LabelInformation from "../../Labels/LabelInformation/LabelInformation";
import {
    getAppointmentHours,
    getDoctorName,
    getSpecialityName,
    statusToSpanish,
    stringToDate,
} from "@/utils/functions/utils";
import doctorsMockup from "@/utils/mockups/doctorsMockup";
import specialitiesMockup from "@/utils/mockups/specialitiesMockup";

type PopUpAppointmentProps = {
    onClose: () => void;
    appointment: IAppointment;
};

const PopUpAppointment = ({ onClose, appointment }: PopUpAppointmentProps) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-28 rounded-3xl flex flex-col gap-5">
            <h2 className="text-3xl font-semibold mb-2">
                {getSpecialityName(
                    specialitiesMockup,
                    appointment.specialityId
                )}
            </h2>
            <div className="flex flex-col gap-2">
                <LabelInformation
                    label="Doctor"
                    value={`${getDoctorName(
                        doctorsMockup,
                        appointment.doctorId
                    )}`}
                />

                <LabelInformation
                    label="Fecha"
                    value={stringToDate(appointment.date)}
                />
                <LabelInformation
                    label="Estado"
                    value={`${statusToSpanish(appointment.status)}`}
                />
                <LabelInformation
                    label="Horario"
                    value={getAppointmentHours(
                        appointment.startDate,
                        appointment.endDate
                    )}
                />
                <LabelInformation
                    label="Razón"
                    value={`${appointment.reason}`}
                />
            </div>

            <div>
                <ButtonPrimary onClickFn={onClose}>Cerrar</ButtonPrimary>
            </div>
        </div>
    </div>
);

export default PopUpAppointment;
