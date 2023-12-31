import { Card, Stack } from "@mantine/core";
import { useRouter } from "next/router";

import { Layout } from "@/modules/dashboard";
import { ManagePostForm, useFindPost } from "@/modules/post";

export default function DashboardPost() {
  const { query } = useRouter();
  const postId = query?.id ? Number.parseInt(query.id as string) : -1;

  const { post } = useFindPost({ postId });

  const pageName = `Manage post ${post?.title ?? postId} `;

  return (
    <Layout pageName={pageName}>
      <Stack gap="xl">
        <Card p="lg" className="flex flex-col items-start">
          {post && <ManagePostForm post={post} />}
        </Card>
      </Stack>
    </Layout>
  );
}
