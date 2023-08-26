import React from "react";

type PaymentItemProps = {
    label: string;
    name: string;
};

const PaymentItem = ({ label, name }: PaymentItemProps) => {
    return (
        <div className="flex justify-between py-2">
            <p className="text-neutral-400 text-lg">{`${label}:`}</p>
            <p className="text-basic-black text-lg">{name}</p>
        </div>
    );
};

export default PaymentItem;
