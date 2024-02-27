import { Timestamp } from "firebase/firestore";
import { DateValue } from "../alias/alias";
import { timeZoneConstant } from "../constants/constants";

export const getHourMinutes = (date: DateValue) => {
    if (date instanceof Timestamp) {
        const dateJS = date.toDate();
        const hour = dateJS.getHours();
        const minutes = dateJS.getMinutes();
        return `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    } else {
        const hour = date.getHours();
        const minutes = date.getMinutes();
        return `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
}

export const getHourRange = (startDate: DateValue, endDate: DateValue) => {
    return `${getHourMinutes(startDate)} - ${getHourMinutes(endDate)}`;
}


export const changeTimezone = (date: Date | string) => {
    if (typeof date === 'string') {
        return new Date(
            new Date(date).toLocaleString("en-US", { timeZone: timeZoneConstant })
        );
    } else {
        return new Date(
            date.toLocaleString("en-US", { timeZone: timeZoneConstant })
        );
    }
}

export const getOnlyDateWithTimezone = (date: string | Date) => {
    return new Date(changeTimezone(date).setHours(0, 0, 0, 0));
}

// create a function that returns the date in spanish in this format "Miercole , 23 de agosto del 2023"
export const dateToSpanish = (date: DateValue) => {
    const dateJS = date instanceof Timestamp ? date.toDate() : date;
    const days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return `${days[dateJS.getDay()]}, ${dateJS.getDate()} de ${months[dateJS.getMonth()]} del ${dateJS.getFullYear()}`;
}

// convert datevalue array to date with format "yyyy-mm-dd"
export const dateValuesToDates = (dates: DateValue[]) => {
    return dates.map((date) => {
        if (date instanceof Timestamp) {
            return date.toDate().toISOString().split("T")[0];
        } else {
            return date.toISOString().split("T")[0];
        }
    })
}