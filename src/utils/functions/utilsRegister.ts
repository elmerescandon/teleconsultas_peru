import ISelectOptions from "../Interfaces/ISelectOptions";
import { departments } from "../constants/locationSelect";


export const selectDepartments : ISelectOptions[] = departments.map((department) => {
    return {
        value: department.departamento,
        label: department.nombre,
    };
});