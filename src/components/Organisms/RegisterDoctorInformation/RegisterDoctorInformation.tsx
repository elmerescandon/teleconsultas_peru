import React, { useEffect, useState } from "react";
import RegisterRow from "../RegisterRow/RegisterRow";
import RegisterField from "@/components/Molecules/RegisterField/RegisterField";
import InputSelect from "@/components/Atoms/Inputs/InputSelect/InputSelect";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import { DatePicker } from "@mui/x-date-pickers";
import { Checkbox, FormControlLabel } from "@mui/material";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import useDoctorRegister from "@/utils/hooks/useDoctorRegister";
import { useDoctorRegisterDispatch } from "@/utils/context/RegisterDoctorContext/RegisterDoctorContext";
import { specialityOptions } from "@/utils/constants/registerSelect";

type RegisterDoctorInformationProps = {
    nextFn: () => void;
    prevFn: () => void;
};

const RegisterDoctorInformation = ({
    nextFn,
    prevFn,
}: RegisterDoctorInformationProps) => {
    const { formFields, handleChange, handleRegister, handleValidations } =
        useDoctorRegister();
    const [checkForms, setCheckForms] = useState<boolean>(false);
    const [readyToPost, setReadyToPost] = useState<boolean>(false);
    const dispatch = useDoctorRegisterDispatch();

    useEffect(() => {
        if (handleRegister("info") && checkForms) {
            dispatch({
                type: "SET_DOCINFO",
                payload: {
                    age: formFields.age.value as string,
                    sex: formFields.sex.value as string,
                    phone: formFields.phone.value as string,
                    specialities: formFields.specialities.value as string[],
                    cmpNumber: formFields.cmpNumber.value as string,
                    curriculum: formFields.curriculum.value as string,
                    termsAndConditions: formFields.termsAndConditions
                        .value as string,
                },
            });
            setReadyToPost(true);
        } else {
            setReadyToPost(false);
            setCheckForms(false);
        }
    }, [checkForms]);

    useEffect(() => {
        if (readyToPost) {
            nextFn();
        }
    }, [readyToPost]);

    return (
        <div>
            <div className="flex flex-row justify-around max-xl:flex-col max-xl:items-center gap-10 max-xl:gap-0 max-xl:px-10">
                <RegisterRow>
                    <RegisterField title="Edad*" error={formFields.age.error}>
                        <InputText
                            onChangeFn={(age) => {
                                handleChange("age", age);
                            }}
                            value={formFields.age.value as string}
                            type="number"
                            placeholder=""
                        />
                    </RegisterField>

                    <RegisterField
                        title="Especialidad*"
                        error={formFields.sex.error}
                    >
                        <InputSelect
                            selectId="especialidad"
                            onChange={(speciality) => {
                                handleChange("specialities", speciality);
                            }}
                            options={specialityOptions}
                            placeholder="Escoge tu especialidad"
                        />
                    </RegisterField>

                    <RegisterField
                        title="Fecha de Nacimiento*"
                        error={formFields.bornDate.error}
                    >
                        <DatePicker
                            sx={{
                                width: "100%",
                            }}
                            label=""
                            value={formFields.bornDate.value}
                            onChange={(newValue) => {
                                if (newValue !== null)
                                    handleChange(
                                        "bornDate",
                                        newValue.toString()
                                    );
                            }}
                        />
                    </RegisterField>
                </RegisterRow>
                <RegisterRow>
                    <RegisterField
                        title="Número de Colegiado*"
                        error={formFields.cmpNumber.error}
                    >
                        <InputText
                            onChangeFn={(height) => {
                                handleChange("cmpNumber", height);
                            }}
                            value={formFields.cmpNumber.value as string}
                            type="number"
                            placeholder=""
                        />
                    </RegisterField>

                    <RegisterField
                        title="URL de tu CV*"
                        error={formFields.curriculum.error}
                    >
                        <InputText
                            onChangeFn={(weight) => {
                                handleChange("curriculum", weight);
                            }}
                            value={formFields.curriculum.value as string}
                            type="text"
                            placeholder=""
                        />
                    </RegisterField>

                    <RegisterField
                        title="Número Telefónico*"
                        error={formFields.phone.error}
                    >
                        <InputText
                            onChangeFn={(phone) => {
                                handleChange("phone", phone);
                            }}
                            value={formFields.phone.value as string}
                            type="text"
                            placeholder="(+51) xxx-xxx-xxx"
                        />
                    </RegisterField>
                </RegisterRow>
            </div>
            <RegisterField error={formFields.termsAndConditions.error} title="">
                <FormControlLabel
                    control={
                        <Checkbox
                            required
                            color="primary"
                            checked={
                                formFields.termsAndConditions.value === "true"
                                    ? true
                                    : false
                            }
                            onChange={(e) => {
                                handleChange(
                                    "termsAndConditions",
                                    e.target.checked === true ? "true" : "false"
                                );
                            }}
                        />
                    }
                    label="Acepto los terminos y condiciones"
                />
            </RegisterField>
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
                        handleValidations("info");
                        setCheckForms(true);
                    }}
                >
                    Finalizar
                </ButtonPrimary>
            </div>
        </div>
    );
};

export default RegisterDoctorInformation;
