import TagAppointment from "@/components/Atoms/TagAppointment/TagAppointment";
import IAppointment from "@/utils/Interfaces/IAppointment";
import IDayData from "@/utils/Interfaces/IDayData";
import React from "react";

// TODO: Show only a few appointments and a button to show more

type DayCellProps = {
    dayData: IDayData;
    onAppointmentClick: (appointment: IAppointment) => void;
    today: boolean;
};

const DayCell = ({ dayData, onAppointmentClick, today }: DayCellProps) => {
    const { appointments, date } = dayData;
    const restrictiveAppointments = appointments.slice(0, 2);
    return (
        <div className="border p-2 h-28">
            <p
                className={` flex items-center justify-center ${
                    today ? "bg-brand-600 rounded-full text-basic-white" : ""
                } w-10 text-center h-10 max-xl:w-8 max-xl:h-8 max-xl:text-sm max-sm:w-6 max-sm:h-6 max-sm:text-xs`}
            >
                {date.getDate()}
            </p>
            {restrictiveAppointments.map((appointment, index) => (
                <TagAppointment
                    key={index}
                    appointment={appointment}
                    onClickFn={() => onAppointmentClick(appointment)}
                />
            ))}
        </div>
    );
};

export default DayCell;
