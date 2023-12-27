import { Button, Stack, TextInput } from "@mantine/core";

import { type Post } from "../../domain";
import { PostContentEditor } from "../post-content-editor";
import { useManagePostForm } from "./use-manage-post-form";

interface ManagePostFormProps {
  post: Post;
}

export const ManagePostForm = ({ post }: ManagePostFormProps) => {
  const {
    getInputProps,
    errors,
    updatePost,
    isPending,
    setContent,
    validateContent,
  } = useManagePostForm(post);

  return (
    <form onSubmit={updatePost} className="w-full">
      <Stack gap="md" className="w-full">
        <TextInput
          {...getInputProps("title")}
          error={errors.title}
          label="Title"
          size="lg"
        />

        <PostContentEditor
          content={post.content ?? ""}
          setContent={setContent}
          validateContent={validateContent}
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
