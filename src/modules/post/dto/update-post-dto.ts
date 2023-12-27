import { z } from "zod";

export const updatePostDtoSchema = z.object({
  id: z.number().int().positive(),
  authorId: z.number().int().positive(),
  title: z.string().min(3).max(100).nullable().optional(),
  content: z.string().min(3).nullable().optional(),
  excerpt: z.string().min(3).max(100).nullable().optional(),
});

export type UpdatePostDto = z.infer<typeof updatePostDtoSchema>;
