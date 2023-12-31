import { useForm, zodResolver } from "@mantine/form";

import { type Credentials, CredentialsSchema } from "../../domain";
import { useSignIn } from "../../use-case";

// eslint-disable-next-line max-lines-per-function
export const useSignInForm = () => {
  const { execute, isPending } = useSignIn();

  const { getInputProps, onSubmit, errors } = useForm<Credentials>({
    validate: zodResolver(CredentialsSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  const handleSubmit = onSubmit(execute);

  return {
    getInputProps,
    handleSubmit,
    errors,
    isPending,
  };
};
