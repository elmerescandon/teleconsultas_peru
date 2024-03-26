"use client";
import ButtonReserve from "@/components/Atoms/Buttons/ButtonReserve/ButtonReserve";
import PopUpReservation from "@/components/Atoms/PopUp/PopUpReservation/PopUpReservation";
import Loading from "@/components/Molecules/Loaders/Loading/Loading";
import ReserveAppointmentCalendar from "@/components/Organisms/ReserveAppointmentCalendar/ReserveAppointmentCalendar";
import ReserveAppointmentForms from "@/components/Organisms/ReserveAppointmentForms/ReserveAppointmentForms";
import ReserveAppointmentHours from "@/components/Organisms/ReserveAppointmentHours/ReserveAppointmentHours";
import getAppointment from "@/firebase/Appointments/getAppointment";
import {updateAppointmentCanceled} from "@/firebase/Appointments/updateAppointmentCanceled";
import {useAppSelector} from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import IPopUpReserve from "@/utils/Interfaces/IPopUpReserve";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {
  useAppointment,
  useAppointmentDispatch,
} from "@/utils/context/AppointmentContext/AppointmentContext";
import {validateReservation} from "@/utils/functions/utils";
import Routes from "@/utils/routes/Routes";
import {useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useState} from "react";

const ReserveAppointmentSection = () => {
  // TODO: Refactor this component to smaller parts
  const params = useSearchParams();
  const appointmentSearch = params.get("appId");

  const userState: IUserState = useAppSelector((state) => state.user);
  const {logged} = userState;
  const router = useRouter();

  const [popUps, setPopUps] = useState<IPopUpReserve>({
    uncompletedFields: false,
    unloggedUser: false,
  });

  const appointment = useAppointment();
  const dispatch = useAppointmentDispatch();

  const [confirm, setConfirm] = useState<boolean>(false);

  const onClickReserve = async (appointment: IAppointment) => {
    if (validateReservation(appointment)) {
      if (!logged) {
        setPopUps({...popUps, unloggedUser: true});
        return;
      }

      if (appointment.status === "doctor-canceled") {
        await updateAppointmentCanceled(appointment);
        setConfirm(true);
        router.push(Routes.PATIENT_HOME);
        return;
      }

      // Pre-reserve the appointment
      setConfirm(true);
      const res = await fetch("/api/salufy/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appointment: {...appointment, status: "pre-reserved"},
        }),
      });
      const resData = await res.json();
      const {appointmentId} = resData;
      dispatch({
        type: "SET_APPOINTMENT",
        payload: {...appointment, _id: appointmentId},
      });
      router.push(Routes.RESERVE_PAYMENT);
    } else {
      setPopUps({...popUps, uncompletedFields: true});
      return;
    }
  };

  useEffect(() => {
    const getAppointmentData = async (id: string) => {
      try {
        const newAppointment = await getAppointment(id);
        if (
          newAppointment !== null &&
          newAppointment.status === "doctor-canceled"
        ) {
          dispatch({
            type: "SET_APPOINTMENT",
            payload: newAppointment,
          });
          dispatch({
            type: "SET_DOCTOR",
            payload: "",
          });
          dispatch({
            type: "SET_TIME",
            payload: {
              startDate: null,
              endDate: null,
            },
          });
        }
      } catch (error) {
        router.push(Routes.PATIENT_HOME);
      }
    };

    if (appointmentSearch !== null && appointmentSearch !== "") {
      getAppointmentData(appointmentSearch);
    }
  }, [appointmentSearch]);

  return (
    <div
      className="px-48  py-10
                        max-xl:px-20 max-xl:py-24 
                        max-md:px-5"
    >
      <div className="flex max-xl:flex-col max-xl:items-center max-xl:justify-around ">
        <ReserveAppointmentForms />
        <div className="w-full max-xl:w-full max-xl:flex max-md:flex-col max-xl:justify-around">
          <ReserveAppointmentCalendar />
          <ReserveAppointmentHours />
        </div>
      </div>
      <ButtonReserve onClickFn={() => onClickReserve(appointment)} />
      {popUps.uncompletedFields && (
        <PopUpReservation
          title="¡Lo sentimos!"
          message="Debes completar todos los campos para poder agendar una cita"
          onClose={() => {
            setPopUps({...popUps, uncompletedFields: false});
          }}
        />
      )}
      {popUps.unloggedUser && (
        <PopUpReservation
          requireSession={true}
          title="¡Ya falta poco!"
          message="Inicia sesión o regístrate para agendar una cita"
          onClose={() => {
            setPopUps({...popUps, unloggedUser: false});
          }}
        />
      )}
      {confirm && (
        <div className="flex gap-3">
          <p>
            Se realizó correctamente el registro de la cita, por favor espere
          </p>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default ReserveAppointmentSection;
