import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

import React, { useEffect } from "react";

const MercadoPagoPayment = () => {
    useEffect(() => {
        initMercadoPago("TEST-ebc14502-8889-4ddb-b4ff-1d6cd21ec1f1");
    }, []);

    return <Wallet initialization={{ preferenceId: "1234" }} />;
};

export default MercadoPagoPayment;
