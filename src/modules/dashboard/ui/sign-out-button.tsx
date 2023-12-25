import { useSignOut } from "@/modules/auth";
import { NavLink } from "@mantine/core";
import { LogOut } from "lucide-react";

export const SignOutButton = () => {
  const { mutate } = useSignOut();

  return (
    <NavLink
      label="Wyloguj"
      onClick={() => mutate()}
      component={"button"}
      leftSection={<LogOut size="1rem" />}
    />
  );
};
