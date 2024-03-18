import React, {useEffect, useState} from "react";
import {getAllAvailableDates} from "@/firebase/Availability/getAllAvailableDates";
import IAvailabilitySlots from "@/utils/Interfaces/dataModel/IAvailabilitySlots";
import LoadingCircle from "@/components/Molecules/Loaders/LoadingCircle/LoadingCircle";
import {XMarkIcon} from "@heroicons/react/24/solid";
import DaySlotAppointments from "@/components/Organisms/DaySlotAppointments/DaySlotAppointments";
import {Timestamp} from "firebase/firestore";
import {ExclamationCircleIcon} from "@heroicons/react/24/outline";

type PopUpMyAvailabilityProps = {
  onClose: () => void;
  doctorId: string;
  specialityId: string;
};

const PopUpMyAvailability = ({
  onClose,
  doctorId,
  specialityId,
}: PopUpMyAvailabilityProps) => {
  const [allAvailabilities, setAllAvailabilities] = useState<
    IAvailabilitySlots[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [erased, setErased] = useState<boolean>(true);

  useEffect(() => {
    const getAvailabilities = async () => {
      try {
        setLoading(true);
        const allAvailabilities = await getAllAvailableDates(
          doctorId,
          specialityId
        );

        setAllAvailabilities(allAvailabilities);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };

    if (erased) {
      getAvailabilities();
      setErased(false);
    }
  }, [erased, doctorId, specialityId]);

  const newAvailabilities = allAvailabilities.filter(
    (availability) => (availability.date as Timestamp).toDate() >= new Date()
  );

  const newSortedDates = newAvailabilities.sort((a, b) => {
    return (a.date as Timestamp).seconds - (b.date as Timestamp).seconds;
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white p-10 rounded-3xl flex flex-col gap-5 h-3/4 w-1/2 overflow-auto
                                max-2xl:px-10
                                max-lg:w-10/12"
      >
        <div className="flex justify-between items-center">
          <h2
            className="text-3xl font-semibold
                                max-lg:text-2xl"
          >
            Mi disponibilidad
          </h2>
          <button onClick={onClose}>
            <XMarkIcon className="w-10 h-10 ml-auto" />
          </button>
        </div>

        <div className="flex flex-col justify-between h-full gap-10">
          {error && (
            <div className="flex justify-center gap-2 items-center h-full">
              <ExclamationCircleIcon className="w-8 h-8 text-red-500" />
              <p className="text-red-500 font-normal text-center py-5 text-xl">
                {error}
              </p>
            </div>
          )}
          {error === "" && !loading && newSortedDates.length === 0 && (
            <div className="flex items-center justify-center">
              <ExclamationCircleIcon className="w-10 h-10 mx-auto text-red-500" />
              <p className="text-red-500 font-semibold text-center py-5">
                No hay disponibilidad programada
              </p>
            </div>
          )}
          {loading && <LoadingCircle />}
          {!loading && newSortedDates && (
            <div className="flex flex-col gap-5 pb-10">
              {newSortedDates.map(
                (availability, index) =>
                  availability.slots.length > 0 && (
                    <DaySlotAppointments
                      setErased={setErased}
                      key={index}
                      availability={availability}
                      doctorId={doctorId}
                      specialityId={specialityId}
                    />
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUpMyAvailability;
