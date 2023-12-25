import { SignInForm, authOptions } from "@/modules/auth";
import { Card, Stack, Text, Title } from "@mantine/core";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

export default function DashboardAuth() {
  const session = useSession();
  console.log(session);

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <Card
        classNames={{
          root: "max-w-md w-full p-10",
        }}
      >
        <Stack>
          <Stack gap="xs" className="mb-2">
            <Title order={2}>Auth</Title>
            <Text size="sm">Sign in to enter the dashboard</Text>
          </Stack>
          <SignInForm />
        </Stack>
      </Card>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        statusCode: 302,
      },
    };
  }

  return {
    props: {},
  };
};
