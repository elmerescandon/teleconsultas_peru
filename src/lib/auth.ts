import { loginUser } from "@/firebase/User/loginUser";
import ICredentials from "@/utils/Interfaces/API/Users/ICredentials";
import IUser from "@/utils/Interfaces/dataModel/IUser";
import { dbToUser } from "@/utils/functions/utilsReducer";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials) {
        if (credentials === undefined)
          return null
        const credentialsLogin : ICredentials = {email: credentials.email, password: credentials.password, role: credentials.role};
        const userDb = await loginUser(credentialsLogin) as IUser;
        if (userDb !== null){
            return {name: userDb._id, email: userDb.email, image: userDb.profile_picture, id: userDb._id}
        } else {
            return null;
        }        
      },
    }),
  ],
};
