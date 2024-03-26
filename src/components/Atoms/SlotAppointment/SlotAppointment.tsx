import IAvailableAppointment from "@/utils/Interfaces/IAvailableAppointment";
import {useAppointmentDispatch} from "@/utils/context/AppointmentContext/AppointmentContext";
import {getHourRange} from "@/utils/functions/utilsDate";
import {Timestamp} from "firebase/firestore";
import React from "react";

type SlotAppointmentProps = {
  availableAppointment: IAvailableAppointment;
  id: number;
  currentId: number;
  setId: (id: number) => void;
};

const SlotAppointment = ({
  availableAppointment,
  id,
  currentId,
  setId,
}: SlotAppointmentProps) => {
  const {startDate, endDate, available} = availableAppointment;
  const dispatch = useAppointmentDispatch();
  return (
    <button
      disabled={!available}
      className={`
                px-3 py-2 rounded-md text-center text-xs font-semibold
                ${
                  available
                    ? "bg-brand-600 text-basic-white "
                    : "bg-neutral-50 text-neutral-400 border-0"
                }

                ${
                  currentId === id
                    ? "bg-brand-600 text-basic-white"
                    : "bg-white text-brand-900 border-2 border-brand-600"
                }

                `}
      onClick={() => {
        setId(id);
        dispatch({
          type: "SET_TIME",
          payload: {
            startDate: (startDate as Timestamp).toDate(),
            endDate: (endDate as Timestamp).toDate(),
          },
        });
      }}
    >
      {getHourRange(startDate, endDate)}
    </button>
  );
};

export default SlotAppointment;
