import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    username: string;
    accessToken: string;
  }

  interface Session {
    user: User | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username: string;
    accessToken?: string;
  }
}
