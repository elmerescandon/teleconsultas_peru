"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import DoctorAppointmentHistory from "@/components/Organisms/DoctorAppointmentHistory/DoctorAppointmentHistory";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import { getPatientName } from "@/utils/functions/utils";
import AppointmentsMockup from "@/utils/mockups/AppointmentsMockup";
import patientsMockup from "@/utils/mockups/patientsMockup";
import { useRouter } from "next/navigation";
import React from "react";

const page = ({
    params,
}: {
    params: { patientId: string; appointmentId: string };
}) => {
    const router = useRouter();
    const { patientId, appointmentId } = params;

    const appointment = AppointmentsMockup.find((appointment) => {
        return appointment._id === appointmentId;
    });

    return (
        <div>
            <Header />
            <div className="px-48 max-xl:px-5 max-xl:pt-28 pb-28 min-h-[90vh]">
                <div className="flex ">
                    <p className="text-2xl font-semibold py-5 w-full">
                        {`Paciente: ${getPatientName(
                            patientsMockup,
                            patientId
                        )}`}
                    </p>
                    <div>
                        <ButtonPrimary
                            onClickFn={() => {
                                router.back();
                            }}
                        >
                            Atrás
                        </ButtonPrimary>
                    </div>
                </div>

                {appointment ? (
                    <DoctorAppointmentHistory appointment={appointment} />
                ) : (
                    <p>Appointment not found</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default page;
