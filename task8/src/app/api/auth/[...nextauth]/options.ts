import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("https://akil-backend.onrender.com/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const data = await res.json();
        
        // console.log("Backend response:", data);
        console.log("✅ Backend success:", data.success);
        console.log("👤 User data:", data.data);


        if (res.ok && data.data) {
          return {
            id: data.data.id,
            name: data.data.name || data.user.email,
            email: data.data.email,
            token: data.data.accessToken,
          };
        }
        console.error("❌ Login failed:", data.message || data);
        return null;

      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.token = token.accessToken;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  session: { strategy: "jwt" },
};
