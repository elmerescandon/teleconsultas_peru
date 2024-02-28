import SlotAppointment from "@/components/Atoms/SlotAppointment/SlotAppointment";
import Loading from "@/components/Molecules/Loaders/Loading/Loading";
import { getAvailableDates } from "@/firebase/Availability/getAvailableDates";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import { DateValue } from "@/utils/alias/alias";
import { useAppointment, useAppointmentDispatch } from "@/utils/context/AppointmentContext/AppointmentContext";
import React, { useEffect, useState } from "react";


const ReserveAppointmentHours = () => {

    const appointment = useAppointment();
    const { doctorId, specialityId, date } = appointment;

    const [availableSlots, setAvailableSlots] = useState<IAvailableAppointment[]>([]);


    const [currentId, setCurrentId] = useState(-1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>("");



    useEffect(() => {
        const getAvailableSlots = async (date: DateValue, doctorId: string, specialityId: string) => {
            try {
                setLoading(true);
                const availableSlots = await getAvailableDates(date, doctorId, specialityId);
                if (availableSlots === null) throw new Error("No hay horarios disponibles");
                setAvailableSlots(availableSlots);
                setError("");
                setLoading(false);
            } catch (error) {
                setAvailableSlots([]);
                setError((error as Error).message);
                setLoading(false);
            }
        }

        if (doctorId && specialityId && date) {
            getAvailableSlots(date, doctorId, specialityId);
        } else {
            setAvailableSlots([]);
            setCurrentId(-1);
        }
    }, [doctorId, specialityId, date]);

    const slots = availableSlots.map((appointment, index) => (
        <SlotAppointment
            key={index}
            availableAppointment={appointment}
            id={index}
            currentId={currentId}
            setId={(id) => {
                setCurrentId(id);
            }}
        />
    ));

    return (
        <div className="px-5">
            <div className="flex items-center gap-5">
                <div className="text-xl font-semibold py-4">
                    Horarios Disponibles
                </div>
                {loading && <Loading size={5} />}
            </div>
            {error && <p className="italic">{error}</p>}
            {!loading && error === "" && (
                <div className="flex flex-wrap gap-2 justify-start max-xl:justify-start max-md:justify-center">
                    {slots.length > 0 ? (
                        slots.map((slot) => slot)
                    ) : (
                        <p className="italic">No hay horarios disponibles</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ReserveAppointmentHours;
