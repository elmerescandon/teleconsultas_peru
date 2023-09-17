import DoctorAppointmentHistory from "@/components/Organisms/DoctorAppointmentHistory/DoctorAppointmentHistory";
import Footer from "@/components/Organisms/Footer/Footer";
import Header from "@/components/Organisms/Header/Header";
import AppointmentsMockup from "@/utils/mockups/AppointmentsMockup";
import React from "react";

const page = ({
    params,
}: {
    params: { patientId: string; appointmentId: string };
}) => {
    const { patientId, appointmentId } = params;

    const appointment = AppointmentsMockup.find((appointment) => {
        return appointment._id === appointmentId;
    });

    return (
        <div>
            <Header />
            <div className="px-48 max-xl:px-5 max-xl:pt-28 pb-28 min-h-[90vh]">
                {appointment ? (
                    <DoctorAppointmentHistory appointment={appointment} />
                ) : (
                    <p>Appointment not found</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default page;
