import { NextAuthOptions } from "next-auth";
import z from "zod";
import CredentialsProvider from "next-auth/providers/credentials";
import { User, signIn } from "@/modules/auth";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        login: { label: "Login", type: "text" },
        password: { label: "Hasło", type: "password" },
      },

      authorize: async (credentials) => {
        const loginSchema = z.object({
          username: z.string().min(2),
          password: z.string().min(5).max(100),
        });

        const { username, password } = await loginSchema.parseAsync(
          credentials
        );

        const user = await signIn({
          credentials: { username, password },
        });

        const { accessToken } = user;

        if (!accessToken || Object.keys(accessToken).length === 0) return;

        return user as any;
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 10 * 60 * 60, // 10 hours
  },
  callbacks: {
    jwt({ token, user, session }) {
      console.log({ token, user, session });
      if (user) {
        token.user = user.user;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    session({ session, token }) {
      if (token.user && token.accessToken && session.user) {
        session.user = token.user;
        session.accessToken = token.accessToken;
      }

      return session;
    },
  },
  pages: {
    signIn: "/dashboard/auth",
  },
};
