import { useMutation } from "@tanstack/react-query";

import { request } from "@/shared/utils";

interface CreatePostDto {
  authorId: number;
}

const createPost = async ({ authorId }: CreatePostDto) => {
  return (await request.post<void>("/post", { authorId })).data;
};

export const useCreatePost = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {},
  });

  return { mutate, isPending };
};
