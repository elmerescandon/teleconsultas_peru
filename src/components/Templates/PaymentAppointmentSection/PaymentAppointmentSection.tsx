"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import PaymentOptions from "@/components/Organisms/PaymentOptions/PaymentOptions";
import PaymentReview from "@/components/Organisms/PaymentReview/PaymentReview";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { IState } from "@/redux/store";
import { useAppointment } from "@/utils/context/AppointmentContext/AppointmentContext";
import Routes from "@/utils/routes/Routes";
import { useRouter } from "next/navigation";

const PaymentAppointmentSection = () => {
    const router = useRouter();
    const appointment = useAppointment();
    const user: IUserState = useAppSelector((state: IState) => state.user);

    return (
        <div className="h-[95vh] max-lg:h-full max-lg:pt-36 px-48 max-lg:px-10">
            <div className="text-2xl font-semibold py-5">
                Realiza el pago de tu cita
            </div>
            <div className="flex justify-center items-center pt-5 pb-10 gap-10 max-lg:flex-col">
                <PaymentOptions />
                <PaymentReview />
            </div>
            <div className="py-5">
                <ButtonPrimary
                    onClickFn={() => {
                        // TODO: Añadir pasarela de pago con agenda
                        router.push(Routes.RESERVE_SUCCESS);
                    }}
                >
                    Realizar Pago
                </ButtonPrimary>
            </div>
        </div>
    );
};

export default PaymentAppointmentSection;
