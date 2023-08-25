import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const PaymentAddOption = () => {
    return (
        <button className="flex items-center gap-5 justify-center w-full">
            <PlusCircleIcon className="w-8 h-8 text-brand-50" />
            <div className="text-xl">Agrega un método</div>
        </button>
    );
};

export default PaymentAddOption;
