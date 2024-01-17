import ButtonHistory from "@/components/Atoms/Buttons/ButtonHistory/ButtonHistory";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import React from "react";

type AppointmentsBarProps = {
    appointments: IAppointment[];
    selectedAppointment: string;
    selectFn: (id: string) => void;
};

const AppointmentsBar = ({
    appointments,
    selectedAppointment,
    selectFn,
}: AppointmentsBarProps) => {
    return (
        <div
            className="flex items-end pt-5
                        max-xl:flex-col max-xl:items-start"
        >
            {appointments.length > 0 ? (
                appointments.map((appointment, index) => {
                    return (
                        <ButtonHistory
                            appointment={appointment}
                            key={index}
                            onClickFn={selectFn}
                            idSelect={selectedAppointment}
                        />
                    );
                })
            ) : (
                <div className="flex items-center justify-center py-2 text-2xl h-[50vh]">
                    No tienes ninguna cita todavía, agenda una...
                </div>
            )}
        </div>
    );
};

export default AppointmentsBar;
