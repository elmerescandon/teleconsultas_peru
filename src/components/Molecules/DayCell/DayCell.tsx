import PopUpCalendar from "@/components/Atoms/PopUp/PopUpCalendar/PopUpCalendar";
import TagAppointment from "@/components/Atoms/TagAppointment/TagAppointment";
import IDayData from "@/utils/Interfaces/IDayData";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
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
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div>
            <div
                className="border p-2 h-36
                        max-xl:h-20 max-xl:p-1 max-xl:border-0 max-xl:flex max-xl:flex-col max-xl:justify-start max-xl:items-start"
            >
                <p
                    className={` flex items-center justify-center ${
                        today
                            ? "bg-brand-600 rounded-full text-basic-white"
                            : ""
                    } w-10 text-center h-10 max-xl:w-8 max-xl:h-8 max-xl:text-sm max-sm:w-6 max-sm:h-6 max-sm:text-xs`}
                >
                    {date.getDate()}
                </p>
                <div className="flex gap-2 flex-wrap max-xl:hidden">
                    {restrictiveAppointments.map((appointment, index) => (
                        <TagAppointment
                            key={index}
                            appointment={appointment}
                            onClickFn={() => onAppointmentClick(appointment)}
                        />
                    ))}
                </div>
                {appointments.length > 0 && (
                    <button
                        onClick={() => {
                            setShowModal(true);
                        }}
                        className="hidden max-xl:block h-4 w-4 bg-brand-600 rounded-full"
                    ></button>
                )}
            </div>
            {showModal && (
                <PopUpCalendar
                    onClose={() => setShowModal(false)}
                    appointments={appointments}
                    onAppointmentClick={onAppointmentClick}
                />
            )}
        </div>
    );
};

export default DayCell;
