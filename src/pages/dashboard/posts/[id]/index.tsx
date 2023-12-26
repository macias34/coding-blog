import { Card, Stack } from "@mantine/core";
import { TextIcon } from "lucide-react";

import { Layout, PageHeader } from "@/modules/dashboard";

export default function DashboardPost() {
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
        <Card p="xl" className="flex flex-col items-start"></Card>
      </Stack>
    </Layout>
  );
}
