import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import InputSelect from "@/components/Atoms/Inputs/InputSelect/InputSelect";
import addAvailabilities from "@/firebase/Availability/addAvailabilities";
import { hoursOptions } from "@/utils/constants/registerSelect";
import { createAvailabilitiesSlots } from "@/utils/functions/utils";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React, { useState } from "react";

type AddAvailabilityByDateProps = {
    doctorId: string;
    specialityId: string;
};

const AddAvailabilityByDate = ({
    doctorId,
    specialityId,
}: AddAvailabilityByDateProps) => {
    const [date, setDate] = useState<string>("");
    const [startTime, setStartTime] = useState<string | null>();
    const [endTime, setEndTime] = useState<string | null>();
    const [error, setError] = useState<string>("");

    const addNewSchedule = async () => {
        try {
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
        <div className="flex flex-col gap-3">
            {error !== "" && (
                <p className="text-red-500 font-semibold">{error}</p>
            )}

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
            </div>
        </div>
    );
};

export default AddAvailabilityByDate;
