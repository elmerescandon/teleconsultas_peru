"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import PaymentItem from "@/components/Molecules/PaymentItem/PaymentItem";
import SuccessRecommendations from "@/components/Molecules/SuccessRecommendations/SuccessRecommendations";
import getAppointment from "@/firebase/Appointments/getAppointment";
import updateAppointmentField from "@/firebase/Appointments/updateAppointmentField";
import {getDoctorName} from "@/firebase/Doctor/getDoctorName";
import {getSpecialityName} from "@/firebase/Speciality/getSpecialityName";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {stringToDate} from "@/utils/functions/utils";
import {getHourRange} from "@/utils/functions/utilsDate";
import Routes from "@/utils/routes/Routes";
import {Timestamp} from "firebase/firestore";
import {useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useState} from "react";

const SucessAppointmentSection = () => {
  const [appoinment, setAppoinment] = useState<IAppointment | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const paymentStatus = searchParams.get("collection_status");
  const paymentReference = searchParams.get("external_reference");
  const paymentId = searchParams.get("preference_id");

  const [summary, setSummary] = useState<{
    doctorName: string;
    specialityName: string;
  }>({doctorName: "", specialityName: ""});

  useEffect(() => {
    const getAppointmentInfo = async (
      paymentReference: string | null,
      paymentStatus: string | null,
      paymentId: string | null
    ) => {
      if (paymentReference === null) {
        router.push(Routes.PATIENT_HOME);
        return;
      }
      const newAppointment: IAppointment | null = await getAppointment(
        paymentReference
      );

      if (!newAppointment) {
        router.push(Routes.PATIENT_HOME);
        return;
      }
      console.log(newAppointment);
      setAppoinment(newAppointment);
      await fetch("/api/salufy/appointment", {
        method: "PUT",
        body: JSON.stringify({
          id: newAppointment._id,
          appointmentFields: {status: "scheduled"},
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    };
    getAppointmentInfo(paymentReference, paymentStatus, paymentId);
  }, [paymentReference]);

  useEffect(() => {
    const getInfoFromDb = async (doctorId: string, specialityId: string) => {
      if (doctorId === "" || specialityId === "") return;
      const doctor = await getDoctorName(doctorId);
      const speciality = await getSpecialityName(specialityId);

      if (doctor && speciality) {
        setSummary({
          specialityName: speciality.name,
          doctorName: `Dr. ${doctor.name} ${doctor.lastName}`,
        });
      } else {
        setSummary({doctorName: "", specialityName: ""});
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
        Gracias por agendar tu cita con Salufy Salud. Brindándote atención de
        calidad donde sea que estés.
      </div>
      <div className="text-xl font-semibold py-3">Resumen</div>
      <div className="pb-5">
        <PaymentItem label="Especialidad" name={summary.specialityName} />
        <PaymentItem label="Profesional" name={summary.doctorName} />
        <PaymentItem
          label="Fecha"
          name={
            appoinment
              ? stringToDate(appoinment.date as unknown as Timestamp)
              : ""
          }
        />
        <PaymentItem
          label="Horario"
          name={
            (appoinment &&
              appoinment.startDate &&
              appoinment.endDate &&
              getHourRange(appoinment?.startDate, appoinment?.endDate)) ||
            ""
          }
        />
      </div>
      <SuccessRecommendations />
    </div>
  );
};

export default SucessAppointmentSection;
