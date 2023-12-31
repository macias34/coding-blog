import { User as DomainUser } from "@/modules/auth";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    user: DomainUser;
    accessToken: string;
  }

  interface Session {
    user: DomainUser;
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: DomainUser;
    accessToken?: string;
  }
}
