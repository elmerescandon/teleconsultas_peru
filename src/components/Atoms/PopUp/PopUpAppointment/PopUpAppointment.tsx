import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import React, { useEffect, useState } from "react";
import ButtonPrimary from "../../Buttons/ButtonPrimary/ButtonPrimary";
import LabelInformation from "../../Labels/LabelInformation/LabelInformation";
import {
    getAppointmentHours,
    statusToSpanish,
    stringToDate,
} from "@/utils/functions/utils";
import { getDoctorName } from "@/firebase/Doctor/getDoctorName";
import { getSpecialityName } from "@/firebase/Speciality/getSpecialityName";
import { Timestamp } from "firebase/firestore";

type PopUpAppointmentProps = {
    onClose: () => void;
    appointment: IAppointment;
};

const PopUpAppointment = ({ onClose, appointment }: PopUpAppointmentProps) => {
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

        getInfoFromDb(appointment.doctorId, appointment.specialityId);
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-28 rounded-3xl flex flex-col gap-5 w-1/2">
                <h2 className="text-3xl font-semibold mb-2">
                    {summary.specialityName}{" "}
                </h2>
                <div className="flex flex-col gap-2">
                    <LabelInformation
                        label="Doctor"
                        value={summary.doctorName}
                    />

                    <LabelInformation
                        label="Fecha"
                        value={stringToDate(
                            appointment.date as unknown as Timestamp
                        )}
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
};

export default PopUpAppointment;
