import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import PaymentItem from "@/components/Molecules/PaymentItem/PaymentItem";
import { useAppointment } from "@/utils/context/AppointmentContext/AppointmentContext";
import React from "react";

const PaymentReview = () => {
    const appointment = useAppointment();
    const { specialityId, doctorId, date, startDate, endDate } = appointment;
    return (
        <div className="w-2/3 p-7 h-[60vh]">
            <div className="text-xl">Detalle</div>
            <div className="w-full border my-5"></div>
            <div>
                <PaymentItem label="Especialidad" name={specialityId} />
                <PaymentItem label="Profesional" name={doctorId} />
                <PaymentItem label="Fecha" name={date} />
                <PaymentItem label="Horario" name={startDate} />
            </div>

            <div className="w-full border my-5"></div>
            <div>
                <PaymentItem label="Importe" name="S/.80.00" />
                <PaymentItem label="Descuento" name="s/0.00" />
            </div>
            <div className="w-full border my-5"></div>
            <PaymentItem label="Total" name="S/.80.00" />
            <div className="w-full border border-transparent my-5"></div>
            <ButtonPrimary onClickFn={() => {}}>Realizar Pago</ButtonPrimary>
        </div>
    );
};

export default PaymentReview;
