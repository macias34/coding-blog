import { Button } from "@mantine/core";

import { useCreatePostButton } from "./use-create-post-button";

export const CreatePostButton = () => {
  const { createPost, isPending } = useCreatePostButton();

  return (
    <Button onClick={createPost} loading={isPending}>
      Create post
    </Button>
  );
};
