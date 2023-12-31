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
        throw new Error(response?.error ?? "Something went wrong");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      toast.error({ message: error?.message });
    } finally {
      setPending(false);
    }
  };

  return {
    execute,
    isPending,
  };
};
