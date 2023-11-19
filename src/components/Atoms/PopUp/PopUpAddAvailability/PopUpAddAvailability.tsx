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
            <div className="bg-white p-10 rounded-3xl flex flex-col gap-5 w-1/3 max-xl:w-5/6">
                <button onClick={onClose}>
                    <XMarkIcon className="w-10 h-10 ml-auto" />
                </button>
                <div className="px-10 pb-10 h-full">
                    <h2 className="text-3xl font-semibold mb-2">
                        Agregar disponibilidad
                    </h2>
                    <AddAvailabilityGeneral
                        doctorId={doctorId}
                        specialityId={specialityId}
                    />
                </div>
            </div>
        </div>
    );
};

export default PopUpAddAvailability;
