import SalufyService from "@/services/Salufy/Salufy.services";
import {
  useAppointment,
  useAppointmentDispatch,
} from "../context/AppointmentContext/AppointmentContext";
import usePageState from "./usePageState";
import {useEffect} from "react";
import {useSearchParams} from "next/navigation";
import {Timestamp} from "firebase/firestore";

const usePayment = () => {
  const {pageState, setLoading, setError, setSuccess, errorMessage} =
    usePageState();
  const params = useSearchParams();
  const appId = params.get("appId");
  const appointment = useAppointment();
  const dispatch = useAppointmentDispatch();
  const Salufy = SalufyService.getInstance();

  const handleUpload = async (type: "scheduled" | "pending") => {
    try {
      setLoading();
      await Salufy.updateAppointmentStatus(appointment._id, type);
      setSuccess();
    } catch (error) {
      setError(error as Error);
    }
  };

  useEffect(() => {
    const handleAppointmentData = async (appId: string) => {
      try {
        setLoading();
        const newAppointment = await Salufy.getAppointment(appId);
        const {date, startDate, endDate} = newAppointment;
        if (newAppointment.status === "pending") {
          dispatch({
            type: "SET_APPOINTMENT",
            payload: {
              ...newAppointment,
              date: new Date((date as Timestamp).seconds * 1000),
              startDate: new Date((startDate as Timestamp).seconds * 1000),
              endDate: new Date((endDate as Timestamp).seconds * 1000),
            },
          });
        } else {
          throw new Error("No se puede realizar el pago de esta cita.");
        }
        setSuccess();
      } catch (error) {
        console.log("error", error);
        setError(error as Error);
      }
    };

    if (appId !== null && appId !== "") {
      handleAppointmentData(appId);
    } else {
      setSuccess();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appId]);

  return {appointment, pageState, errorMessage, handleUpload};
};

export default usePayment;
