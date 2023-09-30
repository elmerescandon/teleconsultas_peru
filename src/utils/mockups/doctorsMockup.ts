import IUser from "../Interfaces/dataModel/IUser";

const doctorsMockup :IUser[] = [
    {
      "_id": "doctor1",
      "role": "doctor",
      "name": "Dr. Smith",
      "lastName": "Smith",
      "email": "dr.smith@example.com",
      "password": "hashed_password",
      "specialities": ["speciality1", "speciality6"],
      "phone": "123-456-7890",
      "address": "123 Medical St, City",
      "profile_picture": "http://example.com/profile.jpg",
      "other_fields": {}
    },
    {
      "_id": "doctor2",
      "role": "doctor",
      "name": "Dr. Johnson",
      "lastName": "Johnson",
      "email": "dr.johnson@example.com",
      "password": "hashed_password",
      "specialities": ["speciality1"],
      "phone": "987-654-3210",
      "address": "456 Heart Ave, Town",
      "profile_picture": "http://example.com/profile.jpg",
      "other_fields": {}
    },
    {
      "_id": "doctor3",
      "role": "doctor",
      "name": "Dr. Williams",
      "lastName": "Williams",
      "email": "dr.williams@example.com",
      "password": "hashed_password",
      "specialities": ["speciality2"],
      "phone": "555-123-4567",
      "address": "789 Skin Blvd, City",
      "profile_picture": "http://example.com/profile.jpg",
      "other_fields": {}
    },
    {
      "_id": "doctor4",
      "role": "doctor",
      "name": "Dr. Brown",
      "lastName": "Brown",
      "email": "dr.brown@example.com",
      "password": "hashed_password",
      "specialities": ["speciality3"],
      "phone": "111-222-3333",
      "address": "234 Bone St, Town",
      "profile_picture": "http://example.com/profile.jpg",
      "other_fields": {}
    },
    {
      "_id": "doctor5",
      "role": "doctor",
      "name": "Dr. Taylor",
      "lastName": "Taylor", 
      "email": "dr.taylor@example.com",
      "password": "hashed_password",
      "specialities": ["speciality3"],
      "phone": "444-555-6666",
      "address": "567 Joint Ave, City",
      "profile_picture": "http://example.com/profile.jpg",
      "other_fields": {}
    },
    {
      "_id": "doctor6",
      "role": "doctor",
      "name": "Dr. Davis",
      "lastName": "Davis",
      "email": "dr.davis@example.com",
      "password": "hashed_password",
      "specialities": ["speciality4"],
      "phone": "777-888-9999",
      "address": "890 Digest St, Town",
      "profile_picture": "http://example.com/profile.jpg",
      "other_fields": {}
    },
    {
      "_id": "doctor7",
      "role": "doctor",
      "name": "Dr. Martinez",
      "lastName": "Martinez",
      "email": "dr.martinez@example.com",
      "password": "hashed_password",
      "specialities": ["speciality5"],
      "phone": "222-333-4444",
      "address": "345 Nerve Blvd, City",
      "profile_picture": "http://example.com/profile.jpg",
      "other_fields": {}
    }
  ]

export default doctorsMockup;