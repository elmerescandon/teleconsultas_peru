"use client";
import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import InputText from "@/components/Atoms/Inputs/InputText/InputText";
import useUserValidation from "@/utils/hooks/useUserValidation";
import { useRouter } from "next/navigation";
import Loading from "@/components/Molecules/Loading/Loading";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Routes from "@/utils/routes/Routes";
import { getUser } from "@/firebase/User/getUser";
import IUser from "@/utils/Interfaces/dataModel/IUser";
import { dbToUser } from "@/utils/functions/utilsReducer";
import { useAppDispatch } from "@/redux/hooks";
import { userLogIn } from "@/redux/action-creators/UserActionCreators";

const LoginForms = () => {
    const {
        username,
        setUsername,
        password,
        setPassword,
        error,
        loading,
        handleSubmit,
    } = useUserValidation();

    const router = useRouter();
    const dispatch = useAppDispatch();
    const { data: session, status } = useSession();

    useEffect(() => {
        const getUserInfo = async (email: string) => {
            const userDb = (await getUser(email)) as IUser;
            const user = dbToUser(userDb);
            dispatch(userLogIn(user));
        };

        if (status === "authenticated") {
            getUserInfo(session.user!.email!);
            router.push(Routes.PATIENT_HOME);
        }
    }, [status]);

    return (
        <div className="flex flex-col items-center gap-6">
            <InputText
                placeholder="Correo electrónico"
                value={username}
                onChangeFn={setUsername}
            />
            <InputText
                type="password"
                placeholder="Contraseña"
                value={password}
                onChangeFn={setPassword}
            />
            <div className="flex flex-col justify-start gap-10 items-center w-full">
                <ButtonPrimary onClickFn={handleSubmit}>
                    Iniciar Sesión
                </ButtonPrimary>
                {loading && <Loading />}
            </div>

            {error && <p className="text-rose-600 font-bold">{error}</p>}
        </div>
    );
};

export default LoginForms;
