import { AppShell, Burger, Group, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  ShoppingCart,
  Wand,
  LogOut,
  Pen,
  Box,
  BarChart4,
  Percent,
  BookMarked,
  Home,
  TextIcon,
} from "lucide-react";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { cn } from "@/shared/utils";
import Image from "next/image";

export interface LayoutProps extends PropsWithChildren {
  classNames?: {
    children?: string;
  };
}

export const Layout: FC<LayoutProps> = ({ children, classNames }) => {
  const [opened, { toggle }] = useDisclosure();

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
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Link
            href="/"
            style={{
              position: "relative",
              aspectRatio: "848/503",
              height: "3.5rem",
            }}
          >
            <Image src={"/logo.png"} alt="logo" fill />
          </Link>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="xl">
        <NavLink
          label="Home"
          component={Link}
          href="/"
          leftSection={<Home size="1rem" />}
        />
        <NavLink
          label="Posts"
          component={Link}
          href="/posts"
          leftSection={<TextIcon size="1rem" />}
        />
      </AppShell.Navbar>
      <AppShell.Main my="xl" className={cn("mx-44", classNames?.children)}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
};
