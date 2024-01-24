"use client";
import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import PaymentLater from "@/components/Molecules/PaymentLater/PaymentLater";
import MercadoPagoPayment from "@/components/Organisms/MercadoPagoPayment/MercadoPagoPayment";
import PaymentReview from "@/components/Organisms/PaymentReview/PaymentReview";
import addAppointment from "@/firebase/Appointments/addAppointment";
import getAppointment from "@/firebase/Appointments/getAppointment";
import setAvailabilityToSlot from "@/firebase/Availability/setAvailabilitySlotsState";
import { getDoctorName } from "@/firebase/Doctor/getDoctorName";
import SendReserveNotification from "@/firebase/Mail/SendReserveNotification";
import { getSpecialityName } from "@/firebase/Speciality/getSpecialityName";
import { useAppSelector } from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import { IState } from "@/redux/store";
import {
    useAppointment,
    useAppointmentDispatch,
} from "@/utils/context/AppointmentContext/AppointmentContext";
import { createAppointment } from "@/utils/functions/utils";
import Routes from "@/utils/routes/Routes";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PaymentAppointmentSection = () => {
    const router = useRouter();
    const params = useSearchParams();
    const appId = params.get("appId");

    const appointment = useAppointment();
    const dispatch = useAppointmentDispatch();

    const user: IUserState = useAppSelector((state: IState) => state.user);
    const [appoinmentId, setAppoinmentId] = useState<string>("");

    const [created, setCreated] = useState<boolean>(false);
    const [pageState, setPageState] = useState<{
        loading: boolean;
        error: string;
    }>({ loading: false, error: "" });

    const payLater = async () => {
        router.push(Routes.PATIENT_HOME);
        try {
            const doctorName = await getDoctorName(appointment.doctorId);
            const specialityName = await getSpecialityName(
                appointment.specialityId
            );

            if (!doctorName || !specialityName) {
                setPageState({
                    loading: false,
                    error: "No se pudo obtener el nombre del doctor o la especialidad",
                });
                return;
            }

            await SendReserveNotification(
                appointment,
                user.userInfo,
                `${doctorName?.name} ${doctorName?.lastName}`,
                `${specialityName?.name}`
            );
        } catch (error) {
            setPageState({
                loading: false,
                error: (error as Error).message,
            });
            return;
        }
    };

    useEffect(() => {
        const createAppointmentInit = async () => {
            if (!appointment || !user) return;
            const { date, specialityId, doctorId, startDate, endDate } =
                appointment;
            const reservation = createAppointment(appointment, user.userInfo);
            try {
                setPageState({ loading: true, error: "" });
                const newAppointmentId = await addAppointment(reservation);
                await setAvailabilityToSlot(
                    date,
                    specialityId,
                    doctorId,
                    false,
                    startDate,
                    endDate
                );
                setAppoinmentId(newAppointmentId);
                setPageState({ loading: false, error: "" });
            } catch (error) {
                setPageState({
                    loading: false,
                    error: (error as Error).message,
                });
                return;
            }
        };
        const getAppointmentFromDb = async (appointmentId: string) => {
            try {
                const appointment = await getAppointment(appointmentId);
                if (appointment) {
                    dispatch({
                        type: "SET_APPOINTMENT",
                        payload: appointment,
                    });
                }
                setPageState({ loading: false, error: "" });
                setAppoinmentId(appointmentId);
                console.log("appointment", appointment);
            } catch (error) {
                setPageState({
                    loading: false,
                    error: (error as Error).message,
                });
                return;
            }
        };

        console.log("hola apid", appId);

        if (!created && user && appointment && appId === "") {
            createAppointmentInit();
            setCreated(true);
        } else if (appointment._id === "" && appId !== "") {
            console.log("hello");
            getAppointmentFromDb(appId!);
        }
    }, [user, appointment]);

    return (
        <div
            className="px-48 pb-10
                        max-lg:h-full max-lg:pt-24 max-lg:px-5
                        "
        >
            <div className="text-2xl font-semibold py-5">
                ¡Enhorabuena, tu cita ya se encuentra reservada!
            </div>
            <div className="flex justify-center items-center pt-5 gap-10 max-lg:flex-col">
                <PaymentReview appointment={appointment} />
            </div>
            {pageState.error !== "" && (
                <p className="text-base text-red-500 py-5">{pageState.error}</p>
            )}
            <div>
                {pageState.error === "" ? (
                    <div className="flex-col items-center justify-center">
                        <MercadoPagoPayment appointmentId={appoinmentId} />
                        <PaymentLater payLater={payLater} />
                    </div>
                ) : (
                    <LinkPrimary to={Routes.PATIENT_HOME}>
                        Volver a inicio
                    </LinkPrimary>
                )}
            </div>
        </div>
    );
};

export default PaymentAppointmentSection;
