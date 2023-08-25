import PaymentAddOption from "@/components/Molecules/PaymentAddOption/PaymentAddOption";
import PaymentCard from "@/components/Molecules/PaymentCard/PaymentCard";
import React from "react";

const PaymentOptions = () => {
    const cardOptions = [
        {
            cardType: "VISA",
            lastDigits: "1234",
        },
        {
            cardType: "AMEX",
            lastDigits: "1534",
        },
    ];

    return (
        <div className="w-1/3 rounded-2xl bg-brand-600 text-basic-white p-7 h-[60vh] max-xl:h-full max-xl:w-full">
            <div className="text-xl font-normal">Medios de Pago</div>
            <div className="py-5 flex flex-col gap-5">
                {cardOptions.map((card, index) => (
                    <PaymentCard
                        key={index}
                        cardType={card.cardType}
                        lastDigits={card.lastDigits}
                    />
                ))}
            </div>
            <PaymentAddOption />
        </div>
    );
};

export default PaymentOptions;
