import React from "react";
import RegisterRow from "../RegisterRow/RegisterRow";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import RegisterField from "@/components/Molecules/RegisterField/RegisterField";

const RegisterLocation = () => {
    return (
        <div className="flex flex-row justify-around max-xl:flex-col max-xl:items-center">
            <RegisterRow>
                <RegisterField title="Región">
                    <InputText type="text" placeholder="" />
                </RegisterField>
                <RegisterField title="Provincia">
                    <InputText type="text" placeholder="" />
                </RegisterField>
                <RegisterField title="Distrito">
                    <InputText type="text" placeholder="" />
                </RegisterField>
            </RegisterRow>
            <RegisterRow>
                <RegisterField title="Dirección">
                    <InputText type="text" placeholder="" />
                </RegisterField>
                <RegisterField title="Referencia (Opcional)">
                    <InputText type="text" placeholder="" />
                </RegisterField>
                <RegisterField title="Interior (Dpto, Mz, etc)">
                    <InputText type="text" placeholder="" />
                </RegisterField>
            </RegisterRow>
        </div>
    );
};

export default RegisterLocation;
