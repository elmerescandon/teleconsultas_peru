"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import AddAvailabilityGeneral from "@/components/Molecules/AddAvailabilityGeneral/AddAvailabilityGeneral";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

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
                        Agregar/Modificar disponibilidad
                    </h2>
                    <button onClick={onClose}>
                        <XMarkIcon className="w-10 h-10 ml-auto" />
                    </button>
                </div>

                <div className="flex items-center justify-center flex-wrap gap-5 bg-brand-50 p-3 rounded-2xl">
                    <ExclamationCircleIcon className="w-10 h-10 text-brand-900" />
                    <p className="font-semibold text-base italic">Si deseas modificar algún horario existente, crea un nuevo horario indicando la misma fecha.</p>
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
