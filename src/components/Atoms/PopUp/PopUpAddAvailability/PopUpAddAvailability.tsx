"use client";
import React, { useState } from "react";
import ButtonPrimary from "../../Buttons/ButtonPrimary/ButtonPrimary";
import { DatePicker } from "@mui/x-date-pickers";
import InputSelect from "../../Inputs/InputSelect/InputSelect";
import { hoursOptions } from "@/utils/constants/registerSelect";
import dayjs, { Dayjs } from "dayjs";
import { createAvailabilitiesSlots } from "@/utils/functions/utils";
import addAvailabilities from "@/firebase/Availability/addAvailabilities";
import { tr } from "date-fns/locale";
import { set } from "lodash";

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
    const [date, setDate] = useState<string>("");
    const [startTime, setStartTime] = useState<string | null>();
    const [endTime, setEndTime] = useState<string | null>();
    const [error, setError] = useState<string>("");

    const addNewSchedule = async () => {
        try {
            console.log(date, specialityId);
            if (!date || !startTime || !endTime) {
                setError("Por favor, completa todos los campos");
                return;
            }
            const slots = createAvailabilitiesSlots(date, startTime, endTime);
            const dateInput = new Date().toISOString().split("T")[0];
            await addAvailabilities(dateInput, specialityId, doctorId, slots);
            setError("");
        } catch (error) {
            setError(
                (error as Error).message || "Error al agregar disponibilidad"
            );
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-28 rounded-3xl flex flex-col gap-5">
                <h2 className="text-3xl font-semibold mb-2">
                    Agregar disponibilidad
                </h2>
                {error !== "" && (
                    <p className="text-red-500 font-semibold">{error}</p>
                )}

                <div className="flex flex-col gap-2"></div>

                <div>
                    <p className="placeholder-cyan-300 pb-5">
                        Selecciona la fecha:
                    </p>
                    <DatePicker
                        minDate={
                            dayjs(
                                new Date().setDate(new Date().getDate() + 1)
                            ) as any
                        }
                        sx={{
                            width: "100%",
                        }}
                        label="Fecha disponibilidad"
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
                        selectId="begin-day-availability"
                        options={hoursOptions}
                        key={1}
                    />
                    <p className="py-3"></p>
                    <InputSelect
                        onChange={(newTime: string) => {
                            setEndTime(newTime);
                        }}
                        placeholder="Final"
                        selectId="final-day-availability"
                        options={hoursOptions}
                        key={2}
                    />
                    {date && (
                        <p className="pt-2 text-lg">{`Fecha: ${
                            new Date(date).toLocaleString().split(",")[0]
                        } `}</p>
                    )}
                    {startTime && endTime && (
                        <p className="pt-3 text-lg">{`Horario: ${startTime} - ${endTime}`}</p>
                    )}
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
