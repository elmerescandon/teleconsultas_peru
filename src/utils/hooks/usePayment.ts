import {useAppointment} from "../context/AppointmentContext/AppointmentContext";
import usePageState from "./usePageState";

const usePayment = () => {
  const {pageState, setLoading, setError, setSuccess, errorMessage} =
    usePageState();
  const appointment = useAppointment();

  const handleUpload = async (type: "scheduled" | "pending") => {
    try {
      setLoading();
      await fetch("/api/salufy/appointment", {
        method: "PUT",
        body: JSON.stringify({
          id: appointment._id,
          appointmentFields: {status: type},
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSuccess();
    } catch (error) {
      setError(error as Error);
    }
  };

  return {appointment, pageState, errorMessage, handleUpload};
};

export default usePayment;
