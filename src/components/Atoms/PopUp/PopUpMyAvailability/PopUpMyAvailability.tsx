import React, { useEffect, useState } from "react";
import { getAllAvailableDates } from "@/firebase/Availability/getAllAvailableDates";
import IAvailabilitySlots from "@/utils/Interfaces/dataModel/IAvailabilitySlots";
import LoadingCircle from "@/components/Molecules/Loaders/LoadingCircle/LoadingCircle";
import { XMarkIcon } from "@heroicons/react/24/solid";
import DaySlotAppointments from "@/components/Organisms/DaySlotAppointments/DaySlotAppointments";

type PopUpMyAvailabilityProps = {
    onClose: () => void;
    doctorId: string;
    specialityId: string;
};

const PopUpMyAvailability = ({
    onClose,
    doctorId,
    specialityId,
}: PopUpMyAvailabilityProps) => {
    const [allAvailabilities, setAllAvailabilities] = useState<
        IAvailabilitySlots[]
    >([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const getAvailabilities = async () => {
            try {
                setLoading(true);
                const allAvailabilities = await getAllAvailableDates(
                    doctorId,
                    specialityId
                );

                setAllAvailabilities(allAvailabilities);
                setLoading(false);
            } catch (error) {
                setError((error as Error).message);
                setLoading(false);
            }
        };
        getAvailabilities();
    }, []);

    // eliminate dates that are in the past
    const newAvailabilities = allAvailabilities.filter(
        (availability) =>
            new Date(availability.date).getTime() >= new Date().getTime()
    );

    // sort by date
    const newSortedDates = newAvailabilities.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div
                className="bg-white p-10 rounded-3xl flex flex-col gap-5 h-3/4 w-1/2 overflow-auto
                                max-2xl:px-10
                                max-lg:w-10/12"
            >
                <div className="flex justify-between items-center">
                    <h2
                        className="text-3xl font-semibold
                                max-lg:text-2xl"
                    >
                        Mi disponibilidad
                    </h2>
                    <button onClick={onClose}>
                        <XMarkIcon className="w-10 h-10 ml-auto" />
                    </button>
                </div>

                <div className="flex flex-col justify-between h-full gap-10">
                    {error && (
                        <p className="text-red-500 font-semibold py-5">
                            {error}
                        </p>
                    )}
                    {!loading && newSortedDates.length === 0 && (
                        <p className="text-red-500 font-semibold py-5">
                            No hay disponibilidad programada
                        </p>
                    )}
                    {loading && <LoadingCircle />}
                    {newSortedDates && (
                        <div className="flex flex-col gap-5 pb-10">
                            {newSortedDates.map((availability, index) => (
                                <DaySlotAppointments key={index} availability={availability} doctorId={doctorId} specialityId={specialityId} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PopUpMyAvailability;
