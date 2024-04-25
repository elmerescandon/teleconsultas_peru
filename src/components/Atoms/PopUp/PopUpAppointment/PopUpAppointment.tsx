import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import React, {useEffect, useState} from "react";
import LabelInformation from "../../Labels/LabelInformation/LabelInformation";
import {
    getAppointmentHours,
    isDateOlderThan24Hours,
    statusToSpanish,
    stringToDate,
} from "@/utils/functions/utils";
import {getDoctorName} from "@/firebase/Doctor/getDoctorName";
import {getSpecialityName} from "@/firebase/Speciality/getSpecialityName";
import {Timestamp} from "firebase/firestore";
import {XMarkIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import Routes from "@/utils/routes/Routes";
import updateAppointmentField from "@/firebase/Appointments/updateAppointmentField";
import LoadingHorizontal from "@/components/Molecules/Loaders/LoadingHorizontal/LoadingHorizontal";
import {getHourRange} from "@/utils/functions/utilsDate";

type PopUpAppointmentProps = {
    onClose: () => void;
    appointment: IAppointment;
};

const PopUpAppointment = ({onClose, appointment}: PopUpAppointmentProps) => {
    const [summary, setSummary] = useState<{
        doctorName: string;
        specialityName: string;
    }>({doctorName: "", specialityName: ""});
    const [validation, setValidation] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const {date, startDate, endDate, doctorId, specialityId} = appointment;

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
                setSummary({doctorName: "", specialityName: ""});
            }
        };

        getInfoFromDb(doctorId, specialityId);
    }, [doctorId, specialityId]);

    const getRefund = async () => {
        try {
            setLoading(true);
            await updateAppointmentField(
                appointment._id,
                "status",
                "patient-canceled"
            );
            setValidation(
                "Se ha enviado la solicitud de reembolso, revise su correo electrónico."
            );
            setLoading(false);
        } catch (error) {
            setValidation("Ha ocurrido un error, inténtelo nuevamente.");
            setLoading(false);
        }
    };

    const cancelAppointment = async () => {
        try {
            await updateAppointmentField(
                appointment._id,
                "status",
                "patient-canceled"
            );
            setValidation("Se ha cancelado la cita.");
        } catch (error) {
            setValidation("Ha ocurrido un error, inténtelo nuevamente.");
        }
    };

    const colorStatus = ` font-bold ${
        appointment.status === "pending"
            ? "text-rose-600"
            : appointment.status === "scheduled"
            ? "text-green-600 "
            : appointment.status === "doctor-canceled"
            ? "text-rose-600"
            : "text-basic-black"
    }`;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                className="bg-white p-28 rounded-3xl flex flex-col gap-5 w-1/2
                              max-xl:w-5/6 max-xl:mt-10 max-xl:p-10 max-xl:gap-2"
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-semibold">
                        {summary.specialityName}{" "}
                    </h2>
                    <button onClick={onClose}>
                        <XMarkIcon className="w-10 h-10 ml-auto" />
                    </button>
                </div>

                <div className="flex flex-col">
                    <LabelInformation
                        label="Doctor"
                        value={summary.doctorName}
                    />

                    <LabelInformation
                        label="Fecha"
                        value={stringToDate(date as unknown as Timestamp)}
                    />
                    <LabelInformation
                        label="Estado"
                        value={`${statusToSpanish(appointment.status)}`}
                        style={colorStatus}
                    />
                    <LabelInformation
                        label="Horario"
                        value={
                            (startDate &&
                                endDate &&
                                getHourRange(startDate, endDate)) ||
                            ""
                        }
                    />
                    <LabelInformation
                        label="Razón"
                        value={`${appointment.reason}`}
                    />
                </div>
                {appointment.status === "pending" && (
                    <Link
                        href={`${Routes.RESERVE_PAYMENT}?appId=${appointment._id}`}
                        className="px-4 py-5 bg-brand-600 rounded-2xl text-basic-white text-center font-semibold
                    hover:bg-brand-700 transition duration-300 ease-in-out
                    active:bg-brand-800 active:scale-95"
                    >
                        Pagar cita
                    </Link>
                )}
                {appointment.status === "scheduled" && (
                    <a
                        className="px-4 py-5 bg-brand-600 rounded-2xl text-basic-white text-center font-semibold
                                hover:bg-brand-700 transition duration-300 ease-in-out
                                active:bg-brand-800 active:scale-95"
                        target="_blank"
                        href={appointment.joinURL}
                    >
                        Conectarse a la sesión
                    </a>
                )}
                {(appointment.status === "doctor-canceled/pending" ||
                    appointment.status === "doctor-canceled/scheduled") && (
                    <div className="flex max-xl:flex-col gap-3 w-full justify-between">
                        <Link
                            href={`${Routes.RESERVE}?appId=${appointment._id}`}
                            className="px-4 py-5 bg-brand-600 rounded-2xl text-basic-white text-center font-semibold
                                hover:bg-brand-700 transition duration-300 ease-in-out
                                active:bg-brand-800 active:scale-95 w-full"
                        >
                            Reagendar la cita
                        </Link>
                        <div className="w-full">
                            <button
                                className="px-4 py-5 bg-brand-600 rounded-2xl text-basic-white text-center font-semibold
                                hover:bg-brand-700 transition duration-300 ease-in-out w-full
                                active:bg-brand-800 active:scale-95"
                                onClick={getRefund}
                            >
                                Pedir reembolso
                            </button>
                            {loading && <LoadingHorizontal />}
                        </div>
                    </div>
                )}
                {(appointment.status === "pending" ||
                    appointment.status === "scheduled") &&
                    isDateOlderThan24Hours(
                        appointment.date as unknown as Timestamp
                    ) && (
                        <button
                            className="text-left italic text-brand-600 text-lg font-semibold
                        active:text-brand-800 active:translate-y-1
                    "
                            onClick={cancelAppointment}
                        >
                            Cancelar cita
                        </button>
                    )}
                {validation !== "" && (
                    <p className="w-full py-3 text-center text-amber-600">
                        {validation}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PopUpAppointment;
