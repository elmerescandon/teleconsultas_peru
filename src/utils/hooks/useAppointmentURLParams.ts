import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {
  useAppointment,
  useAppointmentDispatch,
} from "../context/AppointmentContext/AppointmentContext";
import {useAppSelector} from "@/redux/hooks";
import {IState} from "@/redux/store";
import getAppointment from "@/firebase/Appointments/getAppointment";
import {createAppointment, validateAppointment} from "../functions/utils";
import getAppointmentId from "@/firebase/Appointments/getAppointmentId";
import IUserState from "@/redux/state-interfaces/User/IUserState";
import createNewAppointment from "@/firebase/Appointments/createNewAppointment";
import updateAppointmentField from "@/firebase/Appointments/updateAppointmentField";
import checkAppointment from "@/firebase/Appointments/checkAppointment";

const useAppointmentURLParams = () => {
  const params = useSearchParams();
  const dispatch = useAppointmentDispatch();
  const appointment = useAppointment();

  const [appointmentExisted, setAppointmentExisted] = useState<null | boolean>(
    null
  );
  const [appointmentUpdated, setAppointmentUpdated] = useState<boolean>(false);

  const user: IUserState = useAppSelector((state: IState) => state.user);
  const {userInfo} = user;

  const [pageState, setPageState] = useState<{
    loading: boolean;
    error: string;
  }>({loading: false, error: ""});

  useEffect(() => {
    const constructAppointment = async () => {
      try {
        const newAppointmentId = (await getAppointmentId(appointment))._id;
        const newAppointment = {
          ...createAppointment(appointment, userInfo),
          _id: newAppointmentId,
        };
        dispatch({type: "SET_APPOINTMENT", payload: newAppointment});
        setAppointmentUpdated(true);
      } catch (error) {
        setPageState({loading: false, error: (error as Error).message});
      }
    };

    const getAppointmentData = async () => {
      try {
        const appointmentId = params.get("appId");
        if (appointmentId === null) {
          setAppointmentExisted(false);
          return;
        }

        const newAppointment = await getAppointment(appointmentId);
        if (newAppointment === null) {
          setAppointmentExisted(false);
          return;
        }
        dispatch({type: "SET_APPOINTMENT", payload: newAppointment});
        setAppointmentExisted(true);
        setPageState({loading: false, error: ""});
      } catch (error) {
        setPageState({loading: false, error: (error as Error).message});
      }
    };

    const uploadAppointment = async () => {
      try {
        if (
          !appointmentExisted &&
          validateAppointment(appointment) &&
          !(await checkAppointment(appointment._id))
        ) {
        } else {
          await updateAppointmentField(appointment._id, "status", "pending");
        }
        setPageState({loading: false, error: ""});
      } catch (error) {
        setPageState({loading: false, error: (error as Error).message});
      }
    };

    if (appointmentExisted === null) {
      setPageState({loading: true, error: ""});
      getAppointmentData();
    } else {
      if (!appointmentExisted) {
        if (
          appointment.patientId === "" &&
          userInfo._id !== "" &&
          appointment.date !== null &&
          appointment._id === ""
        ) {
          constructAppointment();
          return;
        }
        if (appointmentUpdated) uploadAppointment();
      }
    }
  }, [appointment, user, appointmentExisted]);

  return {appointmentExisted, appointment, pageState, setPageState};
};

export default useAppointmentURLParams;
