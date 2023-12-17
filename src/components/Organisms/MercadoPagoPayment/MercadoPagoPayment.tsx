"use client";
import IPreference from "@/utils/Interfaces/API/MercadoPago/IPreference";
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import { reject } from "lodash";
import React, { useEffect, useState } from "react";

const MercadoPagoPayment = () => {
    const onSumbit = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_MYPAGE_URL}/api/checkout`
            );
            const data: IPreference = await res.json();
            if (data.init_point) {
                return data.id;
            }
            throw new Error("No se pudo obtener el link de pago");
        } catch (err) {
            reject(err as Error);
        }
    };

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_MERCADO_PAGO_KEY) {
            initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_KEY);
        }
    }, []);

    return (
        <div>
            <Wallet locale="es-PE" onSubmit={onSumbit} />
        </div>
    );
};

export default MercadoPagoPayment;
