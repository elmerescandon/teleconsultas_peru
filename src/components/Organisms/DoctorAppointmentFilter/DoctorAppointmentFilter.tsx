"use client";
import InputSearch from "@/components/Atoms/Inputs/InputSearch/InputSearch";
import InputSelect from "@/components/Atoms/Inputs/InputSelect/InputSelect";
import DateFilter from "@/components/Molecules/DateFilter/DateFilter";
import IDateRangeAppointment from "@/utils/Interfaces/IDateRangeAppointment";
import { getSpecialitiesOptions } from "@/utils/functions/utils";
import specialitiesMockup from "@/utils/mockups/specialitiesMockup";
import React, { useEffect, useState } from "react";

const DoctorAppointmentFilter = () => {
    const specialitiesOptions = getSpecialitiesOptions(specialitiesMockup);
    const [date, setDate] = useState<IDateRangeAppointment>({
        init: null,
        finish: null,
    });
    const [speciality, setSpeciality] = useState<string>("");
    const [patientName, setPatientName] = useState<string>("");

    useEffect(() => {
        console.log(date, speciality, patientName);
    }, [date, speciality, patientName]);
    return (
        <div className="flex gap-14 justify-between py-5">
            <div className="flex gap-5">
                <InputSelect
                    onChange={(e: string) => {
                        setSpeciality(e);
                    }}
                    placeholder="Escoge tu especialidad"
                    selectId="doctor-speciality"
                    options={specialitiesOptions}
                />
                <DateFilter date={date} setDate={setDate} />
            </div>
            <InputSearch
                placeholder="Busca a un paciente"
                onInputChange={(e: string) => {
                    setPatientName(e);
                }}
            />
        </div>
    );
};

export default DoctorAppointmentFilter;
