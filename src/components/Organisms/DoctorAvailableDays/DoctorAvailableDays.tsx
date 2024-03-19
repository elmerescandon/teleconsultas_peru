import {getAvailableDays} from "@/firebase/Availability/geAvailableDays";
import {
  getDaysFromRangeWithTimezone,
  timestampToDateArray,
} from "@/utils/functions/utilsDate";
import {Timestamp} from "firebase/firestore";
import React, {useEffect, useState} from "react";
import DaySlotAppointmentsV2 from "../DaySlotAppointments/DaySlotAppointmentsV2";
import PopUpAlert from "@/components/Molecules/PopUpAlert/PopUpAlert";
import LoadingCircle from "@/components/Molecules/Loaders/LoadingCircle/LoadingCircle";

type DoctorAvailableDaysProps = {
  doctorId: string;
  specialityId: string;
  startDate: string;
  finishDate: string;
};

const DoctorAvailableDays = ({
  doctorId,
  finishDate,
  specialityId,
  startDate,
}: DoctorAvailableDaysProps) => {
  const [dates, setDates] = useState<Date[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getAvailableDates = async () => {
      try {
        setLoading(true);
        const daysRange = getDaysFromRangeWithTimezone(startDate, finishDate);
        const doctorAvailability = await getAvailableDays(
          doctorId,
          specialityId
        );
        if (doctorAvailability === null)
          throw new Error("No hay disponibilidad");
        const doctorAvailableDates = timestampToDateArray(
          doctorAvailability.dateArray as Timestamp[]
        );
        const availableDays = daysRange.filter((day) =>
          doctorAvailableDates.some(
            (date) => date.toDateString() === day.toDateString()
          )
        );
        setDates(availableDays);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError((error as Error).message);
      }
    };
    getAvailableDates();
  }, [doctorId, specialityId, startDate, finishDate]);

  return (
    <div className="flex flex-col justify-between h-full gap-10">
      {!loading &&
        error === "" &&
        dates.map((date, index) => (
          <DaySlotAppointmentsV2
            date={date}
            doctorId={doctorId}
            specialityId={specialityId}
            key={index}
          />
        ))}
      {error !== "" && <PopUpAlert text={error} />}
      {loading && <LoadingCircle />}
    </div>
  );
};

export default DoctorAvailableDays;
