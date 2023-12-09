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
                    O continúa con
                </span>
                <div className="flex-grow h-px bg-neutral-400"></div>
            </div>
            <div className="flex gap-10 justify-center">
                <button
                    onClick={() =>
                        signIn("google", {
                            callbackUrl: `${Routes.LOGIN_GOOGLE}?role=${role}`,
                        })
                    }
                >
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
