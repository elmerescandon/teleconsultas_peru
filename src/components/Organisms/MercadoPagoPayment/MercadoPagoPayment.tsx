"use client";
import Loading from "@/components/Molecules/Loaders/Loading/Loading";
import IPreference from "@/utils/Interfaces/API/MercadoPago/IPreference";
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import { IWalletBrickCustomization } from "@mercadopago/sdk-react/bricks/wallet/types";
import React, { useEffect, useState } from "react";

const customization: IWalletBrickCustomization = {
    visual: {
        buttonBackground: "black",
        valuePropColor: "white",
    },
};

if (process.env.NEXT_PUBLIC_MERCADO_PAGO_KEY) {
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_KEY);
}

type MercadoPagoPaymentProps = {
    appointmentId: string;
};

const MercadoPagoPayment = ({ appointmentId }: MercadoPagoPaymentProps) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const onSumbit = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_MYPAGE_URL}/api/checkout/create_payment?appId=${appointmentId}`
            );
            const data: IPreference = await res.json();
            if (data.init_point) {
                return data.id;
            }
            throw new Error("No se pudo obtener el link de pago");
        } catch (err) {
            setError((err as Error).message);
        }
    };

    return (
        <div className="w-full">
            {(loading || appointmentId === "") && <Loading />}
            {appointmentId !== "" && (
                <Wallet
                    locale="es-PE"
                    onSubmit={onSumbit}
                    customization={customization}
                    onReady={() => setLoading(false)}
                />
            )}
        </div>
    );
};

export default MercadoPagoPayment;
