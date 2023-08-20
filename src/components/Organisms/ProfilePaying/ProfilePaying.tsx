import { BanknotesIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const ProfilePaying = () => {
    return (
        <div className="h-1/3 flex flex-col gap-4">
            <div className="text-xl font-semibold">Métodos de pago</div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between p-5">
                    <BanknotesIcon className="h-10 w-10 text-basic-black" />
                    <div>CREDITO VISA</div>
                    <div>RODRIGUEZ, AVLARO</div>
                    <div>***5879</div>
                </div>
                <button className="flex justify-start px-5 items-center gap-3">
                    <PlusCircleIcon className="h-6 w-6 text-basic-black" />
                    <span className="text-basic-black text-xl">
                        Agregar método de pago
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ProfilePaying;
