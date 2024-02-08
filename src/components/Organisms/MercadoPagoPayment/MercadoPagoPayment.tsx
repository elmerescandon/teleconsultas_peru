"use client";
import Loading from "@/components/Molecules/Loaders/Loading/Loading";
import createNewAppointment from "@/firebase/Appointments/createNewAppointment";
import IPreference from "@/utils/Interfaces/API/MercadoPago/IPreference";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import { validateAppointment } from "@/utils/functions/utils";
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import { IWalletBrickCustomization } from "@mercadopago/sdk-react/bricks/wallet/types";
import React, { useState } from "react";

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
    appointmentExisted: boolean;
    appointment: IAppointment;
};

const MercadoPagoPayment = ({ appointmentExisted, appointment }: MercadoPagoPaymentProps) => {
    const { _id } = appointment;
    const [loading, setLoading] = useState<boolean>(true);
    const onSumbit = async () => {
        try {
            if (_id === "") throw new Error("No se pudo obtener el id de la cita");
            if (validateAppointment(appointment) && !appointmentExisted) {
                await createNewAppointment(appointment);
            }

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_MYPAGE_URL}/api/checkout/create_payment?appId=${_id}`
            );
            const data: IPreference = await res.json();
            if (data.init_point) {
                return data.id;
            }
            throw new Error("No se pudo obtener el link de pago");
        } catch (err) {
        }
    };

    return (
        <div className="w-full">
            {(loading || _id === "") && <Loading />}
            {_id !== "" && (
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
