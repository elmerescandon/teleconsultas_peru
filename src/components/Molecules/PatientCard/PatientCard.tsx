import updateAppointmentField from "@/firebase/Appointments/updateAppointmentField";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {
  stringToDate,
} from "@/utils/functions/utils";
import { getHourRange } from "@/utils/functions/utilsDate";
import useAppointmentInfo from "@/utils/hooks/useAppointmentInfo";
import Routes from "@/utils/routes/Routes";
import {
  ComputerDesktopIcon,
  PencilSquareIcon,
  TrashIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Timestamp } from "firebase/firestore";

type PatientCardProps = {
  appointment: IAppointment;
};

const PatientCard = ({ appointment }: PatientCardProps) => {
  const { specialityId, patientId, startDate, endDate, _id, doctorId, joinURL } =
    appointment;

  const { summary } = useAppointmentInfo(doctorId, specialityId, patientId);

  const cancelAppointment = async () => {
    try {
      updateAppointmentField(_id, "status", "doctor-canceled");
    } catch {
      return;
    }
  };

  const classNameIcon: string = `w-7 h-7 rounded-full p-1
                         hover:text-white hover:bg-black  
                         active:translate-y-1 transition-transform duration-300`;


  return (
    <div className="bg-neutral-100 rounded-2xl w-72 max-w-md">
      <div className="flex flex-col justify-start items-start p-4 gap-2">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <div className="text-lg font-semibold">{summary.patientName}</div>
            <div className="text-sm">{summary.specialityName}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold">
            {stringToDate(appointment.date as unknown as Timestamp)}
          </div>
          <div className="text-sm">
            {getHourRange(startDate, endDate)}
          </div>
        </div>
        <div className="flex gap-5 py-1">
          <a href={`${Routes.DOCTOR_APPOINTMENTS}/${patientId}`}>
            <UserIcon className={classNameIcon} />
          </a>
          <a href={`${Routes.DOCTOR_APPOINTMENTS}/${patientId}/${_id}`}>
            <PencilSquareIcon className={classNameIcon} />
          </a>
          <a href={joinURL} target="_blank">
            <ComputerDesktopIcon className={classNameIcon} />
          </a>
          <button onClick={cancelAppointment}>
            <TrashIcon className={classNameIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
