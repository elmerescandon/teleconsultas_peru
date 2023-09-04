import Ispeciality from "../Interfaces/dataModel/ISpeciality";

const specialitiesMockup : Ispeciality[] = [
    {
      "_id": "speciality1",
      "name": "Cardiologia",
      "description": "Se enfoca en salud del corazón",
      "doctors": ["doctor1", "doctor2"],
      "other_fields": {}
    },
    {
      "_id": "speciality2",
      "name": "Dermatología",
      "description": "Se enfoca en salud de la piel",
      "doctors": ["doctor3"],
      "other_fields": {}
    },
    {
      "_id": "speciality3",
      "name": "Ortopedia",
      "description": "Se enfoca en salud de los huesos",
      "doctors": ["doctor4", "doctor5"],
      "other_fields": {}
    },
    {
      "_id": "speciality4",
      "name": "Gastroenterología",
      "description": "Se enfoca en salud del sistema digestivo",
      "doctors": ["doctor6"],
      "other_fields": {}
    },
    {
      "_id": "speciality5",
      "name": "Neurología",
      "description": "Se enfoca en salud del sistema nervioso",
      "doctors": ["doctor7"],
      "other_fields": {}
    },
    {
      "_id": "speciality6",
      "name": "Medicina Interna",
      "description": "Se enfoca en salud general",
      "doctors": ["doctor1"],
      "other_fields": {}
    }
  ]

export default specialitiesMockup;