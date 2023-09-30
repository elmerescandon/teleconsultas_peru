import { loginUser } from "@/firebase/User/loginUser";
import ICredentials from "@/utils/Interfaces/API/Users/ICredentials";
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
        const userMock = { id: "1", name: "Admin", email: "admin@admin.com" };
        if (credentials === undefined)
          return null

        const credentialsLogin : ICredentials = {email: credentials.email, password: credentials.password, role: credentials.role};
        const user = await loginUser(credentialsLogin);
        console.log(user);
        if (userMock){
            return userMock;
        } else {
            return null;
        }
        
      },
    }),
  ],
};
