
type IRegisterActionSetGeneral ={
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

type IRegisterActionSetLocation ={
    type: 'SET_LOCATION',
    payload: {
        region: string,
        province: string,
        district: string,
        address: string,
        refference: string,
        interiorNumber: string,
    }
}

type IRegisterActionSetInfo ={
    type: 'SET_INFO',
    payload: {
        age: string,
        height: string,
        weight: string,
        phone: string,
        bornDate: string,
    }
}

type IRegisterActions = IRegisterActionSetGeneral | IRegisterActionSetLocation | IRegisterActionSetInfo;

export default IRegisterActions;