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
        <div className="flex items-end pt-5">
            {appointments.length > 0 ? (
                appointments.map((appointment, index) => {
                    console.log(appointment._id);
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
                <div className="flex justify-center py-2 text-2xl">
                    No hay citas para este paciente
                </div>
            )}
        </div>
    );
};

export default AppointmentsBar;
