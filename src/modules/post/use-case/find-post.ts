import { useQuery } from "@tanstack/react-query";

import { request } from "@/shared/utils";

import { type Post } from "../domain";
import { type FindPostDto } from "../dto";

const findPost = async ({ postId }: FindPostDto) => {
  return (await request.get<Post>(`/post/${postId}`)).data;
};

export const useFindPost = (findPostDto: FindPostDto) => {
  const { postId } = findPostDto;

  const { data: post, isPending } = useQuery({
    queryFn: () => findPost(findPostDto),
    queryKey: ["post", postId],
    enabled: postId > 0,
  });

  return { post, isPending };
};
