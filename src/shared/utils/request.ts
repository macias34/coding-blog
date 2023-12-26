import axios from "axios";
import { getSession } from "next-auth/react";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

request.interceptors.request.use(async (request) => {
  const session = await getSession();

  if (session) {
    request.headers.set(
      "Authorization",
      `Bearer ${session?.accessToken ?? ""}`,
    );
  }

  return request;
});
