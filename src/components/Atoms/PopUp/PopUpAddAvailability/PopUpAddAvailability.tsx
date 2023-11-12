"use client";
import AddAvailabilityByDate from "@/components/Molecules/AddAvailabilityByDate/AddAvailabilityByDate";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import InputSelect from "../../Inputs/InputSelect/InputSelect";
import AddAvailabilityByPrevDay from "@/components/Molecules/AddAvailabilityByPrevDay/AddAvailabilityByPrevDay";

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
    const [state, setState] = useState<string>("1");
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-10 rounded-3xl flex flex-col gap-5 h-2/3">
                <button onClick={onClose}>
                    <XMarkIcon className="w-10 h-10 ml-auto" />
                </button>

                <div className="px-10 pb-10 h-full">
                    <h2 className="text-3xl font-semibold mb-2">
                        Agregar disponibilidad
                    </h2>

                    <div className="px-5 py-5 bg-brand-600 rounded-2xl my-5">
                        <InputSelect
                            selectId="select-availability-type"
                            placeholder="Tipo de disponibilidad"
                            onChange={(value) => {
                                setState(value);
                            }}
                            fistValue="1"
                            options={[
                                {
                                    label: "Agregar disponibilidad",
                                    value: "1",
                                },
                                {
                                    label: "Replicar disponibilidad",
                                    value: "2",
                                },
                            ]}
                        />
                    </div>

                    {state !== "2" && state !== "1" && (
                        <p className="h-full text-xl w-72 text-center text-gray-500">
                            Selecciona cómo desea agregar su disponibilidad
                        </p>
                    )}
                    {state === "2" && (
                        <AddAvailabilityByPrevDay
                            doctorId={doctorId}
                            specialityId={specialityId}
                        />
                    )}
                    {state === "1" && (
                        <AddAvailabilityByDate
                            doctorId={doctorId}
                            specialityId={specialityId}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default PopUpAddAvailability;
