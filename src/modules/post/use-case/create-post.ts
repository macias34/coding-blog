import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { request, toast } from "@/shared/utils";

import { type Post } from "../domain";
import { type CreatePostDto } from "../dto";

const createPost = async ({ authorId }: CreatePostDto) => {
  return (await request.post<Post>("/post", { authorId })).data;
};

export const useCreatePost = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess(createdPost) {
      void router.push(`/dashboard/posts/${createdPost.id}`);
      toast.success({ message: "Post created successfully" });
    },
    onError() {
      toast.error({ message: "Failed to create post" });
    },
  });

  return { mutate, isPending };
};
