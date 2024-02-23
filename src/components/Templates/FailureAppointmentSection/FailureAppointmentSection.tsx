"use client";
import ButtonPrimary from '@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary';
import PaymentItem from '@/components/Molecules/PaymentItem/PaymentItem';
import getAppointment from '@/firebase/Appointments/getAppointment';
import { getDoctorName } from '@/firebase/Doctor/getDoctorName';
import { getSpecialityName } from '@/firebase/Speciality/getSpecialityName';
import IAppointment from '@/utils/Interfaces/reducers/IAppointment';
import { useAppointment } from '@/utils/context/AppointmentContext/AppointmentContext';
import { getAppointmentHours, stringToDate } from '@/utils/functions/utils';
import { getHourRange } from '@/utils/functions/utilsDate';
import Routes from '@/utils/routes/Routes';
import { Timestamp } from 'firebase/firestore';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const FailureAppointmentSection = () => {

    const [appoinment, setAppoinment] = useState<IAppointment | null>(null);
    const appointment = useAppointment();
    const searchParams = useSearchParams();
    const router = useRouter();
    const paymentReference = searchParams.get("external_reference");
    const [summary, setSummary] = useState<{
        doctorName: string;
        specialityName: string;
    }>({ doctorName: "", specialityName: "" });

    useEffect(() => {
        const getAppointmentInfo = async (
            paymentReference: string | null,
        ) => {
            if (paymentReference === null) {
                router.push(Routes.PATIENT_HOME);
                return;
            }
            const newAppointment: IAppointment | null = await getAppointment(
                paymentReference
            );
            if (newAppointment !== null) {
                setAppoinment(newAppointment);
            }
        };
        getAppointmentInfo(paymentReference);
    }, [appointment, paymentReference]);


    useEffect(() => {
        const getInfoFromDb = async (
            doctorId: string,
            specialityId: string
        ) => {
            if (doctorId === "" || specialityId === "") return;
            const doctor = await getDoctorName(doctorId);
            const speciality = await getSpecialityName(specialityId);

            if (doctor && speciality) {
                setSummary({
                    specialityName: speciality.name,
                    doctorName: `Dr. ${doctor.name} ${doctor.lastName}`,
                });
            } else {
                setSummary({ doctorName: "", specialityName: "" });
            }
        };
        if (appoinment) {
            getInfoFromDb(appoinment.doctorId, appoinment.specialityId);
        }
    }, [appoinment]);

    return (
        <div
            className="px-72 pb-10 
                        max-2xl:px-10 max-lg:pt-24"
        >
            <div className="flex justify-between">
                <div
                    className="text-2xl font-semibold py-3
                                max-xl:text-lg max-xl:font-semibold"
                >
                    ¡Oops! Algo salió mal
                </div>
                <div>
                    <ButtonPrimary
                        onClickFn={() => {
                            router.push(Routes.PATIENT_HOME);
                        }}
                    >
                        Ir a inicio
                    </ButtonPrimary>
                </div>
            </div>

            <div className="text-lg py-3">
                Por favor, intenta realizar el pago en otro momento. Si el problema persiste, comunícate con soporte@salufy.org
            </div>
            <div className='h-[48vh]'>
                <div className="text-xl font-semibold py-3">Resumen</div>
                <div className="pb-5">
                    <PaymentItem
                        label="Especialidad"
                        name={summary.specialityName}
                    />
                    <PaymentItem label="Profesional" name={summary.doctorName} />
                    <PaymentItem
                        label="Fecha"
                        name={
                            appoinment
                                ? stringToDate(
                                    appoinment.date as unknown as Timestamp
                                )
                                : ""
                        }
                    />
                    <PaymentItem
                        label="Horario"
                        name={getHourRange(
                            appoinment?.startDate!,
                            appoinment?.endDate!
                        )}
                    />
                </div>
            </div>

        </div>
    )
}

export default FailureAppointmentSection