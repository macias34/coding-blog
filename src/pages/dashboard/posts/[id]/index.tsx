import { Card, Stack } from "@mantine/core";
import { TextIcon } from "lucide-react";
import { useRouter } from "next/router";

import { Layout, PageHeader } from "@/modules/dashboard";
import { ManagePostForm, useFindPost } from "@/modules/post";

export default function DashboardPost() {
  const { query } = useRouter();
  const postId = query?.id ? Number.parseInt(query.id as string) : -1;

  const { post } = useFindPost({ postId });

  return (
    <Layout>
      <Stack gap="xl">
        <PageHeader>
          <PageHeader.TitleGroup>
            <PageHeader.Icon as={<TextIcon size={36} />} />
            <PageHeader.Title>Post</PageHeader.Title>
          </PageHeader.TitleGroup>
          <PageHeader.Description>Manage post content</PageHeader.Description>
        </PageHeader>
        <Card p="xl" className="flex flex-col items-start">
          {post && <ManagePostForm post={post} />}
        </Card>
      </Stack>
    </Layout>
  );
}
