import { SignInForm } from "@/modules/auth";
import { Card, Stack, Title } from "@mantine/core";

export default function DashboardAuth() {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <Card
        classNames={{
          root: "max-w-md w-full p-10",
        }}
      >
        <Stack>
          <Title order={2}>Auth</Title>
          <SignInForm />
        </Stack>
      </Card>
    </div>
  );
}
