import React, { useEffect, useState } from "react";
import ButtonPrimary from "../../Buttons/ButtonPrimary/ButtonPrimary";
import { getAllAvailableDates } from "@/firebase/Availability/getAllAvailableDates";
import IAvailabilitySlots from "@/utils/Interfaces/dataModel/IAvailabilitySlots";
import SlotAppointment from "../../SlotAppointment/SlotAppointment";
import LoadingCircle from "@/components/Molecules/Loaders/LoadingCircle/LoadingCircle";
import { dateToSpanish } from "@/utils/functions/utils";

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
                throw error;
            }
        };
        getAvailabilities();
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-28 rounded-3xl flex flex-col gap-5 h-3/4 w-1/2 overflow-auto">
                <h2 className="text-3xl font-semibold mb-2">
                    Mi disponibilidad
                </h2>
                <div className="flex flex-col justify-between h-full gap-10">
                    {loading && <LoadingCircle />}
                    {allAvailabilities && (
                        <div className="flex flex-col gap-5">
                            {allAvailabilities.map((availability, index) => (
                                <div
                                    className="flex flex-col gap-5"
                                    key={index}
                                >
                                    <p className="text-xl font-semibold">
                                        {dateToSpanish(availability.date)}
                                    </p>
                                    <div className="flex gap-5 flex-wrap">
                                        {availability.slots.map(
                                            (slot, index) => (
                                                <SlotAppointment
                                                    key={index}
                                                    availableAppointment={slot}
                                                    id={index + 1000}
                                                    currentId={index}
                                                    setId={() => {}}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="flex flex-col gap-5 pb-10">
                        <ButtonPrimary onClickFn={onClose}>
                            Cerrar
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUpMyAvailability;
