import InputSelect from "@/components/Atoms/Inputs/InputSelect/InputSelect";
import { getSpecialities } from "@/firebase/Speciality/getSpecialities";
import ISelectOptions from "@/utils/Interfaces/ISelectOptions";
import { getSpecialitiesOptions } from "@/utils/functions/utils";
import React, { useEffect, useState } from "react";

type SpecialityFilterProps = {
    setSpeciality: (value: string) => void;
};

const SpecialityFilter = ({ setSpeciality }: SpecialityFilterProps) => {
    const [specialitiesOptions, setSpecialitiesOptions] = useState<
        ISelectOptions[]
    >([]);

    useEffect(() => {
        const getSpecialitiesFromDb = async () => {
            const specialities = await getSpecialities();
            if (specialities) {
                setSpecialitiesOptions(getSpecialitiesOptions(specialities));
            }
        };
        getSpecialitiesFromDb();
    }, []);
    return (
        <div>
            <InputSelect
                onChange={(speciality) => {
                    setSpeciality(speciality);
                }}
                selectId="specialities"
                options={specialitiesOptions}
                placeholder="Selecciona la especialidad"
            />
        </div>
    );
};

export default SpecialityFilter;
