import Image from "next/image";
import React from "react";

const LoadingFullPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
                <svg
                    className="animate-spin h-10 w-10 text-brand-600 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20c3.042 0 5.824-1.135 7.938-3l-2.647-3A7.962 7.962 0 0112 16v4zm5.291-7.291A7.962 7.962 0 0112 20v4c4.418 0 8-3.582 8-8h-4a7.963 7.963 0 01-3.709-1.709z"
                    ></path>
                </svg>
                <Image
                    className="pt-5"
                    src="/LOGO_SALUFY.png"
                    width={100}
                    height={200}
                    alt="logo-loader"
                />
                <p className="text-brand-700 text-2xl pt-5 w-96 text-center">
                    Brindándote el mejor servicio, por favor espera...
                </p>
            </div>
        </div>
    );
};

export default LoadingFullPage;
