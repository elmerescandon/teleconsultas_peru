import React, { useEffect } from "react";
import RegisterRow from "../RegisterRow/RegisterRow";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import RegisterField from "@/components/Molecules/RegisterField/RegisterField";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import useRegister from "@/utils/hooks/useRegister";

type RegisterLocationProps = {
    prevFn: () => void;
    nextFn: () => void;
};

const RegisterLocation = ({ prevFn, nextFn }: RegisterLocationProps) => {
    const { formFields, handleChange, handleRegister } = useRegister();

    useEffect(() => {
        console.log(formFields);
    }, [formFields]);

    return (
        <div>
            <div className="flex flex-row justify-around max-xl:flex-col max-xl:items-center gap-10 max-xl:gap-0 max-xl:px-10">
                <RegisterRow>
                    <RegisterField
                        title="Región"
                        error={formFields.region.error}
                    >
                        <InputText
                            onChangeFn={(region) => {
                                handleChange("region", region);
                            }}
                            value={formFields.region.value}
                            type="text"
                            placeholder=""
                        />
                    </RegisterField>
                    <RegisterField
                        title="Provincia"
                        error={formFields.province.error}
                    >
                        <InputText
                            onChangeFn={(province) => {
                                handleChange("province", province);
                            }}
                            value={formFields.province.value}
                            type="text"
                            placeholder=""
                        />
                    </RegisterField>
                    <RegisterField
                        title="Distrito"
                        error={formFields.district.error}
                    >
                        <InputText
                            onChangeFn={(district) => {
                                handleChange("district", district);
                            }}
                            value={formFields.district.value}
                            type="text"
                            placeholder=""
                        />
                    </RegisterField>
                </RegisterRow>
                <RegisterRow>
                    <RegisterField
                        title="Dirección"
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
                        title="Referencia"
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
                        title="Interior (Dpto, Mz, etc)"
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
                        if (handleRegister("location")) {
                            console.log("se logró");
                            nextFn();
                        }
                    }}
                >
                    Siguiente
                </ButtonPrimary>
            </div>
        </div>
    );
};

export default RegisterLocation;
