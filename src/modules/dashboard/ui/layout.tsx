import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Skeleton,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Home, TextIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { type FC, type PropsWithChildren } from "react";

import { cn } from "@/shared/utils";

import { SessionInfo } from "./session-info";
import { SignOutButton } from "./sign-out-button";

export interface LayoutProps extends PropsWithChildren {
  pageName?: string;
  classNames?: {
    children?: string;
  };
}

export const Layout: FC<LayoutProps> = ({ pageName, children, classNames }) => {
  const [opened, { toggle }] = useDisclosure();
  const session = useSession();
  const user = session?.data?.user;

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 300, lg: 300 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header px="lg">
        <Group h="100%" w="100%" px="md" className="justify-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

          {user ? (
            <SessionInfo avatarSrc={user.avatarSrc} username={user.username} />
          ) : (
            <Skeleton width={180} height={40} />
          )}
          {pageName && <Title order={5}>{pageName}</Title>}
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="xl">
        <NavLink
          label="Home"
          component={Link}
          href="/dashboard"
          leftSection={<Home size="1rem" />}
        />
        <NavLink
          label="Posts"
          component={Link}
          href="/dashboard/posts"
          leftSection={<TextIcon size="1rem" />}
        />
        <SignOutButton />
      </AppShell.Navbar>
      <AppShell.Main m="xl" className={cn(classNames?.children)}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
};
