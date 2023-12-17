"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import Loading from "@/components/Molecules/Loaders/Loading/Loading";
import MercadoPagoPayment from "@/components/Organisms/MercadoPagoPayment/MercadoPagoPayment";
import PaymentOptions from "@/components/Organisms/PaymentOptions/PaymentOptions";
import PaymentReview from "@/components/Organisms/PaymentReview/PaymentReview";
import addAppointment from "@/firebase/Appointments/addAppointment";
import setAvailabilityToSlot from "@/firebase/Availability/setAvailabilitySlotsState";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { IState } from "@/redux/store";
import { useAppointment } from "@/utils/context/AppointmentContext/AppointmentContext";
import { createAppointment } from "@/utils/functions/utils";
import Routes from "@/utils/routes/Routes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PaymentAppointmentSection = () => {
    const router = useRouter();
    const appointment = useAppointment();
    const user: IUserState = useAppSelector((state: IState) => state.user);

    const [pageState, setPageState] = useState<{
        loading: boolean;
        error: string;
    }>({ loading: false, error: "" });

    const clickToPay = async () => {
        if (!appointment || !user) return;
        const { date, specialityId, doctorId, startDate, endDate } =
            appointment;
        const reservation = createAppointment(appointment, user.userInfo);
        try {
            setPageState({ loading: true, error: "" });
            await addAppointment(reservation);
            await setAvailabilityToSlot(
                date,
                specialityId,
                doctorId,
                false,
                startDate,
                endDate
            );
            setPageState({ loading: false, error: "" });
            router.push(Routes.RESERVE_SUCCESS);
        } catch (error) {
            setPageState({ loading: false, error: (error as Error).message });
            return;
        }
    };

    const getLink = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_MYPAGE_URL}/api/checkout`
            );
            console.log(res);
            const data = await res.json();
            // const res = await fetch.ge("/api/checkout");
            console.log(data);
        } catch (err) {
            console.log("Hubo un error");
        }
    };

    return (
        <div
            className="h-screen px-48 
                        max-lg:h-full max-lg:pt-24 max-lg:px-5
                        "
        >
            <div className="text-2xl font-semibold py-5">
                Realiza el pago de tu cita
            </div>
            <div className="flex justify-center items-center pt-5 pb-10 gap-10 max-lg:flex-col">
                <PaymentOptions />
                <PaymentReview />
            </div>
            <div className="py-5 flex">
                <button
                    className="py-5 w-full rounded-2xl text-lg font-semibold"
                    onClick={getLink}
                >
                    Pagar con MercadoPago
                </button>
                {/* <MercadoPagoPayment /> */}
                {/* <ButtonPrimary onClickFn={clickToPay}>
                    Realizar Pago
                </ButtonPrimary> */}
                {pageState.loading && <Loading size={10} />}
            </div>
            {pageState.error !== "" && (
                <p className="text-xl text-red-500">{pageState.error}</p>
            )}
        </div>
    );
};

export default PaymentAppointmentSection;
