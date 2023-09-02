import ubigeoPeru from 'ubigeo-peru';
import IUbigeo from '../Interfaces/IUbigeo';

export const currentUbigeo : IUbigeo[] = ubigeoPeru.reniec;

export const departments = currentUbigeo.filter((item) => {
  return (item.provincia === '00' &&   item.distrito === '00')});

export const sexOptions = [
  { value: 'M', label: 'Masculino' },
  { value: 'F', label: 'Femenino' },
  { value: 'O', label: 'Otro'}
];

