import { useState } from 'react';
import { validatePhone } from '../functions/utilsRegister';
import { fi } from 'date-fns/locale';

export interface IFormField {
    value: string | string[] | File;
    error: string;
  }
  
export interface IFormFields {
name: IFormField;
lastname: IFormField;
email: IFormField;
id: IFormField;
password: IFormField;
repeatPassword: IFormField;

region: IFormField;
province: IFormField;
district: IFormField;
address: IFormField;
refference: IFormField;
interiorNumber: IFormField;

// Info


age: IFormField;
sex: IFormField;
specialities: IFormField;
cmpNumber: IFormField;
curriculum: IFormField;
phone: IFormField;
bornDate: IFormField;
termsAndConditions: IFormField;

}

const useDoctorRegister = () => {
  const fields = {
    // general
    name: { value: '', error: '' },
    lastname: { value: '', error: '' },
    email: { value: '', error: '' },
    id: { value: '', error: '' },
    password: { value: '', error: '' },
    repeatPassword: { value: '', error: '' },

    // location
    region: { value: '', error: '' },
    province: { value: '', error: '' },
    district: { value: '', error: '' },
    address: { value: '', error: '' },
    refference: { value: '', error: '' },
    interiorNumber: { value: '', error: '' },

    // Info
    age: { value: '', error: '' },
    sex: { value: '', error: ''},
    specialities: {value:[], error:''},
    cmpNumber: {value:'', error:''},
    curriculum: {value:'', error:''},
    phone: { value: '', error: '' },
    bornDate: { value: '', error: '' },
    termsAndConditions: { value: '', error: '' }
  };

  const [formFields, setFormFields] = useState<IFormFields>(fields);

  const handleChange = (fieldName : keyof IFormFields, value : string | File) => {
    setFormFields({
      ...formFields,
      [fieldName]: { ...formFields[fieldName], value },
    });
  };


  const validations = {
        name: (value : string) => (value !== '' ? '' : 'Nombre es requerido'),
        lastname: (value : string) => (value !== '' ? '' : 'Apellidos es requerido'),
        email: (value : string) =>
        value
            ? /\S+@\S+\.\S+/.test(value)
            ? ''
            : 'Formato inválido'
            : 'Email es requerido',
        id: (value : string) => (value ? '' : 'DNI es requerido'),
        password: (value : string) => (value ? '' : 'Contraseña es requerida'),
        repeatPassword: (value : string) =>
        value ? (value === formFields.password.value ? '' : 'Contraseñas no coinciden') : 'Repetir contraseña es requerido',
        region: (value : string) => (value ? '' : 'Región es requerido'),
        province: (value : string) => (value ? '' : 'Provincia es requerido'),
        district: (value : string) => (value ? '' : 'Distrito es requerido'),
        address: (value : string) => (value ? '' : 'Dirección es requerido'),
        refference: (value : string) => (value ? '' : ''),
        interiorNumber: (value : string) => (value ? '' : ''),
        age: (value : string) => (value ? '' : 'Edad es requerido'),  
        sex: (value: string) => (value ? '' : 'Especialidad es requerido'),
        cmpNumber: (value: string) => (value ? '' : 'Adjunta tu certificado'),
        curriculum: (value: string) => (value ? '' : 'Adjunta tu curriculum'),
        phone: (value : string) => (validatePhone(value) ? '' : 'Teléfono es requerido'),
        bornDate: (value : string) => (value ? '' : 'Fecha de nacimiento es requerido'),
        termsAndConditions: (value : string) => (value && value==='true' ? '' : 'Es necesario aceptar los términos y condiciones'),
        };

    const validationsArray = {
        specialities: (value: string[]) => (value.length>0 ? '' : 'Escoge almenos una especialdiad'),
    }


    const validateField = (fieldName : keyof IFormFields) => {
        const value = formFields[fieldName].value;
    };

    const validateAllFields = (paramsToValidate : (keyof IFormFields)[]) => {
        const newFormFields = { ...formFields };
        let error = '';
        paramsToValidate.forEach((fieldName) => {
            const value = formFields[fieldName].value;
            if(fieldName==='specialities'){

                const value = formFields[fieldName].value;
                error = validationsArray[fieldName](value as string[]);
            }
            else if (fieldName==='curriculum'){
                const value = formFields[fieldName].value;
                error = validations[fieldName]((value as File).name);
            }
            else{
                const value = formFields[fieldName].value;
                error = validations[fieldName](value as string);
            }
            newFormFields[fieldName] = { value, error };
        });
        setFormFields(newFormFields);
    };

    const handleValidations = (type: 'general' | 'location' | 'info') => {
        const generalField = ["name", "lastname", "email", "id", "password", "repeatPassword"] as (keyof IFormFields)[];
        const locationField = ["region", "province", "district", "address", "refference", "interiorNumber"] as (keyof IFormFields)[];
        const infoField = ["age", "specialities", "cmpNumber", "curriculum", "phone", "bornDate", "termsAndConditions"] as (keyof IFormFields)[];
        switch (type) {
        case 'general':
            validateAllFields(generalField as (keyof IFormFields)[]);
            break;
        case 'location':
            validateAllFields(locationField as (keyof IFormFields)[]);
            break;
        case 'info':
            validateAllFields(infoField as (keyof IFormFields)[]);
            break;
        }
    }

    const handleRegister = (type: 'general' | 'location' | 'info') => {
        const generalField = ["name", "lastname", "email", "id", "password", "repeatPassword"] as (keyof IFormFields)[];
        const locationField = ["region", "province", "district", "address", "refference", "interiorNumber"] as (keyof IFormFields)[];
        const infoField = ["age", "specialities","cmpNumber", "curriculum", "phone", "bornDate", "termsAndConditions"] as (keyof IFormFields)[];
        
        switch (type) {
        case 'general':
            return generalField.every((field) => !formFields[field].error);
        case 'location':
            return locationField.every((field) => !formFields[field].error);
        case 'info':
            return infoField.every((field) => !formFields[field].error);
        default:
            return false;
        }
    };



    return {
        formFields,
        handleChange,
        handleValidations,
        handleRegister
    };
};

export default useDoctorRegister;