import { CreditCardIcon } from "@heroicons/react/24/outline";
import React from "react";
type PaymentCardProps = {
    cardType: string;
    lastDigits: string;
    index: number;
    indexSelected: number;
    onClickPayment: (index: number) => void;
};

const PaymentCard = ({
    cardType,
    lastDigits,
    index,
    indexSelected,
    onClickPayment,
}: PaymentCardProps) => {
    return (
        <button
            className={`flex items-center justify-around bg-brand-50 py-3 rounded-2xl border-2 ${
                index === indexSelected
                    ? "border-basic-black"
                    : "border-transparent"
            } `}
            onClick={() => {
                onClickPayment(index);
            }}
        >
            <CreditCardIcon
                className="w-10 h-10 text-basic-black
                                        max-xl:w-5 max-xl:h-5"
            />
            <div
                className="text-xl font-normal text-basic-black
                            max-xl:text-base max-xl:font-semibold"
            >
                {cardType}
            </div>
            <div
                className="text-xl font-normal text-basic-black
                            max-xl:text-base"
            >
                {lastDigits}
            </div>
        </button>
    );
};

export default PaymentCard;
