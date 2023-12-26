import { TextIcon } from "lucide-react";

import { Layout, PageHeader } from "@/modules/dashboard";

export default function DashboardPosts() {
  return (
    <Layout>
      <PageHeader>
        <PageHeader.TitleGroup>
          <PageHeader.Icon as={<TextIcon size={36} />} />
          <PageHeader.Title>Posts</PageHeader.Title>
        </PageHeader.TitleGroup>
        <PageHeader.Description>Create and edit posts</PageHeader.Description>
      </PageHeader>
    </Layout>
  );
}
