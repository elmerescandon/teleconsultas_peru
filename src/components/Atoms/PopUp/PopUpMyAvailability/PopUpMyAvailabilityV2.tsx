import React, {useState} from "react";
import PopUpHeadline from "@/components/Molecules/PopUpHeadline/PopUpHeadline";
import PopUpWrapper from "@/components/Templates/PopUpWrapper/PopUpWrapper";
import DateFilter from "@/components/Molecules/DateFilter/DateFilter";
import IDateRangeAppointment from "@/utils/Interfaces/IDateRangeAppointment";
import PopUpAlert from "@/components/Molecules/PopUpAlert/PopUpAlert";
import DoctorAvailableDays from "@/components/Organisms/DoctorAvailableDays/DoctorAvailableDays";
import {getNowDay, getNowDayPlusDays} from "@/utils/functions/utilsDate";

type PopUpMyAvailabilityV2Props = {
  onClose: () => void;
  doctorId: string;
  specialityId: string;
};

const PopUpMyAvailabilityV2 = ({
  onClose,
  doctorId,
  specialityId,
}: PopUpMyAvailabilityV2Props) => {
  const [date, setDate] = useState<IDateRangeAppointment>({
    init: getNowDay(),
    finish: getNowDayPlusDays(7),
  });

  return (
    <PopUpWrapper>
      <PopUpHeadline title="Mi Disponibilidad" onClose={onClose} />
      <DateFilter date={date} setDate={setDate} />
      {date.init === null || date.finish === null ? (
        <PopUpAlert text="Indique el rango de fechas para ver las disponibilidades" />
      ) : (
        <DoctorAvailableDays
          doctorId={doctorId}
          specialityId={specialityId}
          startDate={date.init}
          finishDate={date.finish}
        />
      )}
    </PopUpWrapper>
  );
};

export default PopUpMyAvailabilityV2;
