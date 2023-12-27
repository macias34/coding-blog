import { useForm, zodResolver } from "@mantine/form";

import { type Post } from "../../domain";
import { type UpdatePostDto, updatePostDtoSchema } from "../../dto";
import { useUpdatePost } from "../../use-case";

export const useManagePostForm = (post: Post) => {
  const { author, ...postWithoutAuthor } = post;

  const { getInputProps, errors, onSubmit, validateField, setValues } =
    useForm<UpdatePostDto>({
      validate: zodResolver(updatePostDtoSchema),
      initialValues: {
        ...postWithoutAuthor,
        authorId: author.id,
      },
    });

  const { execute, isPending } = useUpdatePost();

  const updatePost = onSubmit((updatePostDto) => {
    execute(updatePostDto);
  });

  const setContent = (content: string) => {
    setValues({ content });
  };

  const validateContent = () => {
    validateField("content");
  };

  return {
    isPending,
    getInputProps,
    errors,
    updatePost,
    setContent,
    validateContent,
  };
};
