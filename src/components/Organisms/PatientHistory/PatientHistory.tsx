import SpecialityCard from "@/components/Molecules/SpecialityCard/SpecialityCard";
import getUserAppointments from "@/firebase/Appointments/getUserAppointments";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import React, { useEffect, useState } from "react";

const PatientHistory = () => {
    const state: IUserState = useAppSelector((state) => state.user);
    const [patientAppointments, setPatientAppointments] = useState<
        IAppointment[]
    >([]);
    const { userInfo } = state;

    useEffect(() => {
        const getAppointments = async () => {
            if (userInfo._id === "" || !state.logged) return;
            const appointments = await getUserAppointments(
                userInfo._id,
                "completed"
            );
            setPatientAppointments(appointments);
        };
        getAppointments();
    }, [state]);

    const groupAppointmentsBySpecialty = (
        appointments: IAppointment[]
    ): {
        [specialty: string]: IAppointment[];
    } => {
        const groupedAppointments: { [specialty: string]: IAppointment[] } = {};

        for (const appointment of appointments) {
            const { specialityId, ...rest } = appointment;
            if (!groupedAppointments[specialityId]) {
                groupedAppointments[specialityId] = [];
            }
            groupedAppointments[specialityId].push({ specialityId, ...rest });
        }

        return groupedAppointments;
    };

    const appointmentsBySpecialty =
        groupAppointmentsBySpecialty(patientAppointments);

    // Convert the object to an array of grouped appointments
    const groupedAppointments: IAppointment[][] = Object.values(
        appointmentsBySpecialty
    );

    return (
        <div className="w-1/3 rounded-3xl border-neutral-300 border-2 py-5 px-10 h-96 max-xl:h-full max-xl:w-full">
            <div className="text-xl font-semibold">Historial Médico</div>
            <div className="flex flex-col items-center py-5">
                {patientAppointments.length > 0 &&
                    groupedAppointments.map((appointments) => {
                        return appointments.length > 0 ? (
                            <SpecialityCard
                                appointments={appointments}
                                specialityId={appointments[0].specialityId}
                            />
                        ) : null;
                    })}
                {patientAppointments.length === 0 && (
                    <p className="text-neutral-500">
                        No hay un historial médico
                    </p>
                )}
            </div>
        </div>
    );
};

export default PatientHistory;
