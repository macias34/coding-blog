import { Card, Stack } from "@mantine/core";

import { Layout } from "@/modules/dashboard";
import { CreatePostButton } from "@/modules/post";

export default function DashboardPosts() {
  return (
    <Layout pageName="Posts">
      <Stack gap="xl">
        <Card p="xl" className="flex flex-col items-start">
          <CreatePostButton />
        </Card>
      </Stack>
    </Layout>
  );
}
