import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import TagAppointment from "../../TagAppointment/TagAppointment";

type PopUpCalendarProps = {
    onClose: () => void;
    appointments: IAppointment[];
    onAppointmentClick: (appointment: IAppointment) => void;
};

const PopUpCalendar = ({
    onClose,
    appointments,
    onAppointmentClick,
}: PopUpCalendarProps) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-10 rounded-3xl flex flex-col gap-5 w-1/3 max-xl:w-5/6">
                <button onClick={onClose}>
                    <XMarkIcon className="w-10 h-10 ml-auto" />
                </button>
                <h1 className="text-2xl font-bold">Citas</h1>
                <div className="flex flex-col gap-2">
                    {appointments.map((appointment, index) => (
                        <TagAppointment
                            key={index}
                            appointment={appointment}
                            onClickFn={() => onAppointmentClick(appointment)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopUpCalendar;
