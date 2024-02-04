"use client";
import DateFilter from "@/components/Molecules/DateFilter/DateFilter";
import { getUsersFromArray } from "@/firebase/User/getUserFromArray";
import IAppointmentFilter from "@/utils/Interfaces/IAppointmentFilter";
import ISelectOptions from "@/utils/Interfaces/ISelectOptions";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { defaultOptions } from "@/utils/constants/constants";
import { useEffect, useState } from "react";
import Select from "react-select";

type DoctorAppointmentFilterProps = {
    appointments: IAppointment[];
    filter: IAppointmentFilter;
    setFilter: (filter: IAppointmentFilter) => void;
};

const DoctorAppointmentFilter = ({
    appointments,
    filter,
    setFilter,
}: DoctorAppointmentFilterProps) => {
    const { date, patientName, speciality } = filter;
    const [patientOptions, setPatientOptions] = useState<ISelectOptions[]>([]);

    useEffect(() => {
        const getUsersFromAppointments = async (appointments: IAppointment[]) => {
            try {
                const appointmentsUsers = appointments.map((appointment) => appointment.patientId);
                const uniqueUsers = Array.from(new Set(appointmentsUsers));
                const users = await getUsersFromArray(uniqueUsers);
                if (users.length === 0) {
                    throw new Error("No se encontraron usuarios");
                }
                const newUserOptions = users.map((user) => ({ label: `${user.name} ${user.lastName}`, value: user._id }));
                setPatientOptions(newUserOptions);
            } catch (error) {
                console.error(error);
            }

        }
        if (appointments.length === 0) return;
        getUsersFromAppointments(appointments);
    }, [appointments]);

    return (
        <div className="flex gap-14 justify-between py-5">
            <div className="flex gap-5">
                <DateFilter
                    date={date}
                    setDate={(date) => {
                        setFilter({ ...filter, date: date });
                    }}
                />
                <Select
                    id="patients-appointments"
                    placeholder={'Selecciona al paciente'}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            width: "259px",
                            height: "56px",
                        }),
                    }}
                    options={patientOptions}
                    isSearchable
                    defaultValue={defaultOptions[0]}
                    isClearable
                    onChange={(option) => {
                        setFilter({ ...filter, patientName: option?.value || "" });
                    }}
                />
            </div>
        </div>
    );
};

export default DoctorAppointmentFilter;
