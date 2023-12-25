import { useForm, zodResolver } from "@mantine/form";
import { Credentials, CredentialsSchema } from "../../domain";
import { useSignIn } from "../../use-case";

export const useSignInForm = () => {
  const { mutate, isPending } = useSignIn();

  const { getInputProps, onSubmit, errors } = useForm<Credentials>({
    validate: zodResolver(CredentialsSchema),
  });

  const handleSubmit = onSubmit((credentials: Credentials) => {
    mutate({ credentials });
  });

  return {
    getInputProps,
    handleSubmit,
    errors,
    isPending,
  };
};
