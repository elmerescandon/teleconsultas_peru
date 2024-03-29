"use client";
import AddAvailabilityGeneral from "@/components/Molecules/AddAvailabilityGeneral/AddAvailabilityGeneral";
import {ExclamationCircleIcon} from "@heroicons/react/24/solid";
import PopUpHeadline from "@/components/Molecules/PopUpHeadline/PopUpHeadline";

type PopUpAddAvailabilityProps = {
  onClose: () => void;
  doctorId: string;
  specialityId: string;
};

const PopUpAddAvailability = ({
  onClose,
  doctorId,
  specialityId,
}: PopUpAddAvailabilityProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white p-10 rounded-3xl flex flex-col gap-5 h-3/4 w-1/2 overflow-auto
                max-2xl:px-10
                max-lg:w-10/12"
      >
        <PopUpHeadline title="Agregar disponibilidad" onClose={onClose} />
        <div className="flex items-center justify-center flex-wrap gap-5 bg-brand-50 p-3 rounded-2xl">
          <ExclamationCircleIcon className="w-10 h-10 text-brand-900" />
          <p className="font-semibold text-base italic">
            La creación de horario se realiza considerando el horario peruano
            (GMT-5).
          </p>
        </div>
        <AddAvailabilityGeneral
          doctorId={doctorId}
          specialityId={specialityId}
        />
      </div>
    </div>
  );
};

export default PopUpAddAvailability;
