import { useForm, zodResolver } from "@mantine/form";
import { Credentials, CredentialsSchema } from "../../domain";

export const useSignInForm = () => {
  const { getInputProps, onSubmit, errors } = useForm<Credentials>({
    validate: zodResolver(CredentialsSchema),
  });

  const handleSubmit = onSubmit((credentials: Credentials) => {
    console.log(credentials);
  });

  return {
    getInputProps,
    handleSubmit,
    errors,
  };
};
