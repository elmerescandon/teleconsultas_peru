import SlotAppointmentVisible from "@/components/Atoms/SlotAppointmentVisible/SlotAppointmentVisible";
import PopUpAlert from "@/components/Molecules/PopUpAlert/PopUpAlert";
import PopUpDayHeadline from "@/components/Molecules/PopUpDayHeadline/PopUpDayHeadline";
import {getAvailableDates} from "@/firebase/Availability/getAvailableDates";
import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import React, {useEffect, useState} from "react";

type DaySlotAppointmentsV2Props = {
  date: Date;
  doctorId: string;
  specialityId: string;
};

const DaySlotAppointmentsV2 = ({
  date,
  doctorId,
  specialityId,
}: DaySlotAppointmentsV2Props) => {
  const [slots, setSlots] = useState<IAvailableAppointment[]>([]);
  const [erased, setErased] = useState<boolean>(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getAvailableSlots = async () => {
      try {
        setLoading(true);
        const availableSlots = await getAvailableDates(
          date,
          doctorId,
          specialityId
        );
        if (availableSlots === null) throw new Error("No hay disponibilidad");
        setSlots(availableSlots);
        setLoading(false);
      } catch (error) {
        setError("No se pudo obtener la disponibilidad");
        setLoading(false);
      }
    };

    getAvailableSlots();
    if (erased) {
      setErased(false);
    }
  }, [date, doctorId, specialityId, erased]);

  return (
    <div className="flex flex-col gap-5">
      <PopUpDayHeadline date={date} loading={loading} />
      <div className="flex gap-5 flex-wrap">
        {error !== "" && <PopUpAlert text={error} />}
        {slots.length === 0 && !loading && (
          <PopUpAlert text="No hay disponibilidad" />
        )}
        {!loading &&
          error === "" &&
          slots.length > 0 &&
          slots.map((slot, index) => (
            <SlotAppointmentVisible
              key={index}
              availableAppointment={slot}
              date={date}
              doctorId={doctorId}
              specialityId={specialityId}
              setErased={setErased}
              setError={setError}
              setLoading={setLoading}
            />
          ))}
      </div>
    </div>
  );
};

export default DaySlotAppointmentsV2;
