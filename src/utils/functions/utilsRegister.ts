import ISelectOptions from "../Interfaces/ISelectOptions";
import { currentUbigeo, departments } from "../constants/locationSelect";


export const selectDepartments : ISelectOptions[] = departments.map((department) => {
    return {
        value: department.departamento,
        label: department.nombre,
    };
});

export const selectProvinces = (department : string) => {
    const provinces = currentUbigeo.filter((item) => {
        return (item.departamento === department && item.provincia !== '00' && item.distrito === '00')
    })
    
    return provinces.map((province) => {
        return {
            value: province.provincia,
            label: province.nombre,
        };
    });
}

export const selectDistricts = (department : string, province : string) => {
    const districts = currentUbigeo.filter((item) => {
        return (item.departamento === department && item.provincia === province && item.distrito !== '00')
    })
    
    return districts.map((district) => {
        return {
            value: district.distrito,
            label: district.nombre,
        };
    });
}