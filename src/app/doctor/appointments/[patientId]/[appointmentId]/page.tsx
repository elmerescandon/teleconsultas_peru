"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import LoadingCircle from "@/components/Molecules/LoadingCircle/LoadingCircle";
import DoctorAppointmentHistory from "@/components/Organisms/DoctorAppointmentHistory/DoctorAppointmentHistory";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import getAppointment from "@/firebase/Appointments/getAppointment";
import { getPatientName } from "@/firebase/Patient/getPatientName";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = ({
    params,
}: {
    params: { patientId: string; appointmentId: string };
}) => {
    const router = useRouter();
    const { patientId, appointmentId } = params;
    const [patientName, setPatientName] = useState<string>("");
    const [appointment, setAppointment] = useState<IAppointment | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getPatientInfo = async (
            patientId: string,
            appointmentId: string
        ) => {
            const patientInfo = await getPatientName(patientId);
            const appointmentInfo = await getAppointment(appointmentId);

            if (patientInfo && appointmentInfo) {
                setPatientName(`${patientInfo.name} ${patientInfo.lastName}`);
                setAppointment(appointmentInfo);
            }
        };

        try {
            setLoading(true);
            getPatientInfo(patientId, appointmentId);
            setLoading(false);
        } catch (error) {
            router.back();
        }
    }, []);

    return (
        <div>
            <Header />
            <div className="px-48 max-xl:px-5 max-xl:pt-28 pb-28 min-h-[90vh]">
                <div className="flex ">
                    <p className="text-2xl font-semibold py-5 w-full">
                        {`Paciente: ${patientName}`}
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
                ) : null}
                {loading ? <LoadingCircle /> : null}
            </div>
            <Footer />
        </div>
    );
};

export default Page;
