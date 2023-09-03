import { useAppointment } from "@/utils/context/AppointmentContext/AppointmentContext";
import React from "react";

const ReserveSummary = () => {
    const appointment = useAppointment();
    const {
        date,
        doctorId,
        specialityId,
        details,
        reason,
        endDate,
        startDate,
    } = appointment;

    const dateTime =
        startDate === ""
            ? "-"
            : `${new Date(startDate)
                  .toLocaleTimeString()
                  .replace(/:\d+ /, " ")} - ${new Date(endDate)
                  .toLocaleTimeString()
                  .replace(/:\d+ /, " ")} `;
    return (
        <div className="w-1/3 max-xl:w-full">
            <div className="text-2xl font-semibold py-4">Resumen</div>
            <div>
                <div className="flex justify-between py-2 gap-5">
                    <div className="text-lg">Especialidad:</div>
                    <div className="text-lg">{specialityId}</div>
                </div>
                <div className="flex justify-between py-2 gap-5">
                    <div className="text-lg">Doctor:</div>
                    <div className="text-lg">{doctorId}</div>
                </div>
                <div className="flex justify-between py-2 gap-5">
                    <div className="text-lg">Motivo:</div>
                    <div className="text-lg">{reason}</div>
                </div>

                <div className="flex justify-between py-2 gap-5 w-80">
                    <div className="text-lg">Fecha Programada:</div>
                    <div className="text-lg">{date}</div>
                </div>
                <div className="flex justify-between py-2 gap-5">
                    <div className="text-lg">Hora:</div>
                    <div className="text-lg break-all w-44 text-right">
                        {dateTime}
                    </div>
                </div>
                <div className="flex justify-between py-2 gap-5">
                    <div className="text-lg">Detalles:</div>
                    <div className="text-lg break-all w-40 text-right">
                        {details}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReserveSummary;
