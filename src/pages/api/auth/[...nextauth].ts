import NextAuth, { NextAuthOptions } from "next-auth";
import z from "zod";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "@/modules/auth";

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

        const { accessToken } = await signIn({
          credentials: { username, password },
        });

        if (!accessToken || Object.keys(accessToken).length === 0) return;

        const user: { username: string; accessToken: string } = {
          username,
          accessToken,
        };

        return user as any;
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 10 * 60 * 60, // 10 hours
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    session({ session, token }) {
      if (token?.username && token?.accessToken && session.user) {
        session.user.username = token.username;
        session.user.accessToken = token.accessToken;
      }

      return session;
    },
  },
  pages: {
    signIn: "/dashboard/auth",
  },
};

export default NextAuth(authOptions);
