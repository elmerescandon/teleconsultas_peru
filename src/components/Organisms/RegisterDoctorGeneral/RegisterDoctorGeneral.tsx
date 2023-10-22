import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import RegisterField from "@/components/Molecules/RegisterField/RegisterField";
import RegisterRow from "../RegisterRow/RegisterRow";
import useRegister from "@/utils/hooks/useRegister";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import { useEffect, useState } from "react";
import { useDoctorRegisterDispatch } from "@/utils/context/RegisterDoctorContext";

type RegisterDoctorGeneralProps = {
    role: string;
    nextFn: () => void;
};

const RegisterDoctorGeneral = ({
    nextFn,
    role,
}: RegisterDoctorGeneralProps) => {
    const { formFields, handleChange, handleValidations, handleRegister } =
        useRegister();
    const [checkForms, setCheckForms] = useState<boolean>(false);
    const dispatch = useDoctorRegisterDispatch();

    useEffect(() => {
        if (checkForms && handleRegister("general")) {
            dispatch({
                type: "SET_GENERAL",
                payload: {
                    name: formFields.name.value,
                    lastname: formFields.lastname.value,
                    email: formFields.email.value,
                    password: formFields.password.value,
                    confirmPassword: formFields.repeatPassword.value,
                    id: formFields.id.value,
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
                        title="Nombre*"
                        error={formFields.name.error}
                    >
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
                        title="Apellido (s)*"
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
                        title="Correo Electrónico*"
                        error={formFields.email.error}
                    >
                        <InputText
                            onChangeFn={(email) => {
                                handleChange("email", email);
                            }}
                            value={formFields.email.value}
                            type="mail"
                            placeholder="Ej. pedro.alva@Salufysalud.com"
                        />
                    </RegisterField>
                </RegisterRow>

                <RegisterRow>
                    <RegisterField
                        title="Documento de Identidad*"
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
                        title="Contraseña*"
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
                        title="Validar Contraseña*"
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
            <p>*Campos obligatorios</p>
            <div className="flex py-5 max-xl:px-10">
                <ButtonPrimary
                    type="button"
                    onClickFn={() => {
                        handleValidations("general");
                        setCheckForms(true);
                    }}
                >
                    Siguiente
                </ButtonPrimary>
            </div>
        </div>
    );
};

export default RegisterDoctorGeneral;
