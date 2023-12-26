import { Card, Stack } from "@mantine/core";
import { TextIcon } from "lucide-react";

import { Layout, PageHeader } from "@/modules/dashboard";
import { CreatePostButton } from "@/modules/post";

export default function DashboardPosts() {
  return (
    <Layout>
      <Stack gap="xl">
        <PageHeader>
          <PageHeader.TitleGroup>
            <PageHeader.Icon as={<TextIcon size={36} />} />
            <PageHeader.Title>Posts</PageHeader.Title>
          </PageHeader.TitleGroup>
          <PageHeader.Description>Create and edit posts</PageHeader.Description>
        </PageHeader>
        <Card p="xl" className="flex flex-col items-start">
          <CreatePostButton />
        </Card>
      </Stack>
    </Layout>
  );
}
