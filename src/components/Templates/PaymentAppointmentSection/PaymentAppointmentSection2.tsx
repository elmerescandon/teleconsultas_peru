import LinkPrimary from '@/components/Atoms/Links/LinkPrimary/LinkPrimary';
import LoadingFullPage from '@/components/Molecules/Loaders/LoadingFullPage/LoadingFullPage';
import PaymentLater from '@/components/Molecules/PaymentLater/PaymentLater';
import MercadoPagoPayment from '@/components/Organisms/MercadoPagoPayment/MercadoPagoPayment';
import PaymentReview from '@/components/Organisms/PaymentReview/PaymentReview';
import createNewAppointment from '@/firebase/Appointments/createNewAppointment';
import updateAppointmentField from '@/firebase/Appointments/updateAppointmentField';
import { isDateOlderThan24HoursFromNow, validateAppointment } from '@/utils/functions/utils';
import useAppointmentURLParams from '@/utils/hooks/useAppointmentURLParams';
import Routes from '@/utils/routes/Routes';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const PaymentAppointmentSection2 = () => {

    const router = useRouter();

    const { appointmentExisted, appointment } = useAppointmentURLParams();

    const [pageState, setPageState] = useState<{
        loading: boolean;
        error: string;
    }>({ loading: false, error: "" });

    const onClickPayLater = async () => {
        try {
            if (validateAppointment(appointment)) {
                if (!appointmentExisted) {
                    setPageState({
                        loading: true,
                        error: "",
                    });
                    await createNewAppointment(appointment);
                    router.push(Routes.PATIENT_HOME);
                    return;
                } else {
                    updateAppointmentField(appointment._id, "status", "pending");
                }
            } else {
                setPageState({
                    loading: false,
                    error: "La cita no es válida, por favor seleccione una nueva cita",
                });
            }
        } catch (error) {
            setPageState({
                loading: false,
                error: (error as Error).message,
            });
        }

    };


    return (
        <div className="px-48 pb-10 max-lg:h-full max-lg:pt-24 max-lg:px-5">
            {!pageState.loading && <div>
                <div className='flex justify-between items-center max-lg:flex-col-reverse max-lg:items-end'>
                    <div className="text-2xl font-semibold py-5">
                        ¡Ya falta poco, completa los siguientes pasos!
                    </div>
                    <LinkPrimary to={Routes.RESERVE}>Atrás</LinkPrimary >
                </div>

                <div className="flex flex-col justify-center pt-5 gap-2 w-full">
                    <PaymentReview appointment={appointment} />
                    {pageState.error === "" ? (
                        <div className="flex-col items-center justify-center">
                            {appointment._id !== "" && <MercadoPagoPayment appointment={appointment} />}
                            {isDateOlderThan24HoursFromNow(appointment.date) && <PaymentLater payLater={onClickPayLater} />}
                        </div>
                    ) : (
                        <div>
                            <p className="text-base text-red-500 py-5">{pageState.error}</p>
                            <LinkPrimary to={Routes.PATIENT_HOME}>
                                Volver a inicio
                            </LinkPrimary>
                        </div>
                    )}
                </div>
            </div>}
            {pageState.loading && <LoadingFullPage />}

        </div>
    )
}

export default PaymentAppointmentSection2