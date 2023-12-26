import { useMutation } from "@tanstack/react-query";
import { signIn as nextAuthSignIn } from "next-auth/react";

import { request } from "@/shared/utils";

import { type Credentials, type Session } from "../domain";

interface SignInArguments {
  credentials: Credentials;
}

export const signIn = async ({ credentials }: SignInArguments) => {
  return (await request.post<Session>("/auth/sign-in", credentials)).data;
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: ({ credentials }: SignInArguments) =>
      nextAuthSignIn("credentials", { ...credentials }),
  });
};
