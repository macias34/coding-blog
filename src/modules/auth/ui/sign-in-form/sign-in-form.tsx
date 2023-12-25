import { TextInput, PasswordInput, Button, Stack } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { Credentials, CredentialsSchema } from "../../domain";
import { useSignInForm } from "./use-sign-in-form";

interface SignInFormProps {}

export const SignInForm = ({}: SignInFormProps) => {
  const { handleSubmit, getInputProps, errors } = useSignInForm();

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextInput
          label="Username"
          {...getInputProps("username")}
          error={errors.username}
        />
        <PasswordInput
          label="Password"
          {...getInputProps("password")}
          className="mb-4"
          error={errors.password}
        />
        <Button type="submit">Sign in</Button>
      </Stack>
    </form>
  );
};
