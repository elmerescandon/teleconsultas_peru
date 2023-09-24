import React, { useEffect, useState } from "react";
import RegisterRow from "../RegisterRow/RegisterRow";
import RegisterField from "@/components/Molecules/RegisterField/RegisterField";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import useRegister from "@/utils/hooks/useRegister";
import InputSelect from "@/components/Atoms/Inputs/InputSelect/InputSelect";
import { sexOptions } from "@/utils/constants/registerSelect";
import { DatePicker } from "@mui/x-date-pickers";
import { useRegisterDispatch } from "@/utils/context/RegisterContext/RegisterContext";
import { Checkbox, FormControlLabel } from "@mui/material";
import { set } from "lodash";

type RegisterInformationProps = {
    nextFn: () => void;
    prevFn: () => void;
};

const RegisterInformation = ({ nextFn, prevFn }: RegisterInformationProps) => {
    const { formFields, handleChange, handleRegister, handleValidations } =
        useRegister();
    const [checkForms, setCheckForms] = useState<boolean>(false);
    const [readyToPost, setReadyToPost] = useState<boolean>(false);
    const dispatch = useRegisterDispatch();

    useEffect(() => {
        if (handleRegister("info") && checkForms) {
            dispatch({
                type: "SET_INFO",
                payload: {
                    age: formFields.age.value,
                    sex: formFields.sex.value,
                    height: formFields.height.value,
                    weight: formFields.weight.value,
                    phone: formFields.phone.value,
                    bornDate: formFields.bornDate.value,
                    termsAndConditions: formFields.termsAndConditions.value,
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
                    <RegisterField title="Edad" error={formFields.age.error}>
                        <InputText
                            onChangeFn={(age) => {
                                handleChange("age", age);
                            }}
                            value={formFields.age.value}
                            type="number"
                            placeholder=""
                        />
                    </RegisterField>

                    <RegisterField title="Sexo" error={formFields.sex.error}>
                        <InputSelect
                            selectId="sexo"
                            onChange={(sex) => {
                                handleChange("sex", sex);
                            }}
                            options={sexOptions}
                            placeholder="Escoge tu sexo"
                        />
                    </RegisterField>

                    <RegisterField
                        title="Fecha de Nacimiento"
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
                        title="Talla (en cm)"
                        error={formFields.height.error}
                    >
                        <InputText
                            onChangeFn={(height) => {
                                handleChange("height", height);
                            }}
                            value={formFields.height.value}
                            type="number"
                            placeholder=""
                        />
                    </RegisterField>

                    <RegisterField
                        title="Peso (en kilogramos)"
                        error={formFields.weight.error}
                    >
                        <InputText
                            onChangeFn={(weight) => {
                                handleChange("weight", weight);
                            }}
                            value={formFields.weight.value}
                            type="text"
                            placeholder=""
                        />
                    </RegisterField>

                    <RegisterField
                        title="Número Telefónico"
                        error={formFields.phone.error}
                    >
                        <InputText
                            onChangeFn={(phone) => {
                                handleChange("phone", phone);
                            }}
                            value={formFields.phone.value}
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

export default RegisterInformation;
