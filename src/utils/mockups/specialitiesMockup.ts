import ISpecialty from "../Interfaces/dataModel/ISpeciality";

const specialitiesMockup : ISpecialty[] = [
    {
      "_id": "specialty123",
      "name": "Cardiologia",
      "description": "Se enfoca en salud del corazón",
      "doctors": ["doctor123", "doctor456"],
      "other_fields": {}
    },
    {
      "_id": "specialty456",
      "name": "Dermatología",
      "description": "Se enfoca en salud de la piel",
      "doctors": ["doctor789"],
      "other_fields": {}
    },
    {
      "_id": "specialty789",
      "name": "Ortopedia",
      "description": "Se enfoca en salud de los huesos",
      "doctors": ["doctor234", "doctor567"],
      "other_fields": {}
    },
    {
      "_id": "specialty101",
      "name": "Gastroenterología",
      "description": "Se enfoca en salud del sistema digestivo",
      "doctors": ["doctor890"],
      "other_fields": {}
    },
    {
      "_id": "specialty202",
      "name": "Neurología",
      "description": "Se enfoca en salud del sistema nervioso",
      "doctors": ["doctor345"],
      "other_fields": {}
    },
    {
      "_id": "specialty303",
      "name": "Medicina Interna",
      "description": "Se enfoca en salud general",
      "doctors": ["doctor123"],
      "other_fields": {}
    }
  ]

export default specialitiesMockup;