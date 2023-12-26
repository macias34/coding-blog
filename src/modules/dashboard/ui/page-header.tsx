import { Card, Group, Stack, Text, Title } from "@mantine/core";
import { type PropsWithChildren, type ReactElement } from "react";

const PageHeader = ({ children }: PropsWithChildren) => {
  return (
    <Card p="xl">
      <Stack>{children}</Stack>
    </Card>
  );
};

const PageHeaderTitleGroup = ({ children }: PropsWithChildren) => {
  return <Group gap="lg">{children}</Group>;
};

interface PageHeaderIconProps {
  as: ReactElement;
}

const PageHeaderIcon = ({ as }: PageHeaderIconProps) => {
  return <>{as}</>;
};

const PageHeaderTitle = ({ children }: PropsWithChildren) => {
  return <Title order={1}>{children}</Title>;
};
const PageHeaderDescription = ({ children }: PropsWithChildren) => {
  return <Text size="lg">{children}</Text>;
};

PageHeader.TitleGroup = PageHeaderTitleGroup;
PageHeader.Icon = PageHeaderIcon;
PageHeader.Title = PageHeaderTitle;
PageHeader.Description = PageHeaderDescription;

export { PageHeader };
