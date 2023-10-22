import React, { useEffect, useState } from "react";
import RegisterRow from "../RegisterRow/RegisterRow";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import RegisterField from "@/components/Molecules/RegisterField/RegisterField";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import useRegister from "@/utils/hooks/useRegister";
import InputSelect from "@/components/Atoms/Inputs/InputSelect/InputSelect";
import {
    selectDepartments,
    selectDistricts,
    selectProvinces,
} from "@/utils/functions/utilsRegister";
import ISelectOptions from "@/utils/Interfaces/ISelectOptions";
import { useRegisterDispatch } from "@/utils/context/RegisterContext/RegisterContext";
import { useDoctorRegisterDispatch } from "@/utils/context/RegisterDoctorContext";

type RegisterDoctorLocationProps = {
    role: string;
    prevFn: () => void;
    nextFn: () => void;
};

const RegisterDoctorLocation = ({
    role,
    prevFn,
    nextFn,
}: RegisterDoctorLocationProps) => {
    const { formFields, handleChange, handleRegister, handleValidations } =
        useRegister();
    const [checkForms, setCheckForms] = useState<boolean>(false);
    const [provinceOptions, setProvinceOptions] = useState<ISelectOptions[]>(
        []
    );
    const [districtOptions, setDistrictOptions] = useState<ISelectOptions[]>(
        []
    );
    const dispatch = useDoctorRegisterDispatch();

    useEffect(() => {
        if (formFields.region.value !== "") {
            setProvinceOptions(selectProvinces(formFields.region.value));
        } else {
            setProvinceOptions([]);
            setDistrictOptions([]);
        }

        if (formFields.province.value !== "") {
            setDistrictOptions(
                selectDistricts(
                    formFields.region.value,
                    formFields.province.value
                )
            );
        } else {
            setDistrictOptions([]);
        }

        if (checkForms && handleRegister("location")) {
            dispatch({
                type: "SET_LOCATION",
                payload: {
                    region: formFields.region.value,
                    province: formFields.province.value,
                    district: formFields.district.value,
                    address: formFields.address.value,
                    reference: formFields.refference.value,
                    interiorNumber: formFields.interiorNumber.value,
                },
            });
            nextFn();
        } else {
            setCheckForms(false);
        }
    }, [formFields]);

    return (
        <div>
            <div className="flex flex-row justify-around max-xl:flex-col max-xl:items-center gap-10 max-xl:gap-0 max-xl:px-10">
                <RegisterRow>
                    <RegisterField
                        title="Región*"
                        error={formFields.region.error}
                    >
                        <InputSelect
                            onChange={(region) => {
                                handleChange("region", region);
                            }}
                            selectId="region"
                            options={selectDepartments}
                            placeholder="Seleccione su región"
                        />
                    </RegisterField>
                    <RegisterField
                        title="Provincia*"
                        error={formFields.province.error}
                    >
                        <InputSelect
                            onChange={(province) => {
                                handleChange("province", province);
                            }}
                            selectId="province"
                            options={provinceOptions}
                            placeholder="Seleccione su provincia"
                        />
                    </RegisterField>
                    <RegisterField
                        title="Distrito*"
                        error={formFields.district.error}
                    >
                        <InputSelect
                            onChange={(district) => {
                                handleChange("district", district);
                            }}
                            selectId="district"
                            options={districtOptions}
                            placeholder="Seleccione su distrito"
                        />
                    </RegisterField>
                </RegisterRow>
                <RegisterRow>
                    <RegisterField
                        title="Dirección*"
                        error={formFields.address.error}
                    >
                        <InputText
                            onChangeFn={(address) => {
                                handleChange("address", address);
                            }}
                            value={formFields.address.value}
                            type="text"
                            placeholder=""
                        />
                    </RegisterField>
                    <RegisterField
                        title="Referencia (Opcional)"
                        error={formFields.refference.error}
                    >
                        <InputText
                            onChangeFn={(refference) => {
                                handleChange("refference", refference);
                            }}
                            value={formFields.refference.value}
                            type="text"
                            placeholder=""
                        />
                    </RegisterField>
                    <RegisterField
                        title="Interior (Opcional)"
                        error={formFields.interiorNumber.error}
                    >
                        <InputText
                            onChangeFn={(interiorNumber) => {
                                handleChange("interiorNumber", interiorNumber);
                            }}
                            value={formFields.interiorNumber.value}
                            type="text"
                            placeholder=""
                        />
                    </RegisterField>
                </RegisterRow>
            </div>
            <p>*Campos obligatorios</p>
            <div className="flex py-5 max-xl:px-10 gap-10">
                <ButtonPrimary
                    type="button"
                    onClickFn={() => {
                        prevFn();
                    }}
                >
                    Anterior
                </ButtonPrimary>
                <ButtonPrimary
                    type="button"
                    onClickFn={() => {
                        handleValidations("location");
                        setCheckForms(true);
                    }}
                >
                    Siguiente
                </ButtonPrimary>
            </div>
        </div>
    );
};

export default RegisterDoctorLocation;
