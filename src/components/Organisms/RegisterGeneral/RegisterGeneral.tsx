import Register from "@/app/register/page";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import RegisterField from "@/components/Molecules/RegisterField/RegisterField";
import React from "react";
import RegisterRow from "../RegisterRow/RegisterRow";

const RegisterGeneral = () => {
    return (
        <div className="flex flex-row justify-around max-xl:flex-col max-xl:items-center">
            <RegisterRow>
                <RegisterField title="Nombre">
                    <InputText type="text" placeholder="Ej. Pedro Alberto" />
                </RegisterField>

                <RegisterField title="Apellido (s)">
                    <InputText
                        type="text"
                        placeholder="Ej. Álvarez Rodriguez "
                    />
                </RegisterField>

                <RegisterField title="Correo Electrónico">
                    <InputText
                        type="mail"
                        placeholder="Ej. pedro.alva@aikasalud.com"
                    />
                </RegisterField>
            </RegisterRow>

            <RegisterRow>
                <RegisterField title="Documento de Identidad">
                    <InputText type="number" placeholder="Ej. 4589812" />
                </RegisterField>

                <RegisterField title="Contraseña">
                    <InputText
                        type="password"
                        placeholder="Ej. Almenos 8 caractéres, una mayúscula y números"
                    />
                </RegisterField>

                <RegisterField title="Validar Contraseña">
                    <InputText
                        type="password"
                        placeholder="Ej. pedro.alva@aikasalud.com"
                    />
                </RegisterField>
            </RegisterRow>
        </div>
    );
};

export default RegisterGeneral;