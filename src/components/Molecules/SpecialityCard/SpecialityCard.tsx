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
    const getSpeciality = (specialityId: string) => {
        if (specialityId === "speciality1") return "Psicología";
        if (specialityId === "speciality2") return "Medicina General";
        if (specialityId === "speciality3") return "Nutrición";
        return "";
    };

    return (
        <div className="w-full">
            <p className="font-2xl font-semibold py-2 underline">
                {getSpeciality(specialityId)}
            </p>
            <div className="w-full flex flex-col gap-2">
                {appointments.map((appointment, index) => {
                    return (
                        <HistoryCard key={index} appointment={appointment} />
                    );
                })}
            </div>
        </div>
    );
};

export default SpecialityCard;
