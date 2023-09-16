"use client";
import InputSearch from "@/components/Atoms/Inputs/InputSearch/InputSearch";
import InputSelect from "@/components/Atoms/Inputs/InputSelect/InputSelect";
import DateFilter from "@/components/Molecules/DateFilter/DateFilter";
import IDateRangeAppointment from "@/utils/Interfaces/IDateRangeAppointment";
import { getSpecialitiesOptions } from "@/utils/functions/utils";
import specialitiesMockup from "@/utils/mockups/specialitiesMockup";
import React, { useState } from "react";

const DoctorAppointmentFilter = () => {
    const specialitiesOptions = getSpecialitiesOptions(specialitiesMockup);
    const [date, setDate] = useState<IDateRangeAppointment>({
        init: null,
        finish: null,
    });
    return (
        <div className="flex gap-24 justify-end pb-5">
            <div className="flex gap-5 justify-end">
                <InputSelect
                    onChange={() => {}}
                    placeholder="Escoge tu especialidad"
                    selectId="select"
                    options={specialitiesOptions}
                />
                <DateFilter date={date} setDate={setDate} />
            </div>
            <InputSearch />
        </div>
    );
};

export default DoctorAppointmentFilter;
