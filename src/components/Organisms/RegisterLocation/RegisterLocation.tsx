import React from "react";
import RegisterRow from "../RegisterRow/RegisterRow";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import RegisterField from "@/components/Molecules/RegisterField/RegisterField";

const RegisterLocation = () => {
    return (
        <div className="flex flex-row justify-around max-xl:flex-col max-xl:items-center">
            <RegisterRow>
                <RegisterField title="Región">
                    <InputText
                        onChangeFn={() => {}}
                        value=""
                        type="text"
                        placeholder=""
                    />
                </RegisterField>
                <RegisterField title="Provincia">
                    <InputText
                        onChangeFn={() => {}}
                        value=""
                        type="text"
                        placeholder=""
                    />
                </RegisterField>
                <RegisterField title="Distrito">
                    <InputText
                        onChangeFn={() => {}}
                        value=""
                        type="text"
                        placeholder=""
                    />
                </RegisterField>
            </RegisterRow>
            <RegisterRow>
                <RegisterField title="Dirección">
                    <InputText
                        onChangeFn={() => {}}
                        value=""
                        type="text"
                        placeholder=""
                    />
                </RegisterField>
                <RegisterField title="Referencia (Opcional)">
                    <InputText
                        onChangeFn={() => {}}
                        value=""
                        type="text"
                        placeholder=""
                    />
                </RegisterField>
                <RegisterField title="Interior (Dpto, Mz, etc)">
                    <InputText
                        onChangeFn={() => {}}
                        value=""
                        type="text"
                        placeholder=""
                    />
                </RegisterField>
            </RegisterRow>
        </div>
    );
};

export default RegisterLocation;
