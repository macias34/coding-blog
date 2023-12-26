import { useSession } from "next-auth/react";

import { useCreatePost } from "../../use-case";

export const useCreatePostButton = () => {
  const { mutate, isPending } = useCreatePost();
  const { data } = useSession();
  const authorId = data?.user?.id ?? -1;

  const createPost = () => {
    mutate({ authorId });
  };

  return {
    isPending,
    createPost,
  };
};
