import { BanknotesIcon } from "@heroicons/react/24/outline";
import React from "react";
type PaymentCardProps = {
    cardType: string;
    lastDigits: string;
};

const PaymentCard = ({ cardType, lastDigits }: PaymentCardProps) => {
    return (
        <div className="flex items-center justify-around bg-brand-50 py-3 rounded-2xl">
            <BanknotesIcon className="w-10 h-10 text-basic-black" />
            <div className="text-xl font-normal text-basic-black">
                {cardType}
            </div>
            <div className="text-xl font-normal text-basic-black">
                **** {lastDigits}
            </div>
        </div>
    );
};

export default PaymentCard;
