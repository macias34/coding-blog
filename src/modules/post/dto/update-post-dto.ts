import { z } from "zod";

export const updatePostDtoSchema = z.object({
  postId: z.number().int().positive(),
  authorId: z.number().int().positive().optional(),
  title: z.string().min(3).max(100).optional(),
  content: z.string().min(3).optional(),
  excerpt: z.string().min(3).max(100).optional(),
});

export type UpdatePostDto = z.infer<typeof updatePostDtoSchema>;
