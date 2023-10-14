"use client";
import React, { useState } from "react";
import ButtonPrimary from "../../Buttons/ButtonPrimary/ButtonPrimary";
import { DatePicker } from "@mui/x-date-pickers";
import InputSearch from "../../Inputs/InputSearch/InputSearch";
import InputSelect from "../../Inputs/InputSelect/InputSelect";
import { hoursOptions } from "@/utils/constants/registerSelect";

type PopUpAddAvailabilityProps = {
    onClose: () => void;
    doctorId: string;
};

const PopUpAddAvailability = ({
    onClose,
    doctorId,
}: PopUpAddAvailabilityProps) => {
    const [date, setDate] = useState<string | null>();
    const [startTime, setStartTime] = useState<string | null>();

    const addNewSchedule = async () => {
        console.log("agregar disponibilidad");
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-28 rounded-3xl flex flex-col gap-5">
                <h2 className="text-3xl font-semibold mb-2">
                    Agregar disponibilidad
                </h2>
                <div className="flex flex-col gap-2"></div>

                <div>
                    <p className="placeholder-cyan-300">Selecciona la fecha:</p>
                    <DatePicker
                        sx={{
                            width: "100%",
                        }}
                        label=""
                        value={date}
                        onChange={(newValue) => {
                            if (newValue !== null) setDate(newValue.toString());
                        }}
                    />
                </div>

                <div>
                    <p className="py-3">Indica nuevo horario disponible</p>
                    <InputSelect
                        onChange={(newTime: string) => {
                            setStartTime(newTime);
                        }}
                        placeholder="Inicio"
                        selectId="final-day-availability"
                        options={hoursOptions}
                        key={1}
                        size="small"
                    />
                    {startTime && <p>{`Horario: ${date} `}</p>}
                </div>

                <div className="flex flex-col gap-5">
                    <ButtonPrimary onClickFn={addNewSchedule}>
                        Agregar
                    </ButtonPrimary>
                    <ButtonPrimary onClickFn={onClose}>Cerrar</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default PopUpAddAvailability;
