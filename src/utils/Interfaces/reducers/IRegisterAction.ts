
type IRegisterActionSetGeneral = {
    type: 'SET_GENERAL',
    payload: {
        name: string,
        lastname: string,
        email: string,
        password: string,
        confirmPassword: string,
        id: string,
    }
}

type IRegisterActionSetLocation = {
    type: 'SET_LOCATION',
    payload: {
        region: string,
        province: string,
        district: string,
        address: string,
        reference: string,
        interiorNumber: string,
    }
}

type IRegisterActionSetInfo = {
    type: 'SET_INFO',
    payload: {
        age: string,
        sex: string,
        height: string,
        weight: string,
        phone: string,
        bornDate: string,
        termsAndConditions: string,
    }
}


type IRegisterActionSetDocInfo = {
    type: 'SET_DOCINFO',
    payload: {
        age: string,
        sex: string,
        specialities: string[],
        cmpNumber: File,
        curriculum: File,
        cmpId: string,
        phone: string,
        bornDate: string,
        termsAndConditions: string,
    }
}


export type IRegisterActions = IRegisterActionSetGeneral | IRegisterActionSetLocation | IRegisterActionSetInfo;
export type IRegisterDoctorActions = IRegisterActionSetGeneral | IRegisterActionSetLocation | IRegisterActionSetDocInfo;

