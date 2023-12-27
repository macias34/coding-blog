import { signIn as nextAuthSignIn } from "next-auth/react";
import Router from "next/router";
import { useState } from "react";

import { request, toast } from "@/shared/utils";

import { type Credentials, type Session } from "../domain";

interface SignInArguments {
  credentials: Credentials;
}

export const signIn = async ({ credentials }: SignInArguments) => {
  return (await request.post<Session>("/auth/sign-in", credentials)).data;
};

export const useSignIn = () => {
  const [isPending, setPending] = useState(false);

  const execute = async (credentials: Credentials) => {
    setPending(true);
    try {
      const response = await nextAuthSignIn("credentials", {
        ...credentials,
        redirect: false,
      });
      if (response?.ok) {
        await Router.push("/dashboard");

        toast.success({ message: "You have been signed in" });
      } else {
        throw new Error("Wrong credentials.");
      }
    } catch {
      toast.error({ message: "You haven't been signed in" });
    } finally {
      setPending(false);
    }
  };

  return {
    execute,
    isPending,
  };
};
