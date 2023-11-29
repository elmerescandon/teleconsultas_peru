"use client";
import InputSearch from "@/components/Atoms/Inputs/InputSearch/InputSearch";
import InputSelect from "@/components/Atoms/Inputs/InputSelect/InputSelect";
import DateFilter from "@/components/Molecules/DateFilter/DateFilter";
import IAppointmentFilter from "@/utils/Interfaces/IAppointmentFilter";
import { getSpecialitiesOptions } from "@/utils/functions/utils";
import specialitiesMockup from "@/utils/mockups/specialitiesMockup";

type DoctorAppointmentFilterProps = {
    filter: IAppointmentFilter;
    setFilter: (filter: IAppointmentFilter) => void;
};

const DoctorAppointmentFilter = ({
    filter,
    setFilter,
}: DoctorAppointmentFilterProps) => {
    const specialitiesOptions = getSpecialitiesOptions(specialitiesMockup);
    const { date, patientName, speciality } = filter;

    return (
        <div className="flex gap-14 justify-between py-5">
            <div className="flex gap-5">
                {/* <InputSelect
                    onChange={(e: string) => {
                        setFilter({ ...filter, speciality: e });
                    }}
                    placeholder="Escoge tu especialidad"
                    selectId="doctor-speciality"
                    options={specialitiesOptions}
                /> */}
                <DateFilter
                    date={date}
                    setDate={(date) => {
                        setFilter({ ...filter, date: date });
                    }}
                />
            </div>
            {/* <InputSearch
                placeholder="Busca a un paciente"
                onInputChange={(e: string) => {
                    setFilter({ ...filter, patientName: e });
                }}
            /> */}
        </div>
    );
};

export default DoctorAppointmentFilter;
