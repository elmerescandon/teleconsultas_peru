import { DateValue } from "@/utils/alias/alias"
import IAppointment from "./IAppointment"

type IAppointmentActionSetSpeciality = {
    type: "SET_SPECIALITY",
    payload: string,
}

type IAppointmentActionSetDoctor = {
    type: "SET_DOCTOR",
    payload: string,
}

type IAppointmentActionSetReason = {
    type: "SET_REASON",
    payload: string,
}

type IAppointmentActionSetSymptoms = {
    type: "SET_SYMPTOMS",
    payload: string[],
}

type IAppointmentActionSetDetails = {
    type: "SET_DETAILS",
    payload: string,
}

type IAppointmentActionSetDate = {
    type: "SET_DATE",
    payload: string,
}

type IAppointmentActionSetTime = {
    type: "SET_TIME",
    payload: { startDate: DateValue | null, endDate: DateValue | null },
}

type IAppointmentActionSetAppointment = {
    type: "SET_APPOINTMENT",
    payload: IAppointment,
}

type IAppointmentActionSetId = {
    type: "SET_ID",
    payload: string,
}

type IAppointmentActionSetStatus = {
    type: "SET_STATUS",
    payload: string,
}

type IAppointmentActions =
    IAppointmentActionSetSpeciality |
    IAppointmentActionSetDoctor |
    IAppointmentActionSetReason |
    IAppointmentActionSetSymptoms |
    IAppointmentActionSetDetails |
    IAppointmentActionSetDate |
    IAppointmentActionSetTime |
    IAppointmentActionSetId |
    IAppointmentActionSetStatus |
    IAppointmentActionSetAppointment;

export default IAppointmentActions;
