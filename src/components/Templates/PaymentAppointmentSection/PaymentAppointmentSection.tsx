import PaymentOptions from "@/components/Organisms/PaymentOptions/PaymentOptions";
import PaymentReview from "@/components/Organisms/PaymentReview/PaymentReview";
import React from "react";

const PaymentAppointmentSection = () => {
    return (
        <div className="h-[75vh] max-lg:h-full max-lg:pt-36 px-48 max-lg:px-10">
            <div className="text-2xl font-semibold py-5">
                Realiza el pago de tu cita
            </div>
            <div className="flex justify-center items-center pt-5 pb-10 gap-10 max-lg:flex-col">
                <PaymentOptions />
                <PaymentReview />
            </div>
        </div>
    );
};

export default PaymentAppointmentSection;
