import ButtonThird from "@/components/Atoms/Buttons/ButtonThird/ButtonThird";
import React from "react";

type PaymentLaterProps = {
  payLater: () => Promise<void>;
};

const PaymentLater = ({payLater}: PaymentLaterProps) => {
  return (
    <div>
      <ButtonThird onClickFn={payLater}>
        Ahora no, deseo pagar más tarde.
      </ButtonThird>
      <p className="text-sm text-gray-500">
        * Recuerda que tienes hasta 48 horas antes de tu cita para realizar el
        pago o se cancelará de forma automática.
      </p>
    </div>
  );
};

export default PaymentLater;
