import IUserInfo from "@/redux/state-interfaces/User/IUserInfo";
import IAvailableAppointment from "../Interfaces/IAvailableAppointment";
import Ispeciality from "../Interfaces/dataModel/ISpeciality";
import IUser from "../Interfaces/dataModel/IUser";
import IAppointment from "../Interfaces/reducers/IAppointment";
import doctorAvailabilityMockup from "../mockups/doctorAvailabilityMockup";
import { parse } from "date-fns";
import ISelectOptions from "../Interfaces/ISelectOptions";
import dayjs from "dayjs";
import IAvailabilitySlots from "../Interfaces/dataModel/IAvailabilitySlots";
import { Timestamp } from "firebase/firestore";
import { ca } from "date-fns/locale";

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

export const getAvailableAppointments = (date: string, doctorId: string, specialityId: string) => {
  const availableDateDoctor = doctorAvailabilityMockup.filter((availability) => {
    if (availability.availability_slots === undefined) return false;
    return availability.doctor_id === doctorId && availability.speciality_id === specialityId && availability.availability_slots.some((slot) => slot.date === date);
  });

  if (availableDateDoctor.length === 0) return [];

  if (availableDateDoctor[0].availability_slots === undefined) return [];

  return availableDateDoctor[0].availability_slots.filter((slot) => slot.date === date)[0].slots as IAvailableAppointment[];
};

export const validateAppointment = (appointment: IAppointment) => {
  const { specialityId, doctorId, reason, date, startDate, endDate, patientId, _id, status } = appointment;
  if (!specialityId || !doctorId || !reason || !date || !startDate || !endDate || !patientId || !_id) return false;
  if (status !== 'pending' && status !== "doctor-canceled") return false;
  return true;
}

export const validateReservation = (appointment: IAppointment) => {
  const { specialityId, doctorId, reason, date, startDate, endDate, patientId, _id, status } = appointment;
  if (!specialityId || !doctorId || !reason || !date || !startDate || !endDate) return false;
  return true;
}

export const stringToDate = (date: Timestamp) => {

  const newDate = date.toDate()
    .toISOString()
    .split("T")[0]

  const spanishDate = parse(newDate, 'yyyy-MM-dd', new Date()).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  return spanishDate.charAt(0).toUpperCase() + spanishDate.slice(1);
}

export const statusToSpanish = (status: string) => {
  switch (status) {
    case 'scheduled':
      return 'Agendada';
    case 'completed':
      return 'Aceptada';
    case 'canceled':
      return 'Rechazada';
    case 'pending':
      return 'Pendiente';
    case 'doctor-canceled':
      return 'Cancelada por el doctor';
    default:
      return 'Pendiente';
  }
}

export const getAppointmentHours = (startDate: string, endDate: string) => {
  if (startDate === "" || endDate === "") return "";

  return `${new Date(startDate)
    .toLocaleTimeString()
    .replace(/:\d+ /, " ")} - ${new Date(endDate)
      .toLocaleTimeString()
      .replace(/:\d+ /, " ")} `;
}

export const getSpecialityName = (specialities: Ispeciality[], specialityId: string) => {
  const speciality = specialities.filter((speciality) => speciality._id === specialityId);
  if (speciality.length === 0) return '';
  return speciality[0].name;
}


export const getDoctorNameMockup = (doctors: IUser[], doctorId: string) => {
  const doctor = doctors.filter((doctor) => doctor._id === doctorId);
  if (doctor.length === 0) return '';
  return doctor[0].name;
};

export const getPatientName = (patients: IUser[], patientId: string) => {
  const patient = patients.filter((patient) => patient._id === patientId);
  if (patient.length === 0) return '';
  return patient[0].name;
}

export const getReasonName = (reasons: ISelectOptions[], reasonId: string) => {
  const reason = reasons.filter((reason) => reason.value === reasonId);
  if (reason.length === 0) return '';
  return reason[0].label;
}

export const areDatesEqual = (dateA: Date, dateB: Date) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()
  );
}

export const createAppointment = (appointment: IAppointment, patient: IUserInfo) => {
  const { _id } = patient;
  const { date } = appointment;
  // const dateParts = date.split("-");
  // const newDate = new Date(
  //   parseInt(dateParts[0]),
  //   parseInt(dateParts[1]) - 1,
  //   parseInt(dateParts[2])
  // );
  const newAppointment: IAppointment = {
    ...appointment,
    patientId: _id,
    status: 'pending',
    price: 80,
    // date: newDate as unknown as string,
  }
  return newAppointment;

}



export const createAvailabilitiesSlots = (date: string, startTime: string, endTime: string) => {
  const dates: IAvailableAppointment[] = [];
  const start = dayjs(date)
    .hour(parseInt(startTime.split(":")[0]))
    .minute(parseInt(startTime.split(":")[1]));
  const end = dayjs(date)
    .hour(parseInt(endTime.split(":")[0]))
    .minute(parseInt(endTime.split(":")[1]));

  for (let i = start; i.isBefore(end); i = i.add(30, "minute")) {
    let startDate = new Date(i.toDate());
    let startDateCorrected = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000).toISOString().slice(0, -1);

    let endDate = new Date(i.add(30, "minute").toDate());
    let endDateCorrected = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000).toISOString().slice(0, -1);

    dates.push({
      available: true,
      startDate: startDateCorrected,
      endDate: endDateCorrected,
    });
  }
  return dates;
};


export const dateToSpanish = (date: string) => {
  const spanishDate = parse(date, 'yyyy-MM-dd', new Date()).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  return spanishDate.charAt(0).toUpperCase() + spanishDate.slice(1);
}

export const dateToSpanishISO = (dateString: string) => {
  const date = new Date(dateString.replace(/-/g, '\/'));
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('es-ES', options);
}
export const replicateAvailabilities = (newDate: string, availability: IAvailableAppointment[],) => {
  const dateInput = new Date(newDate).toISOString().split("T")[0];

  const newAvailability: IAvailabilitySlots = {
    date: dateInput,
    slots: availability.map((slot) => {
      return {
        available: true,
        startDate: dateInput + "T" + slot.startDate.split("T")[1],
        endDate: dateInput + "T" + slot.endDate.split("T")[1],
      }
    })
  }
  return newAvailability;
}

export const getWeekdaysDatesBetween = (date: string, endDate: string, interval: 'daily' | 'weekly' | 'monthly'): Date[] => {
  const dates = [];
  const current = new Date(date);
  const lastDate = new Date(endDate);

  let increment;
  switch (interval) {
    case 'daily':
      increment = 1;
      break;
    case 'weekly':
      increment = 7;
      break;
    case 'monthly':
      increment = 30; // Approximation for a month
      break;
    default:
      throw new Error('Invalid interval. Supported intervals are "daily", "weekly", and "monthly".');
  }

  // Generate an array of dates between date and endDate with the specified interval
  for (let i = current.getTime(); i <= lastDate.getTime(); i += increment * 24 * 60 * 60 * 1000) {
    const currentDate = new Date(i);
    if (interval === 'daily' || (currentDate.getDay() > 0 && currentDate.getDay() < 6)) {
      dates.push(currentDate);
    }
  }

  return dates;
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export const dateToHours = (startDate: string, endDate: string) => `${new Date(startDate)
  .toLocaleTimeString()
  .replace(/:\d+ /, " ")} - ${new Date(endDate)
    .toLocaleTimeString()
    .replace(/:\d+ /, " ")} `;

export const getHourFromDate = (dateString: string): string => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

// compare date in a Firebase Timestamp format with a Date format for today considering the date is in LIMA timezone, return true if the difference is more than 24 hours
export const isDateOlderThan24Hours = (date: Timestamp): boolean => {
  const dateNow = new Date();
  const dateToCompare = date.toDate();
  const difference = dateNow.getTime() - dateToCompare.getTime();
  return 24 * 60 * 60 * 1000 > difference;
}

export const isDateOlderThan24HoursFromNow = (date: string): boolean => {
  if (date === "") return false;
  console.log("comparing a date older", date);
  let dateParts = date.split("-");
  if (dateParts.length < 3) return false;
  let dateObject = new Date(Date.UTC(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2])));
  dateObject.setUTCHours(0, 0, 0, 0); // set hours, minutes, seconds and milliseconds to 0


  const dateNow = new Date();
  dateNow.setUTCHours(0, 0, 0, 0); // set hours, minutes, seconds and milliseconds to 0
  let twoDaysLater = new Date(dateNow.getTime() + 2 * 24 * 60 * 60 * 1000)

  if (dateObject > twoDaysLater) return true;
  return false;

}