"use client";
import React, {useEffect, useState} from "react";
import Pagination from "../Pagination/Pagination";
import {useAppSelector} from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import PatientCard from "@/components/Molecules/PatientCard/PatientCard";
import getDoctorAppointments from "@/firebase/Appointments/getDoctorAppointments";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {ExclamationCircleIcon} from "@heroicons/react/24/outline";

const DoctorAppointments = () => {
  const user: IUserState = useAppSelector((state) => state.user);
  const {_id} = user.userInfo;
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [updated, setUpdated] = useState<boolean>(false);

  const appointmentsElements = appointments.map((appointment) => {
    return <PatientCard key={appointment._id} appointment={appointment} updateParent={() => setUpdated(!updated)} />;
  });

  useEffect(() => {
    const getAppointments = async (id: string, status: string[]) => {
      if (!id) return;
      const appointments = await getDoctorAppointments(id, status);
      if (appointments) {
        setAppointments(appointments);
      }
    };
    getAppointments(_id, ["scheduled", "pending"]);
  }, [_id, updated]);

  return (
    <div className="w-full">
      <p className="text-2xl font-semibold pb-5">Tus próximas citas</p>
      <div className="max-xl:px-5">
        {appointmentsElements && appointmentsElements.length > 0 ? (
          <Pagination
            orientation="row"
            items={appointmentsElements as React.JSX.Element[]}
            itemsPerPage={4}
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-48">
            <ExclamationCircleIcon className="text-neutral-300 h-16 w-16" />
            <p className="text-neutral-400 text-lg font-medium">
              No tienes citas agendadas todavía
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorAppointments;
