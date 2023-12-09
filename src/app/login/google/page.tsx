"use client";
import LoadingFullPage from "@/components/Molecules/Loaders/LoadingFullPage/LoadingFullPage";
import { isUserValidMail } from "@/firebase/User/isUserValidMail";
import Routes from "@/utils/routes/Routes";
import { ca } from "date-fns/locale";
import { signOut, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const page = () => {
    const { data: session, status } = useSession();
    const searchParams = useSearchParams();
    const role = searchParams.get("role");
    const router = useRouter();

    const RouteHome =
        role === "patient" ? Routes.PATIENT_HOME : Routes.DOCTOR_HOME;
    const RouteLogin =
        role === "patient" ? Routes.LOGIN_PATIENT : Routes.LOGIN_DOCTOR;

    useEffect(() => {
        const validateUser = async (email: string, role: string) => {
            const isValid = await isUserValidMail(email, role);
            if (isValid) {
                router.push(RouteHome);
            } else {
                signOut({ callbackUrl: `${RouteLogin}?signin=failed` });
            }
        };

        if (status === "authenticated" && session?.user?.email && role) {
            validateUser(session.user.email, role);
        } else {
            signOut({ callbackUrl: `${RouteLogin}?signin=failed` });
        }
    }, [status]);

    return <LoadingFullPage />;
};

export default page;
