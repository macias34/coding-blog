import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import z from "zod";

import { signIn } from "@/modules/auth";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const loginSchema = z.object({
          username: z.string().min(2),
          password: z.string().min(5).max(100),
        });

        const { username, password } =
          await loginSchema.parseAsync(credentials);

        try {
          const user = await signIn({
            credentials: { username, password },
          });

          const { accessToken } = user;

          if (!accessToken || Object.keys(accessToken).length === 0) return;

          // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any
          return user as any;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          const message: string =
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            error?.response?.data?.message ?? "Something went wrong";

          throw new Error(message);
        }
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
