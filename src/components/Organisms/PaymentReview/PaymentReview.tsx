import PaymentItem from "@/components/Molecules/PaymentItem/PaymentItem";
import { getDoctorName } from "@/firebase/Doctor/getDoctorName";
import { getSpecialityName } from "@/firebase/Speciality/getSpecialityName";
import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import {
    dateToSpanishISO,
    stringToDate,
} from "@/utils/functions/utils";
import { getHourRange } from "@/utils/functions/utilsDate";
import { Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";

type PaymentReviewProps = {
    appointment: IAppointment;
};

const PaymentReview = ({ appointment }: PaymentReviewProps) => {
    const { specialityId, doctorId, date, startDate, endDate } = appointment;
    const [summary, setSummary] = useState<{
        doctorName: string;
        specialityName: string;
    }>({ doctorName: "", specialityName: "" });

    useEffect(() => {
        const getInfoFromDb = async (
            doctorId: string,
            specialityId: string
        ) => {
            if (doctorId === "" || specialityId === "") return;
            const doctor = await getDoctorName(doctorId);
            const speciality = await getSpecialityName(specialityId);

            if (doctor && speciality) {
                setSummary({
                    specialityName: speciality.name,
                    doctorName: `Dr. ${doctor.name} ${doctor.lastName}`,
                });
            } else {
                setSummary({ doctorName: "", specialityName: "" });
            }
        };

        getInfoFromDb(doctorId, specialityId);
    }, [appointment]);

    const getDateString = (date: string | Timestamp) => {

        if (typeof date === "string") {
            if (date === "") return "";
            if (date.includes("T")) return stringToDate(date as unknown as Timestamp);
            return dateToSpanishISO(date);
        } else {
            return stringToDate(date);
        }

    }

    return (
        <div className="w-full px-7 h-full max-lg:w-full max-lg:h-full">
            <div className="text-xl">Detalle</div>
            <div className="w-full border my-5"></div>
            <div>
                <PaymentItem
                    label="Especialidad"
                    name={summary.specialityName}
                />
                <PaymentItem label="Profesional" name={summary.doctorName} />
                <PaymentItem label="Fecha" name={getDateString(date)} />
                <PaymentItem
                    label="Horario"
                    name={startDate && endDate && getHourRange(startDate, endDate) || ""}
                />
            </div>

            <div className="w-full border my-5"></div>
            <div>
                <PaymentItem label="Importe" name="S/.80.00" />
                <PaymentItem label="Descuento" name="s/0.00" />
            </div>
            <div className="w-full border my-5"></div>
            <PaymentItem label="Total" name="S/.80.00" />
            <div className="w-full border border-transparent my-5"></div>
        </div>
    );
};

export default PaymentReview;
