import { Avatar, Group, Text } from "@mantine/core";

interface SessionInfoProps {
  avatarSrc: string | null;
  username: string;
}

export const SessionInfo = ({ avatarSrc, username }: SessionInfoProps) => {
  return (
    <Group>
      <Avatar color="green" src={avatarSrc} />
      <Text size="sm" className="font-semibold">
        {username}
      </Text>
    </Group>
  );
};
