import SlotAppointmentVisible from "@/components/Atoms/SlotAppointmentVisible/SlotAppointmentVisible";
import IAvailabilitySlots from "@/utils/Interfaces/dataModel/IAvailabilitySlots";
import {dateToSpanish} from "@/utils/functions/utilsDate";
import {CheckCircleIcon, PencilSquareIcon} from "@heroicons/react/24/solid";
import React, {useState} from "react";

type DaySlotAppointmentsProps = {
  availability: IAvailabilitySlots;
  doctorId: string;
  specialityId: string;
  setErased: (erased: boolean) => void;
};

const DaySlotAppointments = ({
  availability,
  doctorId,
  specialityId,
  setErased,
}: DaySlotAppointmentsProps) => {
  const [eliminate, setEliminate] = useState<boolean>(true);

  const toggleEliminate = () => {
    setEliminate(!eliminate);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-1 items-center">
        <p className="text-xl font-semibold max-lg:text-lg">
          {dateToSpanish(availability.date)}
        </p>
        <button
          className={`text-lg font-normal max-lg:text-base`}
          onClick={toggleEliminate}
        >
          {!eliminate ? (
            <PencilSquareIcon className="w-5 h-5 text-basic-black" />
          ) : (
            <CheckCircleIcon className="w-5 h-5 bg-basic-black rounded-full text-basic-white" />
          )}
        </button>
      </div>

      <div className="flex gap-5 flex-wrap">
        {availability.slots.map((slot, index) => (
          <SlotAppointmentVisible
            key={index}
            availableAppointment={slot}
            date={availability.date}
            doctorId={doctorId}
            specialityId={specialityId}
            setErased={setErased}
            setError={(error) => console.log(error)}
            setLoading={(loading) => console.log(loading)}
          />
        ))}
      </div>
    </div>
  );
};

export default DaySlotAppointments;
