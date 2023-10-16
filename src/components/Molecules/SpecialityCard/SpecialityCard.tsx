import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import React, { useEffect } from "react";
import HistoryCard from "../HistoryCard/HistoryCard";

type SpecialityCardProps = {
    specialityId: string;
    appointments: IAppointment[];
};

const SpecialityCard = ({
    specialityId,
    appointments,
}: SpecialityCardProps) => {
    useEffect(() => {}, []);

    return (
        <div>
            <p>{specialityId}</p>
            <div>
                {appointments.map((appointment) => {
                    return <HistoryCard appointment={appointment} />;
                })}
            </div>
        </div>
    );
};

export default SpecialityCard;
