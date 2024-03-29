import {Timestamp} from "firebase/firestore";
import {DateValue} from "../alias/alias";
import {timeZoneConstant} from "../constants/constants";
import {Dayjs} from "dayjs";

export const getHourMinutes = (date: DateValue) => {
  if (date instanceof Timestamp) {
    const dateJS = date.toDate();
    const hour = dateJS.getHours();
    const minutes = dateJS.getMinutes();
    return `${hour.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  } else {
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return `${hour.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }
};

export const getHourRange = (startDate: DateValue, endDate: DateValue) => {
  return `${getHourMinutes(startDate)} - ${getHourMinutes(endDate)}`;
};

export const changeTimezone = (date: Date | string) => {
  if (typeof date === "string") {
    return new Date(
      // add dont count 12 hours
      new Date(date).toLocaleString("en-US", {
        timeZone: timeZoneConstant,
        hour12: true,
      })
    );
  } else {
    return new Date(
      date.toLocaleString("en-US", {timeZone: timeZoneConstant, hour12: true})
    );
  }
};

export const getOnlyDateWithTimezone = (date: string | Date) => {
  return new Date(changeTimezone(date).setHours(0, 0, 0, 0));
};

export const dateToSpanish = (date: DateValue) => {
  const dateJS = date instanceof Timestamp ? date.toDate() : date;
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return `${days[dateJS.getDay()]}, ${dateJS.getDate()} de ${
    months[dateJS.getMonth()]
  } del ${dateJS.getFullYear()}`;
};

export const dateValuesToDates = (dates: DateValue[]) => {
  return dates.map((date) => {
    if (date instanceof Timestamp) {
      return date.toDate().toISOString().split("T")[0];
    } else {
      return date.toISOString().split("T")[0];
    }
  });
};

export const formatDate = (date: Dayjs | Date) => {
  if (date instanceof Date) {
    let month: number = date.getMonth(); // getMonth() is zero-indexed, so we add 1
    let day: number = date.getDate();
    let year: number = date.getFullYear();
    return {month, day, year};
  } else {
    let month: number = date.month(); // getMonth() is zero-indexed, so we add 1
    let day: number = date.date();
    let year: number = date.year();
    return {month, day, year};
  }
};

export const setDateToTimezoneConstant = (date: Dayjs | Date) => {
  const correctedDate = date instanceof Date ? date : date.toDate();
  const localTimeToString = correctedDate.toLocaleString("en-us", {
    timeZone: timeZoneConstant,
    hour12: false,
  });
  const dateInlocalTime = parseDateStringToDate(localTimeToString);

  const timezoneOffset =
    correctedDate.getTime() - dateInlocalTime.getTime() + 60 * 60 * 1000;
  return new Date(correctedDate.getTime() + timezoneOffset);
};

export const setDateToTimezoneConstantWithTime = (date: Date): Date => {
  const dateTimezone = changeTimezone(date);
  const difference = (date.valueOf() - dateTimezone.valueOf()) / 1000 / 60;
  return new Date(date.valueOf() + difference * 60 * 1000);
};

const parseDateStringToDate = (dateString: string): Date => {
  const [datePart, timePart] = dateString.split(/,\s?/);
  const [month, day, year] = datePart.split("/").map(Number);
  const [hours, minutes, seconds] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes, seconds);
};

export const getDaysFromRange = (startDate: Date, finishDate: Date) => {
  const days = [];
  for (let day = startDate; day <= finishDate; day.setDate(day.getDate() + 1)) {
    days.push(new Date(day));
  }
  return days;
};

export const getDaysFromRangeWithTimezone = (
  startDate: string,
  finishDate: string
) => {
  const correctedStartTime = setDateToTimezoneConstant(new Date(startDate));
  const correctedEndTime = setDateToTimezoneConstant(new Date(finishDate));
  return getDaysFromRange(correctedStartTime, correctedEndTime);
};

export const timestampToDateArray = (dates: Timestamp[]) => {
  return dates.map((date) => date.toDate());
};

export const getNowDay = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now.toISOString();
};

export const getNowDayDate = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now;
};

export const getNowDayPlusDays = (days: number) => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  now.setDate(now.getDate() + days);
  return now.toISOString();
};
