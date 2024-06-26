import IUserInfo from "@/redux/state-interfaces/User/IUserInfo";
import IAvailableAppointment from "../Interfaces/IAvailableAppointment";
import Ispeciality from "../Interfaces/dataModel/ISpeciality";
import IUser from "../Interfaces/dataModel/IUser";
import IAppointment from "../Interfaces/reducers/IAppointment";
import {parse} from "date-fns";
import ISelectOptions from "../Interfaces/ISelectOptions";
import dayjs from "dayjs";
import {Timestamp} from "firebase/firestore";
import {
    changeTimezone,
    setDateToTimezoneConstant,
    setDateToTimezoneConstantWithTime,
} from "./utilsDate";
import {DateValue} from "../alias/alias";

// function from specialitiesMokcup to select options
export const getSpecialitiesOptions = (specialities: Ispeciality[]) => {
    const options = specialities.map((speciality) => {
        return {
            value: speciality._id,
            label: speciality.name,
        };
    });
    return options;
};

// function from doctorsMokcup to select options
export const getDoctorsOptions = (doctors: IUser[]) => {
    const options = doctors.map((doctor) => {
        return {
            value: doctor._id,
            label: `Dr. ${doctor.name} ${doctor.lastName} `,
        };
    });
    return options;
};

export const validateAppointment = (appointment: IAppointment) => {
    const {
        specialityId,
        doctorId,
        reason,
        date,
        startDate,
        endDate,
        patientId,
        _id,
        status,
    } = appointment;
    if (
        !specialityId ||
        !doctorId ||
        !reason ||
        !date ||
        !startDate ||
        !endDate ||
        !patientId ||
        !_id
    )
        return false;
    if (status !== "pending" && status !== "doctor-canceled") return false;
    return true;
};

export const validateReservation = (appointment: IAppointment) => {
    const {
        specialityId,
        doctorId,
        reason,
        date,
        startDate,
        endDate,
        patientId,
        _id,
        status,
    } = appointment;
    if (
        !specialityId ||
        !doctorId ||
        !reason ||
        !date ||
        !startDate ||
        !endDate
    )
        return false;
    return true;
};

export const stringToDate = (date: Timestamp) => {
    const newDate = date.toDate().toISOString().split("T")[0];

    const spanishDate = parse(
        newDate,
        "yyyy-MM-dd",
        new Date()
    ).toLocaleDateString("es-ES", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return spanishDate.charAt(0).toUpperCase() + spanishDate.slice(1);
};

export const statusToSpanish = (status: string) => {
    console.log(status);
    switch (status) {
        case "scheduled":
            return "Agendada";
        case "completed":
            return "Aceptada";
        case "canceled":
            return "Rechazada";
        case "pending":
            return "Pendiente";
        case "doctor-canceled":
            return "Cancelada por el doctor";
        case "doctor-canceled/scheduled":
            return "Cancelada por el doctor";
        case "doctor-canceled/pending":
            return "Cancelada por el doctor";
        default:
            return "-";
    }
};

export const getAppointmentHours = (startDate: string, endDate: string) => {
    if (startDate === "" || endDate === "") return "";

    return `${new Date(startDate)
        .toLocaleTimeString()
        .replace(/:\d+ /, " ")} - ${new Date(endDate)
        .toLocaleTimeString()
        .replace(/:\d+ /, " ")} `;
};

export const getSpecialityName = (
    specialities: Ispeciality[],
    specialityId: string
) => {
    const speciality = specialities.filter(
        (speciality) => speciality._id === specialityId
    );
    if (speciality.length === 0) return "";
    return speciality[0].name;
};

export const getDoctorNameMockup = (doctors: IUser[], doctorId: string) => {
    const doctor = doctors.filter((doctor) => doctor._id === doctorId);
    if (doctor.length === 0) return "";
    return doctor[0].name;
};

export const getPatientName = (patients: IUser[], patientId: string) => {
    const patient = patients.filter((patient) => patient._id === patientId);
    if (patient.length === 0) return "";
    return patient[0].name;
};

export const getReasonName = (reasons: ISelectOptions[], reasonId: string) => {
    const reason = reasons.filter((reason) => reason.value === reasonId);
    if (reason.length === 0) return "";
    return reason[0].label;
};

export const areDatesEqual = (dateA: Date, dateB: Date) => {
    return (
        dateA.getFullYear() === dateB.getFullYear() &&
        dateA.getMonth() === dateB.getMonth() &&
        dateA.getDate() === dateB.getDate()
    );
};

export const createAppointment = (
    appointment: IAppointment,
    patient: IUserInfo
) => {
    const {_id} = patient;
    const {date} = appointment;
    const newAppointment: IAppointment = {
        ...appointment,
        patientId: _id,
        status: "pending",
        price: 80,
    };
    return newAppointment;
};

export const createAvailabilitiesSlots = (
    date: string,
    startTime: string,
    endTime: string
) => {
    const dates: IAvailableAppointment[] = [];
    const start = dayjs(date)
        .hour(parseInt(startTime.split(":")[0]))
        .minute(parseInt(startTime.split(":")[1]));
    const end = dayjs(date)
        .hour(parseInt(endTime.split(":")[0]))
        .minute(parseInt(endTime.split(":")[1]));

    for (let i = start; i.isBefore(end); i = i.add(30, "minute")) {
        let startDate = setDateToTimezoneConstantWithTime(new Date(i.toDate()));
        let endDate = setDateToTimezoneConstantWithTime(
            new Date(i.add(30, "minute").toDate())
        );
        dates.push({
            available: true,
            startDate,
            endDate,
        });
    }
    return dates;
};

export const dateToSpanishISO = (dateString: string) => {
    const date = new Date(dateString.replace(/-/g, "/"));
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return date.toLocaleDateString("es-ES", options);
};

const addDays = (date: Date, days: number): Date => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

const addWeeks = (date: Date, weeks: number): Date => {
    return addDays(date, weeks * 7);
};

const addMonths = (date: Date, months: number): Date => {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
};

const isWeekday = (date: Date): boolean => {
    const day = date.getDay();
    return day > 0 && day < 6;
};

export const getWeekdaysDatesBetween = (
    date: string,
    endDate: string,
    interval: "daily" | "weekly" | "monthly"
): Date[] => {
    const dates = [];
    let current = new Date(date);
    const lastDate = new Date(endDate);

    while (current <= lastDate) {
        if (isWeekday(current)) {
            dates.push(new Date(current));
        }

        switch (interval) {
            case "daily":
                current = addDays(current, 1);
                break;
            case "weekly":
                current = addWeeks(current, 1);
                break;
            case "monthly":
                current = addMonths(current, 1);
                break;
        }
    }

    return dates;
};

// export const getWeekdaysDatesBetween = (
//   date: string,
//   endDate: string,
//   interval: "daily" | "weekly" | "monthly"
// ): Date[] => {
//   const dates = [];
//   const current = new Date(date);
//   const lastDate = new Date(endDate);

//   let increment;
//   switch (interval) {
//     case "daily":
//       increment = 1;
//       break;
//     case "weekly":
//       increment = 7;
//       break;
//     case "monthly":
//       increment = 30; // Approximation for a month
//       break;
//     default:
//       throw new Error(
//         'Invalid interval. Supported intervals are "daily", "weekly", and "monthly".'
//       );
//   }

//   // Generate an array of dates between date and endDate with the specified interval
//   for (
//     let i = current.getTime();
//     i <= lastDate.getTime();
//     i += increment * 24 * 60 * 60 * 1000
//   ) {
//     const currentDate = new Date(i);
//     if (
//       interval === "daily" ||
//       (currentDate.getDay() > 0 && currentDate.getDay() < 6)
//     ) {
//       dates.push(currentDate);
//     }
//   }

//   return dates;
// };

export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

export const dateToHours = (startDate: string, endDate: string) =>
    `${new Date(startDate)
        .toLocaleTimeString()
        .replace(/:\d+ /, " ")} - ${new Date(endDate)
        .toLocaleTimeString()
        .replace(/:\d+ /, " ")} `;

export const getHourFromDate = (dateString: string): string => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
};

// compare date in a Firebase Timestamp format with a Date format for today considering the date is in LIMA timezone, return true if the difference is more than 24 hours
export const isDateOlderThan24Hours = (date: Timestamp): boolean => {
    const dateNow = new Date();
    const dateToCompare = date.toDate();
    const difference = dateNow.getTime() - dateToCompare.getTime();
    return 24 * 60 * 60 * 1000 > difference;
};

export const isDateOlderThan24HoursFromNow = (date: DateValue): boolean => {
    const dateNow = new Date(new Date().setHours(0, 0, 0, 0));
    const dateToCompare =
        date instanceof Date
            ? new Date(date.setHours(0, 0, 0, 0))
            : new Date(date.toDate().setHours(0, 0, 0, 0));
    const difference = dateToCompare.getTime() - dateNow.getTime();
    return difference > 24 * 60 * 60 * 1000;
};
