interface IRegister{
    // general
    name: string,
    lastname: string,
    email: string,
    password: string,
    confirmPassword: string,
    id: string,

    // location
    region: string,
    province: string,
    district: string,
    address: string,
    reference: string,
    interiorNumber: string,

    // Info
    age: string,
    sex: string,
    height?: string,
    weight?: string,
    specialities?: string[];
    curriculum?: File | null;
    cmpNumber?: File | null;

    phone: string,
    bornDate: string,
    termsAndConditions: string;
}