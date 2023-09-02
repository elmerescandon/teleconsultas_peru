import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import RegisterField from "@/components/Molecules/RegisterField/RegisterField";
import React, { useEffect, useState } from "react";
import RegisterRow from "../RegisterRow/RegisterRow";
import useRegister from "@/utils/hooks/useRegister";
import { useRegisterDispatch } from "@/utils/context/RegisterContext/RegisterContext";

const RegisterGeneral = () => {
    // TODO: Make it responsive
    // TODO: Add validation functions
    // TODO: Add error messages

    const { formFields, handleChange } = useRegister();

    const dispatch = useRegisterDispatch();

    useEffect(() => {
        console.log(formFields);
    }, [formFields]);

    return (
        <div className="flex flex-row justify-around max-xl:flex-col max-xl:items-center">
            <RegisterRow>
                <RegisterField title="Nombre" error={formFields.name.error}>
                    <InputText
                        onChangeFn={(name) => {
                            handleChange("name", name);
                        }}
                        value={formFields.name.value}
                        type="text"
                        placeholder="Ej. Pedro Alberto"
                    />
                </RegisterField>

                <RegisterField
                    title="Apellido (s)"
                    error={formFields.lastname.error}
                >
                    <InputText
                        onChangeFn={(lastname) => {
                            handleChange("lastname", lastname);
                        }}
                        value={formFields.lastname.value}
                        type="text"
                        placeholder="Ej. Álvarez Rodriguez "
                    />
                </RegisterField>

                <RegisterField
                    title="Correo Electrónico"
                    error={formFields.email.error}
                >
                    <InputText
                        onChangeFn={(email) => {
                            handleChange("email", email);
                        }}
                        value={formFields.email.value}
                        type="mail"
                        placeholder="Ej. pedro.alva@aikasalud.com"
                    />
                </RegisterField>
            </RegisterRow>

            <RegisterRow>
                <RegisterField
                    title="Documento de Identidad"
                    error={formFields.id.error}
                >
                    <InputText
                        onChangeFn={(id) => {
                            handleChange("id", id);
                        }}
                        value={formFields.id.value}
                        type="number"
                        placeholder="Ej. 4589812"
                    />
                </RegisterField>

                <RegisterField
                    title="Contraseña"
                    error={formFields.password.error}
                >
                    <InputText
                        onChangeFn={(pass) => {
                            handleChange("password", pass);
                        }}
                        value={formFields.password.value}
                        type="password"
                        placeholder="8 caractéres, una mayúscula y números"
                    />
                </RegisterField>

                <RegisterField
                    title="Validar Contraseña"
                    error={formFields.repeatPassword.error}
                >
                    <InputText
                        onChangeFn={(repeat) => {
                            handleChange("repeatPassword", repeat);
                        }}
                        value={formFields.repeatPassword.value}
                        type="password"
                        placeholder=""
                    />
                </RegisterField>
            </RegisterRow>
        </div>
    );
};

export default RegisterGeneral;
