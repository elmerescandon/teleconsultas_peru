import {Dispatch, createContext, useContext, useReducer} from "react";
import IAppointment from "../../Interfaces/reducers/IAppointment";
import IAppointmentActions from "../../Interfaces/reducers/IAppointmentActions";

export const AppointmentContext = createContext<IAppointment>(undefined!);
export const AppointmentDispatchContext = createContext<
  Dispatch<IAppointmentActions>
>(undefined!);

type AppointmentProviderProps = {
  children: React.ReactNode;
};

const AppointmentProvider = ({children}: AppointmentProviderProps) => {
  const [appointment, dispatch] = useReducer(appointmentReducer, {
    specialityId: "",
    doctorId: "",
    reason: "",
    symptoms: [],
    details: "",
    date: null,
    startDate: null,
    endDate: null,
    _id: "",
    patientId: "",
    status: "pre-reserved",
  });

  return (
    <AppointmentContext.Provider value={appointment}>
      <AppointmentDispatchContext.Provider value={dispatch}>
        {children}
      </AppointmentDispatchContext.Provider>
    </AppointmentContext.Provider>
  );
};

const appointmentReducer = (
  appointment: IAppointment,
  action: IAppointmentActions
) => {
  switch (action.type) {
    case "SET_SPECIALITY":
      return {
        ...appointment,
        specialityId: action.payload,
        doctorId: "",
      };
    case "SET_DOCTOR":
      return {...appointment, doctorId: action.payload};
    case "SET_ID":
      return {...appointment, _id: action.payload};
    case "SET_STATUS":
      return {...appointment, _id: action.payload};
    case "SET_REASON":
      return {...appointment, reason: action.payload};
    case "SET_SYMPTOMS":
      return {...appointment, symptoms: action.payload};
    case "SET_DETAILS":
      return {...appointment, details: action.payload};
    case "SET_DATE":
      return {
        ...appointment,
        date: action.payload,
        startDate: null,
        endDate: null,
      };
    case "SET_TIME":
      return {
        ...appointment,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      };
    case "SET_APPOINTMENT":
      return {...appointment, ...action.payload};
    default:
      return appointment;
  }
};

export const useAppointment = () => {
  return useContext(AppointmentContext);
};

export const useAppointmentDispatch = () => {
  return useContext(AppointmentDispatchContext);
};

export default AppointmentProvider;
