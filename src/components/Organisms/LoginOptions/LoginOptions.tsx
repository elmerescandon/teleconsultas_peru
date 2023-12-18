"use client";
import GoogleColoredIcon from "@/components/Atoms/Icons/GoogleColoredIcon";
import React from "react";
// import AppleColoredIcon from "@/components/Atoms/Icons/AppleColoredIcon";
// import FacebookColoredIcon from "@/components/Atoms/Icons/FacebookColoredIcon";
// import OutlookColoredIcon from "@/components/Atoms/Icons/OutlookColoredIcon";
import { signIn } from "next-auth/react";
import Routes from "@/utils/routes/Routes";

type LoginOptionsProps = {
    role: string;
};

const LoginOptions = ({ role }: LoginOptionsProps) => {
    return (
        <div>
            <div className="flex items-center py-4">
                <div className="flex-grow h-px bg-neutral-500"></div>
                <span className="flex-shrink text-2xl text-neutral-500 px-4 font-light">
                    O
                </span>
                <div className="flex-grow h-px bg-neutral-400"></div>
            </div>
            <div className="flex gap-10 justify-center">
                <button
                    className="flex items-center gap-5 bg-neutral-100 text-neutral-500 px-4 py-2 rounded-md w-full justify-center
                                active:bg-neutral-200 active:text-neutral-600 active:scale-95 transition-all duration-100"
                    onClick={() =>
                        signIn("google", {
                            callbackUrl: `${Routes.LOGIN_GOOGLE}?role=${role}`,
                        })
                    }
                >
                    <p>Iniciar Sesión con Google</p>
                    <GoogleColoredIcon />
                </button>
                {/* <button>
                    <AppleColoredIcon />
                </button>
                <button>
                    <FacebookColoredIcon />
                </button>
                <button>
                    <OutlookColoredIcon />
                </button> */}
            </div>
        </div>
    );
};

export default LoginOptions;
