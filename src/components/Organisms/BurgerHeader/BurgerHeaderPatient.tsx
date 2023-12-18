import { userLogOut } from "@/redux/action-creators/UserActionCreators";
import { useAppDispatch } from "@/redux/hooks";
import Routes from "@/utils/routes/Routes";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type BurgerHeaderPatientProps = {
    toggleMenu: () => void;
};

const BurgerHeaderPatient = ({ toggleMenu }: BurgerHeaderPatientProps) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const linkRoutes = [
        {
            name: "Inicio",
            route: Routes.PATIENT_HOME,
        },
        {
            name: "Revisa tu historial",
            route: Routes.PATIENT_HISTORY,
        },
        {
            name: "Reserva una cita",
            route: Routes.RESERVE,
        },
        {
            name: "Calendario",
            route: Routes.PATIENT_APPOINTMENTS,
        },
        {
            name: "Mi perfil",
            route: Routes.PATIENT_PROFILE,
        },
    ];
    return (
        <div className="flex flex-col items-start bg-basic-white animate-open-menu -z-10 relative">
            {linkRoutes.map((linkRoute, index) => {
                const bgColor =
                    linkRoute.name === "Iniciar Sesión" ||
                    linkRoute.name === "Regístrate"
                        ? "bg-brand-700 text-basic-white"
                        : "bg-basic-white text-brand-700";

                return (
                    <Link
                        key={index}
                        href={linkRoute.route}
                        className={`text-base font-semibold pl-5 py-4 ${bgColor}  w-full`}
                    >
                        {linkRoute.name}
                    </Link>
                );
            })}
            <button
                className={`text-base font-semibold pl-5 py-4 bg-brand-700 text-basic-white w-full text-left`}
                onClick={() => {
                    dispatch(userLogOut());
                    signOut({ redirect: false });
                    router.push(Routes.HOME);
                    toggleMenu();
                }}
            >
                Cerrar Sesión
            </button>
        </div>
    );
};

export default BurgerHeaderPatient;
