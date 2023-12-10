enum Routes{
    HOME = '/',
    POLICY = '/policy',
    TERMS = '/terms',
    CONTACT_US = '/contact_us',
    LOGIN = '/login',

    LOGIN_DOCTOR = '/login/doctor',
    LOGIN_PATIENT = '/login/patient',
    LOGIN_GOOGLE = '/login/google',


    REGISTER = '/register',
    REGISTER_COMPLETE = '/register/success',
    REGISTER_PATIENT_COMPLETE = '/register/patient/success',
    REGISTER_DOCTOR_COMPLETE = '/register/doctor/success',

    REGISTER_DOCTOR = '/register/doctor',
    REGISTER_PATIENT = '/register/patient',



    NOT_FOUND = '/not-found',
    PATIENTS = '/patients',
    PROFILE = '/profile',
    RESERVE_DOCTORS= '/reserve_doctors',	
    RESERVE = '/reserve',
    RESERVE_PAYMENT = '/reserve/payment',
    RESERVE_SUCCESS = '/reserve/success',
    ESPECIALITY = '/especiality',
    PATIENT_HOME = '/patient',
    PATIENT_PROFILE = '/patient/profile',
    PATIENT_HISTORY = '/patient/history',
    PATIENT_APPOINTMENTS = '/patient/appointments',

    DOCTORS = '/doctors',
    DOCTORS_GENERAL = '/doctors/general',
    DOCTORS_NUTRITIONISTS = '/doctors/nutritionists',
    DOCTORS_PSYCHOLOGISTS = '/doctors/psychologists',
    DOCTOR_HOME = '/doctor',
    DOCTOR_PROFILE = '/doctor/profile',
    DOCTOR_APPOINTMENTS = '/doctor/appointments',
}

export default Routes;