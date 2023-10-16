import ButtonReserve from "@/components/Atoms/Buttons/ButtonReserve/ButtonReserve";
import ReserveAppointmentCalendar from "@/components/Organisms/ReserveAppointmentCalendar/ReserveAppointmentCalendar";
import ReserveAppointmentHours from "@/components/Organisms/ReserveAppointmentHours/ReserveAppointmentHours";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { useAppointment } from "@/utils/context/AppointmentContext/AppointmentContext";
import { validateAppointment } from "@/utils/functions/utils";
import Routes from "@/utils/routes/Routes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ReserveAvailabilitySection = () => {
    const userState: IUserState = useAppSelector((state) => state.user);
    const { logged } = userState;
    const router = useRouter();
    const [loadingDates, setLoadingDates] = useState<boolean>(false);

    const [popUp, setPopUp] = useState<boolean>(false);
    const [popUpRegister, setPopUpRegister] = useState<boolean>(false);
    const appointment = useAppointment();

    const onClickReserve = (appointment: IAppointment) => {
        if (validateAppointment(appointment)) {
            if (!logged) {
                setPopUpRegister(true);
                return;
            }
            router.push(Routes.RESERVE_PAYMENT);
        } else {
            setPopUp(true);
            return;
        }
    };
    return (
        <div className="px-48  py-10  max-xl:px-20 max-md:px-5">
            <ReserveAppointmentCalendar />
            {/* <ReserveAppointmentHours
                loading={loadingDates}
                availableAppointments={availableAppointments}
            /> */}
            <ButtonReserve onClickFn={() => onClickReserve(appointment)} />
        </div>
    );
};

export default ReserveAvailabilitySection;
