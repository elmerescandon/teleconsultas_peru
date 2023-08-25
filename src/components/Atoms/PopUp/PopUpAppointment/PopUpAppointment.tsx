import IAppointment from "@/utils/Interfaces/reducers/IAppointment";
import React from "react";

type PopUpAppointmentProps = {
    onClose: () => void;
    appointment: IAppointment;
};

const PopUpAppointment = ({ onClose, appointment }: PopUpAppointmentProps) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded">
            <h2 className="text-3xl font-semibold mb-2">
                {appointment.specialty}
            </h2>
            <p>
                Doctor:{" "}
                {`${appointment.doctorLastName} ${appointment.doctorName}`}
            </p>
            <p>
                Patient:{" "}
                {`${appointment.patientLastName} ${appointment.patientName}`}
            </p>
            <p>Date: {`${appointment.startDate.toDateString()}`}</p>
            <p>
                Schedule:{" "}
                {`${appointment.startDate.getHours()} - ${appointment.endDate.getHours()}`}
            </p>

            <button className="text-blue-500 hover:underline" onClick={onClose}>
                Close
            </button>
        </div>
    </div>
);

export default PopUpAppointment;
