import { z } from "zod";

export const createPostDtoSchema = z.object({
  authorId: z.number().int().positive(),
});

export type CreatePostDto = z.infer<typeof createPostDtoSchema>;
