import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import { validatePasswordCode } from "@/firebase/Password/validatePasswordCode";
import React, { useState } from "react";

type LostPasswordCodeProps = {
    code: string;
    setCode: (code: string) => void;
    beginPasswordUpdate: (id: string) => void;
};

const LostPasswordCode = ({
    code,
    setCode,
    beginPasswordUpdate,
}: LostPasswordCodeProps) => {
    const [openCode, setOpenCode] = useState(false);
    const [error, setError] = useState("");

    const openCodeSegment = () => {
        setOpenCode(true);
    };

    const verifyCode = async () => {
        setError("");
        const codeRegex = /^\d{6}$/; // Regular expression to match 6 digits
        const isValid = codeRegex.test(code);
        if (!code || code.length !== 6 || !isValid) {
            setError("El código debe tener 6 dígitos");
            return;
        }

        try {
            let codeNumber = parseInt(code);
            const codeInfo = await validatePasswordCode(codeNumber);
            beginPasswordUpdate(codeInfo.id);
        } catch (e) {
            setError((e as Error).message);
            return;
        }
    };

    return (
        <div className="w-full">
            {!openCode && (
                <button
                    onClick={openCodeSegment}
                    className="text-brand-600 font-semibold"
                >
                    Deseo ingresar el código de verificación
                </button>
            )}
            {openCode && (
                <div className="flex justify-start w-full gap-3 my-5 p-5 shadow-lg bg-slate-100 rounded-lg max-xl:flex-col">
                    <InputText
                        placeholder="Código de verificación"
                        onChangeFn={(code: string) => {
                            setCode(code);
                        }}
                        value={code}
                    />

                    <ButtonPrimary onClickFn={verifyCode}>
                        Verificar código
                    </ButtonPrimary>
                    {error && (
                        <p className="text-red-500 font-semibold py-2">
                            {error}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default LostPasswordCode;
