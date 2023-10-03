import IUserInfo from "@/redux/state-interfaces/User/IUserInfo";
import IAvailableAppointment from "../Interfaces/IAvailableAppointment";
import Ispeciality from "../Interfaces/dataModel/ISpeciality";
import IUser from "../Interfaces/dataModel/IUser";
import IAppointment from "../Interfaces/reducers/IAppointment";
import doctorAvailabilityMockup from "../mockups/doctorAvailabilityMockup";
import { parse } from "date-fns";

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
    return availability.doctor_id === doctorId && availability.speciality_id === specialityId && availability.availability_slots.some((slot) => slot.date === date);
  });

  if(availableDateDoctor.length === 0) return [];
  return availableDateDoctor[0].availability_slots.filter((slot) => slot.date === date)[0].slots as IAvailableAppointment[];
};

export const validateAppointment = (appointment : IAppointment) => {
  // TODO: Create a better validation
  const { specialityId, doctorId, reason, symptoms, details, date, startDate, endDate} = appointment;
  if(!specialityId || !doctorId || !reason || !symptoms || !details || !date || !startDate || !endDate) return false;
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

export const areDatesEqual = (dateA : Date, dateB: Date) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()
  );
}
