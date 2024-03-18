"use client";
import DoctorAppointmentFilter from "@/components/Organisms/DoctorAppointmentFilter/DoctorAppointmentFilter";
import React, {useEffect, useState} from "react";
import IAppointmentFilter from "@/utils/Interfaces/IAppointmentFilter";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import Pagination from "@/components/Organisms/Pagination/Pagination";
import PatientCard from "@/components/Molecules/PatientCard/PatientCard";
import {useAppSelector} from "@/redux/hooks";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import getAppointmentsFiltered from "@/firebase/Appointments/getAppointmentsFiltered";
import IDateRangeAppointment from "@/utils/Interfaces/IDateRangeAppointment";

const DoctorAppointmentSection = () => {
  const user: IUserState = useAppSelector((state) => state.user);
  const {_id, role} = user.userInfo;
  const [filter, setFilter] = useState<IAppointmentFilter>({
    date: {
      init: null,
      finish: null,
    },
    speciality: "",
    patientName: "",
  });

  const [appointments, setAppointments] = useState<IAppointment[]>([]);

  useEffect(() => {
    const getAppointments = async (
      id: string,
      role: string,
      status: string[],
      date: IDateRangeAppointment,
      specialityId: string
    ) => {
      const appointments = await getAppointmentsFiltered(
        id,
        role,
        status,
        date,
        specialityId
      );
      if (appointments) {
        const userFilteredAppointments = appointments.filter((appointment) => {
          if (filter.patientName === "") return true;
          return appointment.patientId === filter.patientName;
        });
        setAppointments(userFilteredAppointments);
      }
    };
    getAppointments(
      _id,
      role,
      ["scheduled", "pending", "doctor-canceled", "patient-canceled"],
      filter.date,
      filter.speciality
    );
  }, [filter, _id, role]);

  return (
    <div
      className="px-48 pb-5
                        max-xl:pt-24 max-xl:px-10"
    >
      <p className="text-2xl font-semibold">Mis citas</p>
      <DoctorAppointmentFilter
        appointments={appointments}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="h-[624px]">
        {appointments.length !== 0 && (
          <Pagination
            wrap={true}
            center={true}
            items={appointments.map((appointment, index) => {
              return <PatientCard appointment={appointment} key={index} />;
            })}
            itemsPerPage={6}
            orientation="row"
            paginationPosition="left"
          />
        )}
        {appointments.length === 0 && (
          <p className="text-2xl font-semibold text-center mt-10 h-[40vh]">
            Todavía no tienes citas, pronto se agendarán.
          </p>
        )}
      </div>
    </div>
  );
};

export default DoctorAppointmentSection;
