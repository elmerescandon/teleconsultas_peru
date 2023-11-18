import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import addAvailabilities from "@/firebase/Availability/addAvailabilities";
import { getAvailableDates } from "@/firebase/Availability/getAvailableDates";
import { replicateAvailabilities } from "@/utils/functions/utils";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React, { useState } from "react";
import LoadingHorizontal from "../Loaders/LoadingHorizontal/LoadingHorizontal";

type AddAvailabilityByPrevDayProps = {
    doctorId: string;
    specialityId: string;
};

const AddAvailabilityByPrevDay = ({
    doctorId,
    specialityId,
}: AddAvailabilityByPrevDayProps) => {
    const [prevDate, setPrevDate] = useState<string>("");
    const [newDate, setNewDate] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [uploaded, setUploaded] = useState<boolean>(false);

    const addNewSchedule = async () => {
        try {
            setUploaded(false);
            setError("");
            setLoading(true);
            if (!newDate || !prevDate) {
                throw new Error("Por favor, completa todos los campos");
            }
            const dateInput = new Date(prevDate).toISOString().split("T")[0];
            const slots = await getAvailableDates(
                dateInput,
                doctorId,
                specialityId
            );

            if (slots === null || slots.length === 0) {
                throw new Error("No hay disponibilidad para replicar");
            }

            const newSlots = replicateAvailabilities(newDate, slots);

            await addAvailabilities(
                newSlots.date,
                specialityId,
                doctorId,
                newSlots.slots
            );
            setError("");
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(
                (error as Error).message || "Error al agregar disponibilidad"
            );
        } finally {
            setLoading(false);
            setUploaded(true);
        }
    };

    return (
        <div>
            <div>
                <p className="pb-5">Selecciona la fecha:</p>
                {error && <p className="text-red-500 font-semibold">{error}</p>}
                {uploaded && (
                    <p className="font-semibold py-2 text-emerald-500 text-center">
                        Se agregó la información correctamente
                    </p>
                )}
                <div className="flex flex-col gap-5 py-5">
                    <DatePicker
                        maxDate={
                            dayjs(
                                new Date().setDate(new Date().getDate())
                            ) as any
                        }
                        sx={{
                            width: "100%",
                        }}
                        label="Fecha a Replicar"
                        value={prevDate}
                        onChange={(newValue) => {
                            if (newValue !== null)
                                setPrevDate(newValue.toString());
                        }}
                    />
                    <DatePicker
                        minDate={
                            dayjs(
                                new Date().setDate(new Date().getDate() + 1)
                            ) as any
                        }
                        sx={{
                            width: "100%",
                        }}
                        label="Fecha Deseada"
                        value={newDate}
                        onChange={(newValue) => {
                            if (newValue !== null)
                                setNewDate(newValue.toString());
                        }}
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <ButtonPrimary onClickFn={addNewSchedule}>
                        Agregar
                    </ButtonPrimary>
                </div>
                {loading && <LoadingHorizontal />}
            </div>
        </div>
    );
};

export default AddAvailabilityByPrevDay;
