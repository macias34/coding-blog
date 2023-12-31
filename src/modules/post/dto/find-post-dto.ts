import { z } from "zod";

export const findPostDtoSchema = z.object({
  postId: z.number().int().positive(),
});

export type FindPostDto = z.infer<typeof findPostDtoSchema>;
