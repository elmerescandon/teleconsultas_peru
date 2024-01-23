import ubigeoPeru from 'ubigeo-peru';
import IUbigeo from '../Interfaces/IUbigeo';

export const currentUbigeo : IUbigeo[] = ubigeoPeru.reniec;

export const departments = currentUbigeo.filter((item) => {
  return (item.provincia === '00' &&   item.distrito === '00')});

export const sexOptions = [
  { value: 'M', label: 'Masculino' },
  { value: 'F', label: 'Femenino' },
  // { value: 'O', label: 'Otro'}
];


export const specialityOptions = [
  { value: 'speciality1', label: 'Psciología' },
  { value: 'speciality2', label: 'Medicina General' },
  { value: 'speciality3', label: 'Nutrición' },
]

export const hoursOptions = [
  // { value: '07:00', label: '07:00' },
  // { value: '07:30', label: '07:30' },
  // { value: '08:00', label: '08:00' },
  // { value: '08:30', label: '08:30' },
  { value: '09:00', label: '09:00' },
  { value: '09:30', label: '09:30' },
  { value: '10:00', label: '10:00' },
  { value: '10:30', label: '10:30' },
  { value: '11:00', label: '11:00' },
  { value: '11:30', label: '11:30' },
  { value: '12:00', label: '12:00' },
  { value: '12:30', label: '12:30' },
  { value: '13:00', label: '13:00' },
  { value: '13:30', label: '13:30' },
  { value: '14:00', label: '14:00' },
  { value: '14:30', label: '14:30' },
  { value: '15:00', label: '15:00' },
  { value: '15:30', label: '15:30' },
  { value: '16:00', label: '16:00' },
  { value: '16:30', label: '16:30' },
  { value: '17:00', label: '17:00' },
  { value: '17:30', label: '17:30' },
  { value: '18:00', label: '18:00' },
  // { value: '18:30', label: '18:30' },
  // { value: '19:00', label: '19:00' },
  // { value: '19:30', label: '19:30' },
];


