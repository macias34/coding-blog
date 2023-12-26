import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { request } from "@/shared/utils";

import { type Post } from "../domain";

interface CreatePostDto {
  authorId: number;
}

const createPost = async ({ authorId }: CreatePostDto) => {
  return (await request.post<Post>("/post", { authorId })).data;
};

export const useCreatePost = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess(createdPost) {
      void router.push(`/dashboard/posts/${createdPost.id}`);
    },
  });

  return { mutate, isPending };
};
