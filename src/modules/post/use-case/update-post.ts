import { useMutation } from "@tanstack/react-query";

import { request, toast } from "@/shared/utils";

import { type UpdatePostDto, updatePostDtoSchema } from "../dto";

const updatePost = async ({ postId, ...dto }: UpdatePostDto) => {
  return (await request.patch<void>(`/post/${postId}`, { dto })).data;
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

  const execute = (dto: UpdatePostDto) => {
    updatePostDtoSchema.parse(dto);
    mutate(dto);
  };

  return { execute, isPending };
};
