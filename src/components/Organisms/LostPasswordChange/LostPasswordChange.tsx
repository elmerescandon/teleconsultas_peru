import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import LoadingHorizontal from "@/components/Molecules/Loaders/LoadingHorizontal/LoadingHorizontal";
import deactivateLostPassword from "@/firebase/Password/deactivateLostPassword";
import updateUserField from "@/firebase/User/updateUserField";
import { set } from "lodash";
import React, { useState } from "react";

type LostPasswordChangeProps = {
    id: string;
    code: string;
};

const LostPasswordChange = ({ id, code }: LostPasswordChangeProps) => {
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [correct, setCorrect] = useState(false);

    const changePassword = async () => {
        setLoading(true);
        if (password !== passwordConfirm) {
            setError("Las contraseñas no coinciden");
            return;
        }
        setError("");
        try {
            if (code === "")
                return setError("No se ha ingresado un código de seguridad");

            if (id === "") return setError("No se ha ingresado un id");

            let numberCode = parseInt(code);
            if (isNaN(numberCode))
                return setError("El código de seguridad no es válido");

            await updateUserField(id, "password", password);
            await deactivateLostPassword(numberCode, id);
            setCorrect(true);
            setLoading(false);
        } catch (e) {
            setError((e as Error).message);
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="text-center">
                <h1 className="text-brand-900 font-semibold text-3xl">
                    Ingresa una nueva contraseña
                </h1>
                <h3 className="text-basic-black font-normal text-xl">
                    Recupera tu cuenta ingresando una nueva contraseña.
                </h3>
            </div>
            <InputText
                type="password"
                placeholder="Contraseña"
                onChangeFn={setPassword}
                value={password}
            />
            <InputText
                type="password"
                placeholder="Confirmar contraseña"
                onChangeFn={setPasswordConfirm}
                value={passwordConfirm}
            />
            <div className="w-full">
                <ButtonPrimary onClickFn={changePassword}>
                    Cambiar contraseña
                </ButtonPrimary>
                {loading && <LoadingHorizontal />}
            </div>

            {error && (
                <p className="text-red-500 font-semibold py-2">{error}</p>
            )}
            {correct && (
                <p className="text-green-500 font-semibold py-2">
                    Se ha cambiado la contraseña satisfactoriamente.
                </p>
            )}
        </div>
    );
};

export default LostPasswordChange;
