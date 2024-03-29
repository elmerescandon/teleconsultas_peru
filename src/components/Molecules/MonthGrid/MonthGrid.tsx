"use client";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import DayCell from "../DayCell/DayCell";
import { Timestamp } from "firebase/firestore";

type MonthGridProps = {
    month: number;
    year: number;
    monthAppointmentData: IAppointment[];
    onAppointmentClick: (appointment: IAppointment) => void;
};

const MonthGrid = ({ year, month, monthAppointmentData }: MonthGridProps) => {
    const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sáb"];
    const monthGrid = [];
    const daysLeft =
        new Date(year, month, 1).getDay() === 0
            ? 0
            : new Date(year, month, 1).getDay();

    for (let i = 1 - daysLeft; i <= 35 - daysLeft; i++) {
        let currentDate = new Date(year, month, i);
        let appointments: IAppointment[] = monthAppointmentData.filter(
            (appointment) => {
                const date = (
                    appointment.date as unknown as Timestamp
                ).toDate();
                return (
                    date.getDate() === currentDate.getDate() &&
                    date.getMonth() === currentDate.getMonth() &&
                    date.getFullYear() === currentDate.getFullYear()
                );
            }
        );

        const dayData = {
            date: currentDate,
            appointments: appointments,
        };

        monthGrid.push(
            <DayCell
                today={
                    dayData.date.getDate() === new Date().getDate() &&
                    dayData.date.getMonth() === new Date().getMonth() &&
                    dayData.date.getFullYear() === new Date().getFullYear()
                }
                key={i}
                dayData={dayData}
                onAppointmentClick={() => { }}
            />
        );
    }
    return (
        <div className="w-full grid grid-cols-7 py-3 pb-10">
            {days.map((day) => {
                return (
                    <div
                        key={day}
                        className="flex justify-center items-center text-xl text-gray-500 py-4 max-xl:text-base"
                    >
                        {day}
                    </div>
                );
            })}
            {monthGrid.map((day) => {
                return day;
            })}
        </div>
    );
};
export default MonthGrid;
