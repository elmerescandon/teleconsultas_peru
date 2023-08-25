import IAvailableAppointment from "../Interfaces/IAvailableAppointment";
import ISpecialty from "../Interfaces/dataModel/ISpeciality";
import IUser from "../Interfaces/dataModel/IUser";
import IAppointment from "../Interfaces/reducers/IAppointment";
import doctorAvailabilityMockup from "../mockups/doctorAvailabilityMockup";

// function from specialitiesMokcup to select options
export const getSpecialitiesOptions = (specialities: ISpecialty[]) => {
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
      label: doctor.name,
    };
  });
  return options;
};

export const getAvailableAppointments = (date: string, doctorId : string, specialityId: string) => {
  const availableDateDoctor = doctorAvailabilityMockup.filter((availability) => {
    return availability.doctor_id === doctorId && availability.specialty_id === specialityId && availability.availability_slots.some((slot) => slot.date === date);
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