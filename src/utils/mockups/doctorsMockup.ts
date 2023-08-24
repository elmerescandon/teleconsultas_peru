import IUser from "../Interfaces/dataModel/IUser";

const doctorsMockup :IUser[] = [
    {
      "_id": "doctor123",
      "role": "doctor",
      "name": "Dr. Smith",
      "email": "dr.smith@example.com",
      "password": "hashed_password",
      "specialties": ["specialty789", "specialty303"],
      "phone": "123-456-7890",
      "address": "123 Medical St, City",
      "profile_picture": "http://example.com/profile.jpg",
      "other_fields": {}
    },
    {
      "_id": "doctor456",
      "role": "doctor",
      "name": "Dr. Johnson",
      "email": "dr.johnson@example.com",
      "password": "hashed_password",
      "specialties": ["specialty123"],
      "phone": "987-654-3210",
      "address": "456 Heart Ave, Town",
      "profile_picture": "http://example.com/profile.jpg",
      "other_fields": {}
    },
    {
      "_id": "doctor789",
      "role": "doctor",
      "name": "Dr. Williams",
      "email": "dr.williams@example.com",
      "password": "hashed_password",
      "specialties": ["specialty456"],
      "phone": "555-123-4567",
      "address": "789 Skin Blvd, City",
      "profile_picture": "http://example.com/profile.jpg",
      "other_fields": {}
    },
    {
      "_id": "doctor234",
      "role": "doctor",
      "name": "Dr. Brown",
      "email": "dr.brown@example.com",
      "password": "hashed_password",
      "specialties": ["specialty789"],
      "phone": "111-222-3333",
      "address": "234 Bone St, Town",
      "profile_picture": "http://example.com/profile.jpg",
      "other_fields": {}
    },
    {
      "_id": "doctor567",
      "role": "doctor",
      "name": "Dr. Taylor",
      "email": "dr.taylor@example.com",
      "password": "hashed_password",
      "specialties": ["specialty789"],
      "phone": "444-555-6666",
      "address": "567 Joint Ave, City",
      "profile_picture": "http://example.com/profile.jpg",
      "other_fields": {}
    },
    {
      "_id": "doctor890",
      "role": "doctor",
      "name": "Dr. Davis",
      "email": "dr.davis@example.com",
      "password": "hashed_password",
      "specialties": ["specialty101"],
      "phone": "777-888-9999",
      "address": "890 Digest St, Town",
      "profile_picture": "http://example.com/profile.jpg",
      "other_fields": {}
    },
    {
      "_id": "doctor345",
      "role": "doctor",
      "name": "Dr. Martinez",
      "email": "dr.martinez@example.com",
      "password": "hashed_password",
      "specialties": ["specialty202"],
      "phone": "222-333-4444",
      "address": "345 Nerve Blvd, City",
      "profile_picture": "http://example.com/profile.jpg",
      "other_fields": {}
    }
  ]

export default doctorsMockup;