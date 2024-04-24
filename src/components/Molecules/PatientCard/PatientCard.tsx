import updateAppointmentField from "@/firebase/Appointments/updateAppointmentField";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {stringToDate} from "@/utils/functions/utils";
import {getHourRange} from "@/utils/functions/utilsDate";
import useAppointmentInfo from "@/utils/hooks/useAppointmentInfo";
import Routes from "@/utils/routes/Routes";
import {
    ComputerDesktopIcon,
    PencilSquareIcon,
    TrashIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import {Timestamp} from "firebase/firestore";
import {useState} from "react";
import Loading from "../Loaders/Loading/Loading";

type PatientCardProps = {
    appointment: IAppointment;
    updateParent?: () => void;
};

const PatientCard = ({appointment, updateParent}: PatientCardProps) => {
    const {
        specialityId,
        patientId,
        startDate,
        endDate,
        _id,
        doctorId,
        joinURL,
        status,
    } = appointment;

    const [state, setState] = useState<{
        loading: boolean;
        error: string;
        confirm: boolean;
    }>({
        loading: false,
        error: "",
        confirm: false,
    });

    const {loading, error, confirm} = state;

    const {summary} = useAppointmentInfo(doctorId, specialityId, patientId);

    const cancelAppointment = async () => {
        try {
            setState({...state, loading: true}); // Set loading state to true
            if (status === "scheduled") {
                await updateAppointmentField(
                    _id,
                    "status",
                    "doctor-canceled/scheduled"
                );
            } else if (status === "pending") {
                await updateAppointmentField(
                    _id,
                    "status",
                    "doctor-canceled/pending"
                );
            }
            updateParent && updateParent();
            // await updateAppointmentField(_id, "status", "doctor-canceled");
            setState({...state, confirm: true, loading: false}); // Set confirm state to true
        } catch {
            setState({...state, error: "Failed to cancel appointment"}); // Set error state if updateAppointmentField fails
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
                        <div className="text-lg font-semibold">
                            {summary.patientName}
                        </div>
                        <div className="text-sm">{summary.specialityName}</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-sm font-semibold">
                        {stringToDate(appointment.date as unknown as Timestamp)}
                    </div>
                    <div className="text-sm">
                        {startDate &&
                            endDate &&
                            getHourRange(startDate, endDate)}
                    </div>
                </div>
                <div className="flex items-center gap-5 py-1">
                    <a href={`${Routes.DOCTOR_APPOINTMENTS}/${patientId}`}>
                        <UserIcon className={classNameIcon} />
                    </a>
                    <a
                        href={`${Routes.DOCTOR_APPOINTMENTS}/${patientId}/${_id}`}
                    >
                        <PencilSquareIcon className={classNameIcon} />
                    </a>
                    <a href={joinURL} target="_blank">
                        <ComputerDesktopIcon className={classNameIcon} />
                    </a>
                    <button onClick={cancelAppointment}>
                        <TrashIcon className={classNameIcon} />
                    </button>
                    {loading && <Loading size={5} />}
                </div>
                {confirm && !loading && (
                    <p className="font-semibold italic text-sm text-green-500">
                        Se eliminó la cita, actualice la página.
                    </p>
                )}
                {error && !loading && (
                    <p className="font-semibold italic text-sm text-red-500">
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PatientCard;
