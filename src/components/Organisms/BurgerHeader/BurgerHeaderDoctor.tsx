import { userLogOut } from "@/redux/action-creators/UserActionCreators";
import { useAppDispatch } from "@/redux/hooks";
import Routes from "@/utils/routes/Routes";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type BurgerHeaderDoctorProps = {
    toggleMenu: () => void;
};

const BurgerHeaderDoctor = ({ toggleMenu }: BurgerHeaderDoctorProps) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const linkRoutes = [
        {
            name: "Inicio",
            route: Routes.DOCTOR_HOME,
        },
        {
            name: "Revista tus citas",
            route: Routes.DOCTOR_APPOINTMENTS,
        },
        {
            name: "Mi perfil",
            route: Routes.DOCTOR_PROFILE,
        },
    ];
    return (
        <div className="flex flex-col items-start bg-basic-white animate-open-menu">
            {linkRoutes.map((linkRoute, index) => (
                <Link
                    key={index}
                    href={linkRoute.route}
                    className={`text-base font-semibold pl-5 py-4 bg-basic-white text-brand-700 w-full`}
                >
                    {linkRoute.name}
                </Link>
            ))}
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

export default BurgerHeaderDoctor;
