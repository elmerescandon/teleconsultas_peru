interface IRegisterDoctor{
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
    specialities: string[],
    cmpNumber: File | null,
    curriculum: File | null,
    phone: string,
    termsAndConditions: string,
}