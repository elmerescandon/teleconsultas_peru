import React, {useState} from "react";

type DoctorAvailableDaysProps = {
  doctorId: string;
  specialityId: string;
  startDate: string;
  finishDate: string;
};

const DoctorAvailableDays = ({
  doctorId,
  finishDate,
  specialityId,
  startDate,
}: DoctorAvailableDaysProps) => {
  return (
    <div className="flex flex-col justify-between h-full gap-10">{/* B */}</div>
  );
};

export default DoctorAvailableDays;
