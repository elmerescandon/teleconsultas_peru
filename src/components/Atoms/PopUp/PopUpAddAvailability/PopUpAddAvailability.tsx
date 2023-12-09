"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import AddAvailabilityGeneral from "@/components/Molecules/AddAvailabilityGeneral/AddAvailabilityGeneral";

type PopUpAddAvailabilityProps = {
    onClose: () => void;
    doctorId: string;
    specialityId: string;
};

const PopUpAddAvailability = ({
    onClose,
    doctorId,
    specialityId,
}: PopUpAddAvailabilityProps) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div
                className="bg-white p-10 rounded-3xl flex flex-col gap-5 h-3/4 w-1/2 overflow-auto
                max-2xl:px-10
                max-lg:w-10/12"
            >
                <div className="flex items-center justify-between">
                    <h2
                        className="text-3xl font-semibold
                                    max-lg:text-2xl"
                    >
                        Añadir disponibilidad
                    </h2>
                    <button onClick={onClose}>
                        <XMarkIcon className="w-10 h-10 ml-auto" />
                    </button>
                </div>

                <AddAvailabilityGeneral
                    doctorId={doctorId}
                    specialityId={specialityId}
                />
            </div>
        </div>
    );
};

export default PopUpAddAvailability;
