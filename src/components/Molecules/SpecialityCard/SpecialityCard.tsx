import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import React, { useEffect } from "react";
import HistoryCard from "../HistoryCard/HistoryCard";
import Pagination from "@/components/Organisms/Pagination/Pagination";

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

    const appointmentsComponents = appointments.map((appointment, index) => {
        return <HistoryCard key={index} appointment={appointment} />;
    });

    return (
        <div className="w-full">
            <p className="font-2xl font-semibold py-2 underline">
                {getSpeciality(specialityId)}
            </p>
            <div className="w-full flex flex-col gap-2">
                <Pagination
                    items={appointmentsComponents}
                    itemsPerPage={3}
                    orientation="col"
                    paginationVerbose={false}
                    paginationPosition="right"
                />
                {/* {appointments.map((appointment, index) => {
                    return (
                        <HistoryCard key={index} appointment={appointment} />
                    );
                })} */}
            </div>
        </div>
    );
};

export default SpecialityCard;
