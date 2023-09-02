import { useState } from 'react';

export interface IFormField {
    value: string;
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
height:IFormField;
weight: IFormField;
phone: IFormField;
bornDate: IFormField;
}

const useRegister = () => {
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
    height: { value: '', error: '' },
    weight: { value: '', error: '' },
    phone: { value: '', error: '' },
    bornDate: { value: '', error: '' },
  };

  const [formFields, setFormFields] = useState<IFormFields>(fields);

  const handleChange = (fieldName : keyof IFormFields, value : string) => {
    setFormFields({
      ...formFields,
      [fieldName]: { ...formFields[fieldName], value },
    });
  };

  //  TODO: CORRECT VALIDATIONS

  const validations = {
    name: (value : string) => (value ? '' : 'Name is required'),
    lastname: (value : string) => (value ? '' : 'Lastname is required'),
    email: (value : string) =>
      value
        ? /\S+@\S+\.\S+/.test(value)
          ? ''
          : 'Invalid email format'
        : 'Email is required',
    id: (value : string) => (value ? '' : 'ID is required'),
    password: (value : string) => (value ? '' : 'Password is required'),
    repeatPassword: (value : string) =>
      value ? (value === fields.password.value ? '' : 'Passwords do not match') : 'Repeat Password is required',
    region: (value : string) => (value ? '' : 'Region is required'),
    province: (value : string) => (value ? '' : 'Province is required'),
    district: (value : string) => (value ? '' : 'District is required'),
    address: (value : string) => (value ? '' : 'Address is required'),
    refference: (value : string) => (value ? '' : 'Refference is required'),
    interiorNumber: (value : string) => (value ? '' : 'Interior Number is required'),
    age: (value : string) => (value ? '' : 'Age is required'),
    height: (value : string) => (value ? '' : 'Height is required'),
    weight: (value : string) => (value ? '' : 'Weight is required'),
    phone: (value : string) => (value ? '' : 'Phone is required'),
    bornDate: (value : string) => (value ? '' : 'Born Date is required'),
    };

  const validateField = (fieldName : keyof IFormFields) => {
    const value = formFields[fieldName].value;
    const error = validations[fieldName](value);
    setFormFields({
      ...formFields,
      [fieldName]: { ...formFields[fieldName], error },
    });
  };

  const validateAllFields = (paramsToValidate : (keyof IFormFields)[]) => {
    paramsToValidate.forEach((fieldName) => {
      validateField(fieldName);
    });
  };

  const handleRegister = (type: string) => {

    const generalField = ["name", "lastname", "email", "id", "password", "repeatPassword"] as (keyof IFormFields)[];
    const locationField = ["region", "province", "district", "address", "refference", "interiorNumber"] as (keyof IFormFields)[];
    const infoField = ["age", "height", "weight", "phone", "bornDate"] as (keyof IFormFields)[];

    switch (type) {
      case 'general':
        validateAllFields(generalField);
        return generalField.every((field) => !formFields[field].error);
      case 'location':
        validateAllFields(locationField as (keyof IFormFields)[]);
        return locationField.every((field) => !formFields[field].error);
      case 'info':
        validateAllFields(infoField as (keyof IFormFields)[]);
        return locationField.every((field) => !formFields[field].error);
      default:
        return false;
    }
  };

  return {
    formFields,
    handleChange,
    handleRegister
  };
};

export default useRegister;