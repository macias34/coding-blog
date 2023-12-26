import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";

import { useSignInForm } from "./use-sign-in-form";

interface SignInFormProps {}

export const SignInForm = ({}: SignInFormProps) => {
  const { handleSubmit, getInputProps, errors, isPending } = useSignInForm();

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
        <Button loading={isPending} type="submit">
          Sign in
        </Button>
      </Stack>
    </form>
  );
};
