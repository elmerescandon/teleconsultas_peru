import { Timestamp } from "firebase/firestore";
import { DateValue } from "../alias/alias";

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
