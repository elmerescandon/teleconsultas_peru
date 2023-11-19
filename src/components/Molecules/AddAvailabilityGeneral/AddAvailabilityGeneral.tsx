import DateAvailability from "@/components/Atoms/Availability/DateAvailability/DateAvailability";
import HourAvailability from "@/components/Atoms/Availability/HourAvailability/HourAvailability";
import RepeatAvailability from "@/components/Atoms/Availability/RepeatAvailability/RepeatAvailability";
import SwitchAvailability from "@/components/Atoms/Availability/SwitchAvailability/SwitchAvailability";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import addAvailabilities from "@/firebase/Availability/addAvailabilities";
import {
    createAvailabilitiesSlots,
    formatDate,
    getWeekdaysDatesBetween,
} from "@/utils/functions/utils";
import { useState } from "react";
import LoadingHorizontal from "../Loaders/LoadingHorizontal/LoadingHorizontal";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";

type AddAvailabilityGeneralProps = {
    doctorId: string;
    specialityId: string;
};

const AddAvailabilityGeneral = ({
    doctorId,
    specialityId,
}: AddAvailabilityGeneralProps) => {
    const [check, setCheck] = useState(false);
    const [date, setDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [startTime, setStartTime] = useState<string | null>();
    const [endTime, setEndTime] = useState<string | null>();
    const [repeat, setRepeat] = useState<string>("never");
    const [error, setError] = useState<string>("");
    const [uploaded, setUploaded] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const addNewSchedule = async () => {
        try {
            setError("");
            setLoading(true);

            if (!date) {
                throw new Error("Por favor, completa todos los campos");
            }

            let slots: IAvailableAppointment[] = [];
            if (check) {
                slots = createAvailabilitiesSlots(date, "09:00", "18:00");
            } else if (!check && startTime && endTime) {
                slots = createAvailabilitiesSlots(date, startTime, endTime);
            } else {
                throw new Error("Por favor, completa todos los campos");
            }

            if (slots.length === 0) {
                throw new Error("Seleccione un rango de fechas correcto");
            }

            const dateInput = new Date(date).toISOString().split("T")[0];

            if (repeat === "never") {
                await addAvailabilities(
                    dateInput,
                    specialityId,
                    doctorId,
                    slots
                );
            } else if (
                repeat === "daily" ||
                repeat === "weekly" ||
                repeat === "monthly"
            ) {
                if (!endDate) {
                    throw new Error("Por favor, completa todos los campos");
                }

                const datesRange = getWeekdaysDatesBetween(
                    date,
                    endDate,
                    repeat
                );

                datesRange.map(async (date) => {
                    const slots = createAvailabilitiesSlots(
                        formatDate(date),
                        "09:00",
                        "18:00"
                    );
                    const dateInput = new Date(date)
                        .toISOString()
                        .split("T")[0];
                    await addAvailabilities(
                        dateInput,
                        specialityId,
                        doctorId,
                        slots
                    );
                });
            }
            setUploaded(true);
        } catch (error) {
            setError(
                (error as Error).message || "Error al agregar disponibilidad"
            );
            setUploaded(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col pt-10">
            <div className="flex flex-col gap-5 pb-5">
                <SwitchAvailability
                    title="Todo el día (9AM a 6PM)"
                    check={check}
                    setCheck={setCheck}
                />
                <DateAvailability
                    title="Fecha de Inicio"
                    date={date}
                    setDate={(date: string | null) => {
                        if (date) setDate(date);
                    }}
                />
            </div>

            <div className="relative flex flex-col gap-5">
                {!check && (
                    <HourAvailability title="Inicio" setTime={setStartTime} />
                )}
                {!check && (
                    <HourAvailability title="Termina" setTime={setEndTime} />
                )}

                <RepeatAvailability
                    title={"Se repite"}
                    setRepeatability={setRepeat}
                />
                {repeat !== "never" && repeat !== "" && (
                    <DateAvailability
                        title="Hasta"
                        date={endDate}
                        setDate={(date: string | null) => {
                            setEndDate(date!);
                        }}
                    />
                )}
            </div>
            {error && (
                <p className="text-red-500 font-semibold py-5">{error}</p>
            )}
            {uploaded && (
                <p className="font-semibold py-2 text-emerald-500 text-center">
                    Se agregó la información correctamente
                </p>
            )}
            <div className="py-5">
                <ButtonPrimary onClickFn={addNewSchedule}>
                    Agregar
                </ButtonPrimary>
                {loading && <LoadingHorizontal />}
            </div>
        </div>
    );
};

export default AddAvailabilityGeneral;
