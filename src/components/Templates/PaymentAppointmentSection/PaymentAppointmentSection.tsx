"use client";
import ButtonThird from "@/components/Atoms/Buttons/ButtonThird/ButtonThird";
import LoadingHorizontal from "@/components/Molecules/Loaders/LoadingHorizontal/LoadingHorizontal";
import MercadoPagoPayment from "@/components/Organisms/MercadoPagoPayment/MercadoPagoPayment";
import PaymentReview from "@/components/Organisms/PaymentReview/PaymentReview";
import addAppointment from "@/firebase/Appointments/addAppointment";
import setAvailabilityToSlot from "@/firebase/Availability/setAvailabilitySlotsState";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { IState } from "@/redux/store";
import { useAppointment } from "@/utils/context/AppointmentContext/AppointmentContext";
import { createAppointment } from "@/utils/functions/utils";
import Routes from "@/utils/routes/Routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PaymentAppointmentSection = () => {
    const router = useRouter();
    const appointment = useAppointment();
    const user: IUserState = useAppSelector((state: IState) => state.user);

    const [created, setCreated] = useState<boolean>(false);
    const [pageState, setPageState] = useState<{
        loading: boolean;
        error: string;
    }>({ loading: false, error: "" });

    useEffect(() => {
        const createAppointmentInit = async () => {
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
            } catch (error) {
                setPageState({
                    loading: false,
                    error: (error as Error).message,
                });
                return;
            }
        };
        if (!created && user && appointment) {
            createAppointmentInit();
            setCreated(true);
        }
    }, [user, appointment]);

    return (
        <div
            className="h-screen px-48 
                        max-lg:h-full max-lg:pt-24 max-lg:px-5
                        "
        >
            <div className="text-2xl font-semibold py-5">
                ¡Enhorabuena, tu cita ya se encuentra reservada!
            </div>
            <div className="flex justify-center items-center pt-5 gap-10 max-lg:flex-col">
                <PaymentReview />
            </div>
            <div>
                <div className="flex-col items-center justify-center gap-5">
                    <MercadoPagoPayment />
                    <div>
                        <ButtonThird
                            onClickFn={() => {
                                router.push(Routes.PATIENT_HOME);
                            }}
                        >
                            Ahora no, deseo pagar más tarde.
                        </ButtonThird>
                        <p className="text-sm text-gray-500">
                            * Recuerda que tienes hasta 24 horas antes de tu
                            cita para realizar el pago o se cancelará de forma
                            automática.
                        </p>
                    </div>
                </div>
                {pageState.loading && <LoadingHorizontal />}
            </div>
            {pageState.error !== "" && (
                <p className="text-xl text-red-500">{pageState.error}</p>
            )}
        </div>
    );
};

export default PaymentAppointmentSection;
