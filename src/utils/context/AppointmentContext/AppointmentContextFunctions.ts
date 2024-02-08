import { useAppointmentDispatch } from "./AppointmentContext"

const dispatch = useAppointmentDispatch();

export const appointmentNewId = (id: string) => {
    dispatch({ type: "SET_ID", payload: id });
} 