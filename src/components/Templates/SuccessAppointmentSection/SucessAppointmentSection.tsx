"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import PaymentItem from "@/components/Molecules/PaymentItem/PaymentItem";
import SuccessRecommendations from "@/components/Molecules/SuccessRecommendations/SuccessRecommendations";
import { useAppointment } from "@/utils/context/AppointmentContext/AppointmentContext";
import Routes from "@/utils/routes/Routes";
import { useRouter } from "next/navigation";
import React from "react";

const SucessAppointmentSection = () => {
    const router = useRouter();
    const appointment = useAppointment();
    const { specialityId, doctorId, date, startDate, endDate } = appointment;
    return (
        <div className="px-72 pb-10 max-2xl:px-10 max-lg:pt-36">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold py-3">
                    ¡Pago Realizado con éxito
                </div>
                <div>
                    <ButtonPrimary
                        onClickFn={() => {
                            router.push(Routes.PATIENT_HOME);
                        }}
                    >
                        Ir a mi perfil
                    </ButtonPrimary>
                </div>
            </div>

            <div className="text-lg py-3">
                Gracias por agendar tu cita con Aika Salud. Brindándote atención
                de calidad donde sea que estés.
            </div>
            <div className="text-xl font-semibold py-3">Resumen</div>
            <div className="pb-5">
                <PaymentItem label="Especialidad" name={specialityId} />
                <PaymentItem label="Profesional" name={doctorId} />
                <PaymentItem label="Fecha" name={date} />
                <PaymentItem label="Horario" name={startDate} />
            </div>
            <SuccessRecommendations />
        </div>
    );
};

export default SucessAppointmentSection;
