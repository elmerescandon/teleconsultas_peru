import LoadingHorizontal from "@/components/Molecules/Loaders/LoadingHorizontal/LoadingHorizontal";
import eliminateAvailability from "@/firebase/Availability/eliminateAvailability";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import { XCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

type SlotAppointmentVisibleProps = {
    availableAppointment: IAvailableAppointment;
    doctorId: string,
    specialityId: string,
    date: string;
};

const SlotAppointmentVisible = ({
    availableAppointment,
    doctorId,
    specialityId,
    date,
}: SlotAppointmentVisibleProps) => {

    const [visible, setVisible] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const { startDate, endDate, available } = availableAppointment;



    const handleDelete = () => {
        try {
            setLoading(true);
            eliminateAvailability(date, specialityId, doctorId, startDate, endDate);
            setVisible(false);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className={`relative ${visible ? "" : 'hidden'} `}>
            <button className="absolute left-[90%] -top-2" onClick={handleDelete}>
                <XCircleIcon className="w-6 h-6 rounded-full bg-brand-900 text-basic-white
                                        hover:bg-brand-800 hover:text-brand-100
                                        active:bg-brand-50 active:text-brand-800
                " />
            </button>
            <button
                disabled={!available}
                className={`
                px-3 py-2 rounded-md text-center text-xs font-semibold
                ${available
                        ? "bg-brand-600 text-basic-white "
                        : "bg-neutral-50 text-neutral-400 border-0"
                    }
                `}
                onClick={() => { }}
            >
                {`${new Date(startDate)
                    .toLocaleTimeString()
                    .replace(/:\d+ /, " ")} - ${new Date(endDate)
                        .toLocaleTimeString()
                        .replace(/:\d+ /, " ")} `}
            </button>
            {loading && <LoadingHorizontal />}
        </div>

    );
};

export default SlotAppointmentVisible;
