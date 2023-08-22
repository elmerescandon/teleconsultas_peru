import ISpecialty from "../Interfaces/dataModel/ISpeciality";
import IUser from "../Interfaces/dataModel/IUser";

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