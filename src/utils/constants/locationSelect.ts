import ubigeoPeru from 'ubigeo-peru';

const currentUbigeo = ubigeoPeru.reniec;

const departments = currentUbigeo.filter((item) => {
  return (item.provincia === '00' &&   item.distrito === '00')});



