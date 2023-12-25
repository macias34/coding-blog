import z from "zod";

export const CredentialsSchema = z.object({
  username: z
    .string()
    .min(3, "Username should be 3 characters minimum")
    .max(100, "Username should be 100 characters maximum"),
  password: z.string().min(3, "Password should be 3 characters minimum"),
});
