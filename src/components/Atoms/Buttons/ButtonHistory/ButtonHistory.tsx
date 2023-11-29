import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { stringToDate } from "@/utils/functions/utils";
import { Timestamp } from "firebase/firestore";
import React from "react";

type ButtonHistoryProps = {
    appointment: IAppointment;
    onClickFn: (id: string) => void;
    idSelect: string;
};

const ButtonHistory = ({
    appointment,
    onClickFn,
    idSelect,
}: ButtonHistoryProps) => {
    return (
        <button
            className={`px-2 py-1 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out ${
                idSelect === appointment._id
                    ? " bg-brand-600 text-basic-white pb-3"
                    : "bg-gray-200"
            }`}
            onClick={() => {
                onClickFn(appointment._id);
            }}
        >{`Cita ${(appointment.date as unknown as Timestamp)
            .toDate()
            .toDateString()}`}</button>
    );
};

export default ButtonHistory;
