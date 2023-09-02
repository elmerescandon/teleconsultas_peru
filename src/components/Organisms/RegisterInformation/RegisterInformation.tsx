import React, { useEffect, useState } from "react";
import RegisterRow from "../RegisterRow/RegisterRow";
import RegisterField from "@/components/Molecules/RegisterField/RegisterField";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import useRegister from "@/utils/hooks/useRegister";

type RegisterInformationProps = {
    nextFn: () => void;
    prevFn: () => void;
};

const RegisterInformation = ({ nextFn, prevFn }: RegisterInformationProps) => {
    const { formFields, handleChange, handleRegister, handleValidations } =
        useRegister();
    const [checkForms, setCheckForms] = useState<boolean>(false);

    useEffect(() => {
        if (checkForms && handleRegister("info")) {
            nextFn();
        } else {
            setCheckForms(false);
        }
    }, [formFields]);

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
                        <InputText
                            onChangeFn={(sex) => {
                                handleChange("sex", sex);
                            }}
                            value={formFields.sex.value}
                            type="text"
                            placeholder=""
                        />
                    </RegisterField>

                    <RegisterField
                        title="Fecha de Nacimiento"
                        error={formFields.bornDate.error}
                    >
                        <InputText
                            onChangeFn={(bornDate) => {
                                handleChange("bornDate", bornDate);
                            }}
                            value={formFields.bornDate.value}
                            type="text"
                            placeholder="Día/Mes/Año"
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
