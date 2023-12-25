import { request } from "@/shared/utils";
import { AccessToken, Credentials } from "../domain";
import { useMutation } from "@tanstack/react-query";

interface SignInArguments {
  credentials: Credentials;
}

export const signIn = async ({ credentials }: SignInArguments) => {
  return (await request.post<AccessToken>("/auth/sign-in", credentials)).data;
};
