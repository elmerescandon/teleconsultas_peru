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
import { da } from "date-fns/locale";

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

export const getAvailableAppointments = (date: string, doctorId : string, specialityId: string) => {
  const availableDateDoctor = doctorAvailabilityMockup.filter((availability) => {
    if(availability.availability_slots === undefined) return false;
    return availability.doctor_id === doctorId && availability.speciality_id === specialityId && availability.availability_slots.some((slot) => slot.date === date);
  });

  if(availableDateDoctor.length === 0) return [];

  if(availableDateDoctor[0].availability_slots === undefined) return [];

  return availableDateDoctor[0].availability_slots.filter((slot) => slot.date === date)[0].slots as IAvailableAppointment[];
};

export const validateAppointment = (appointment : IAppointment) => {
  // TODO: Create a better validation
  const { specialityId, doctorId, reason, date, startDate, endDate} = appointment;
  if(!specialityId || !doctorId || !reason || !date || !startDate || !endDate) return false;
  return true;
}

export const  stringToDate = (date : string) => {
  if (date === "") return "";	

  const spanishDate = parse(date, 'yyyy-MM-dd', new Date()).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    return spanishDate.charAt(0).toUpperCase() + spanishDate.slice(1);
}

export const statusToSpanish = (status : string) => {
  switch(status){
    case 'scheduled':
      return 'Agendada';
    case 'completed':
      return 'Aceptada';
    case 'canceled':
      return 'Rechazada';
    case 'pending':
      return 'Pendiente';
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

export const getSpecialityName = (specialities : Ispeciality[], specialityId : string) => {
  const speciality = specialities.filter((speciality) => speciality._id === specialityId);
  if(speciality.length === 0) return '';
  return speciality[0].name;
}


export const getDoctorNameMockup = (doctors : IUser[], doctorId : string) => {
  const doctor = doctors.filter((doctor) => doctor._id === doctorId);
  if(doctor.length === 0) return '';
  return doctor[0].name;
};

export const getPatientName = (patients : IUser[], patientId : string) => {
  const patient = patients.filter((patient) => patient._id === patientId);
  if(patient.length === 0) return '';
  return patient[0].name;
}

export const getReasonName = (reasons : ISelectOptions[], reasonId : string) => {
  const reason = reasons.filter((reason) => reason.value === reasonId);
  if(reason.length === 0) return '';
  return reason[0].label;
}

export const areDatesEqual = (dateA : Date, dateB: Date) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()
  );
}

export const createAppointment = (appointment : IAppointment, patient : IUserInfo) => {
  const { _id } = patient;
  const newAppointment : IAppointment = {
    ...appointment,
    patientId: _id,
    status: 'pending',
    price: 80,
  }
  return newAppointment;
}

export const createAvailabilitiesSlots = (date: string, startTime: string, endTime: string) => {
  const dates : IAvailableAppointment[] = [];
  const start = dayjs(date)
      .hour(parseInt(startTime.split(":")[0]))
      .minute(parseInt(startTime.split(":")[1]));
  const end = dayjs(date)
      .hour(parseInt(endTime.split(":")[0]))
      .minute(parseInt(endTime.split(":")[1]));

  for (let i = start; i.isBefore(end); i = i.add(30, "minute")) {
      let startDate = new Date(i.toDate());
      let startDateCorrected = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000).toISOString().slice(0, -1);

      let endDate = new Date(i.add(30,"minute").toDate());
      let endDateCorrected = new Date(endDate.getTime() - endDate.getTimezoneOffset() * 60000).toISOString().slice(0, -1);

      dates.push({
        available: true,
        startDate: startDateCorrected,
        endDate: endDateCorrected,
      });
  }
  return dates;
};


export const dateToSpanish = (date : string) => {
  const spanishDate = parse(date, 'yyyy-MM-dd', new Date()).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  return spanishDate.charAt(0).toUpperCase() + spanishDate.slice(1);
}

export const replicateAvailabilities = (newDate: string, availability : IAvailableAppointment[], ) => {
  const dateInput = new Date(newDate).toISOString().split("T")[0];

  const newAvailability : IAvailabilitySlots = {
    date: dateInput,
    slots: availability.map((slot) => {
      return {
        available: true,
        startDate: dateInput + "T" + slot.startDate.split("T")[1],
        endDate : dateInput + "T" + slot.endDate.split("T")[1],
      }
    })
  }
  return newAvailability;
}
