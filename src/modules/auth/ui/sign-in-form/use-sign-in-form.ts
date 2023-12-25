import { useForm, zodResolver } from "@mantine/form";
import { Credentials, CredentialsSchema } from "../../domain";
import { signIn } from "next-auth/react";
import { useState } from "react";

export const useSignInForm = () => {
  const [isLoading, setLoading] = useState(false);

  const { getInputProps, onSubmit, errors } = useForm<Credentials>({
    validate: zodResolver(CredentialsSchema),
  });

  const handleSubmit = onSubmit((credentials: Credentials) => {
    setLoading(true);

    signIn("credentials", { ...credentials }).finally(() => {
      setLoading(false);
    });
  });

  return {
    getInputProps,
    handleSubmit,
    errors,
    isLoading,
  };
};
