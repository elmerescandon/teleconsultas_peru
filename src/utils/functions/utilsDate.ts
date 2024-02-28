import { Timestamp } from "firebase/firestore";
import { DateValue } from "../alias/alias";
import { timeZoneConstant } from "../constants/constants";
import { Dayjs } from "dayjs";

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
            // add dont count 12 hours
            new Date(date).toLocaleString("en-US", { timeZone: timeZoneConstant, hour12: true })
        );
    } else {
        return new Date(
            date.toLocaleString("en-US", { timeZone: timeZoneConstant, hour12: true })
        );
    }
}

export const getOnlyDateWithTimezone = (date: string | Date) => {
    return new Date(changeTimezone(date).setHours(0, 0, 0, 0));
}

export const dateToSpanish = (date: DateValue) => {
    const dateJS = date instanceof Timestamp ? date.toDate() : date;
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return `${days[dateJS.getDay()]}, ${dateJS.getDate()} de ${months[dateJS.getMonth()]} del ${dateJS.getFullYear()}`;
}

export const dateValuesToDates = (dates: DateValue[]) => {
    return dates.map((date) => {
        if (date instanceof Timestamp) {
            return date.toDate().toISOString().split("T")[0];
        } else {
            return date.toISOString().split("T")[0];
        }
    })
}

export const formatDate = (date: Dayjs | Date) => {
    if (date instanceof Date) {
        let month: number = date.getMonth(); // getMonth() is zero-indexed, so we add 1
        let day: number = date.getDate();
        let year: number = date.getFullYear();
        return { month, day, year };
    } else {
        let month: number = date.month(); // getMonth() is zero-indexed, so we add 1
        let day: number = date.date();
        let year: number = date.year();
        return { month, day, year };
    }

}

export const formatDateWithTime = (date: Date) => {
    let month: number = date.getMonth(); // getMonth() is zero-indexed, so we add 1
    let day: number = date.getDate();
    let year: number = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return { month, day, year, hours, minutes };
}


export const setDateToTimezoneConstant = (date: Dayjs | Date) => {
    const { month, day, year } = formatDate(date) // Splitting and converting date components to numbers1
    const newDate = new Date(Date.UTC(year, month, day)); // Constructing a UTC date object
    const offset = newDate.getTimezoneOffset(); // Getting timezone offset in minutes
    const localTime = newDate.getTime() + (offset * 60 * 1000); // Converting UTC time to local time

    if (date instanceof Date) {
        const targetTime = localTime + (timeZoneConstantToOffset(date) * 60 * 1000); // Converting to target timezone
        return new Date(targetTime);
    } else {
        const targetTime = localTime + (timeZoneConstantToOffset(date.toDate()) * 60 * 1000); // Converting to target timezone
        return new Date(targetTime);
    }

}

const timeZoneConstantToOffset = (date: Date) => {
    const timeZoneOffset = date.toLocaleTimeString('en-us', { timeZone: timeZoneConstant, timeZoneName: 'short' }).split(' ')[0];
    const [hours, minutes] = timeZoneOffset.split(':').map(Number);
    return (hours * 60) + minutes;
}


export const setDateToTimezoneConstantWithTime = (date: Date) => {
    const dateTimezone = changeTimezone(date);
    // date > dateTimezone then date is in the future 
    const difference = (date.valueOf() - dateTimezone.valueOf()) / 1000 / 60;
    // add the difference to date 
    return new Date(date.valueOf() + difference * 60 * 1000);
}
