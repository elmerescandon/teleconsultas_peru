import PaymentAddOption from "@/components/Molecules/PaymentAddOption/PaymentAddOption";
import PaymentCard from "@/components/Molecules/PaymentCard/PaymentCard";
import React from "react";

const PaymentOptions = () => {
    const [indexSelected, setIndexSelected] = React.useState(0);

    const cardOptions = [
        {
            cardType: "Open Pay",
            lastDigits: "BBVA",
        },
    ];

    return (
        <div
            className="w-1/3 rounded-2xl bg-brand-600 text-basic-white p-7 h-[60vh] 
                        max-xl:h-full max-xl:w-full"
        >
            <div
                className="text-xl font-normal
                            max-xl:text-lg max-xl:font-semibold"
            >
                Medios de Pago Disponibles
            </div>
            <div className="py-5 flex flex-col gap-5">
                {cardOptions.map((card, index) => (
                    <PaymentCard
                        key={index}
                        indexSelected={indexSelected}
                        index={index}
                        cardType={card.cardType}
                        lastDigits={card.lastDigits}
                        onClickPayment={(index) => {
                            setIndexSelected(index);
                        }}
                    />
                ))}
            </div>
            {/* <PaymentAddOption /> */}
        </div>
    );
};

export default PaymentOptions;
