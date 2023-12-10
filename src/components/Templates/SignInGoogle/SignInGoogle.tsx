"use client";

import LoadingFullPage from "@/components/Molecules/Loaders/LoadingFullPage/LoadingFullPage";
import { getUserId } from "@/firebase/User/getUserId";
import { isUserValidMail } from "@/firebase/User/isUserValidMail";
import Routes from "@/utils/routes/Routes";
import { signOut, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const SignInGoogle = () => {
    const { data: session, status, update } = useSession();
    const searchParams = useSearchParams();
    const role = searchParams.get("role");
    const router = useRouter();

    const RouteHome =
        role === "patient" ? Routes.PATIENT_HOME : Routes.DOCTOR_HOME;
    const RouteLogin =
        role === "patient" ? Routes.LOGIN_PATIENT : Routes.LOGIN_DOCTOR;

    useEffect(() => {
        const updateSession = async (id: string) => {
            console.log("updateSession");
            console.log(id);
            await update({
                ...session,
                user: {
                    ...session?.user,
                    name: id,
                },
            });
        };

        const validateUser = async (email: string, role: string) => {
            const isValid = await isUserValidMail(email, role);
            console.log(email);
            if (isValid) {
                const id = await getUserId(email, role);
                if (id !== null) {
                    await updateSession(id);
                    router.push(RouteHome);
                }
            } else {
                signOut({
                    callbackUrl: `${RouteLogin}?signin=failed?email=${email}`,
                });
            }
        };

        if (status === "authenticated") {
            if (session?.user?.email && role) {
                validateUser(session.user.email, role);
            } else {
                signOut({
                    callbackUrl: `${RouteLogin}?signin=failed?email=${session?.user?.email}`,
                });
            }
        }
    }, [status]);

    return <LoadingFullPage />;
};

export default SignInGoogle;
