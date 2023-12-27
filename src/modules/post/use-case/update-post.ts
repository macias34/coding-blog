import { useMutation } from "@tanstack/react-query";

import { request, toast } from "@/shared/utils";

import { type Post } from "../domain";
import { type UpdatePostDto } from "../dto";

const updatePost = async ({ postId, ...dto }: UpdatePostDto) => {
  return (await request.patch<Post>(`/post/${postId}`, { dto })).data;
};

export const useUpdatePost = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: updatePost,
    onSuccess() {
      toast.success({ message: "Post updated successfully" });
    },
    onError() {
      toast.error({ message: "Failed to update post" });
    },
  });

  return { mutate, isPending };
};
