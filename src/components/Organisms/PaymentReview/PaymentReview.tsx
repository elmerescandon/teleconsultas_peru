import ButtonPrimary from "@/components/Atoms/Buttons/ButtonPrimary/ButtonPrimary";
import PaymentItem from "@/components/Molecules/PaymentItem/PaymentItem";
import { getDoctorName } from "@/firebase/Doctor/getDoctorName";
import { getSpecialityName } from "@/firebase/Speciality/getSpecialityName";
import { useAppointment } from "@/utils/context/AppointmentContext/AppointmentContext";
import { getAppointmentHours, stringToDate } from "@/utils/functions/utils";
import Routes from "@/utils/routes/Routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PaymentReview = () => {
    const router = useRouter();
    const appointment = useAppointment();
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
            console.log(doctorId);
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
    }, []);

    return (
        <div className="w-2/3 p-7 h-[60vh] max-lg:w-full max-lg:h-full">
            <div className="text-xl">Detalle</div>
            <div className="w-full border my-5"></div>
            <div>
                <PaymentItem
                    label="Especialidad"
                    name={summary.specialityName}
                />
                <PaymentItem label="Profesional" name={summary.doctorName} />
                <PaymentItem label="Fecha" name={stringToDate(date)} />
                <PaymentItem
                    label="Horario"
                    name={getAppointmentHours(startDate, endDate)}
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
            <ButtonPrimary
                onClickFn={() => {
                    router.push(Routes.RESERVE_SUCCESS);
                }}
            >
                Realizar Pago
            </ButtonPrimary>
        </div>
    );
};

export default PaymentReview;
