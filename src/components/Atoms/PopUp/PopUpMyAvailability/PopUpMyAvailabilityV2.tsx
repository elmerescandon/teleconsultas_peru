import React, {useState} from "react";
import PopUpHeadline from "@/components/Molecules/PopUpHeadline/PopUpHeadline";
import PopUpWrapper from "@/components/Templates/PopUpWrapper/PopUpWrapper";
import DateFilter from "@/components/Molecules/DateFilter/DateFilter";
import IDateRangeAppointment from "@/utils/Interfaces/IDateRangeAppointment";
import PopUpAlert from "@/components/Molecules/PopUpAlert/PopUpAlert";

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
    init: null,
    finish: null,
  });

  return (
    <PopUpWrapper>
      <PopUpHeadline title="Mi Disponibilidad" onClose={onClose} />
      <DateFilter date={date} setDate={setDate} />
      {date.init === null && date.finish === null ? (
        <PopUpAlert text="Indique el rango de fechas para ver las disponibilidades+" />
      ) : null}
    </PopUpWrapper>
  );
};

export default PopUpMyAvailabilityV2;
