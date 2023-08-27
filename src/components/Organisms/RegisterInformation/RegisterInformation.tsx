import React from "react";
import RegisterRow from "../RegisterRow/RegisterRow";
import RegisterField from "@/components/Molecules/RegisterField/RegisterField";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";

const RegisterInformation = () => {
    return (
        <div className="flex flex-row justify-around max-xl:flex-col max-xl:items-center">
            <RegisterRow>
                <RegisterField title="Edad">
                    <InputText
                        onChangeFn={() => {}}
                        value=""
                        type="number"
                        placeholder=""
                    />
                </RegisterField>

                <RegisterField title="Sexo">
                    <InputText
                        onChangeFn={() => {}}
                        value=""
                        type="text"
                        placeholder=""
                    />
                </RegisterField>

                <RegisterField title="Fecha de Nacimiento">
                    <InputText
                        onChangeFn={() => {}}
                        value=""
                        type="text"
                        placeholder="Día/Mes/Año"
                    />
                </RegisterField>
            </RegisterRow>

            <RegisterRow>
                <RegisterField title="Talla (en cm)">
                    <InputText
                        onChangeFn={() => {}}
                        value=""
                        type="number"
                        placeholder=""
                    />
                </RegisterField>

                <RegisterField title="Peso (en kilogramos)">
                    <InputText
                        onChangeFn={() => {}}
                        value=""
                        type="text"
                        placeholder=""
                    />
                </RegisterField>

                <RegisterField title="Número Telefónico">
                    <InputText
                        onChangeFn={() => {}}
                        value=""
                        type="text"
                        placeholder="(+51) xxx-xxx-xxx"
                    />
                </RegisterField>
            </RegisterRow>
        </div>
    );
};

export default RegisterInformation;
