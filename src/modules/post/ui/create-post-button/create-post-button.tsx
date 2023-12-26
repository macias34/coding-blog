import { Button } from "@mantine/core";

import { useCreatePostButton } from "./use-create-post-button";

export const CreatePostButton = () => {
  const { onClick, isPending } = useCreatePostButton();

  return (
    <Button onClick={onClick} loading={isPending}>
      Create post
    </Button>
  );
};
