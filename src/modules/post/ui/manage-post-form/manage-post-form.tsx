import { Button, Stack, TextInput } from "@mantine/core";

import { type Post } from "../../domain";
import { useManagePostForm } from "./use-manage-post-form";

interface ManagePostFormProps {
  post: Post;
}

export const ManagePostForm = ({ post }: ManagePostFormProps) => {
  const { getInputProps, errors, updatePost, isPending } =
    useManagePostForm(post);

  return (
    <form onSubmit={updatePost} className="w-full">
      <Stack gap="md" className="w-full">
        <TextInput
          {...getInputProps("title")}
          error={errors.title}
          label="Title"
          size="lg"
        />

        <Button
          loading={isPending}
          type="submit"
          variant="light"
          className="w-fit"
        >
          Save
        </Button>
      </Stack>
    </form>
  );
};
