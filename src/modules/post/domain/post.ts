import { type User } from "@/modules/auth";

export interface Post {
  id: number;
  title: string | null;
  excerpt: string | null;
  content: string | null;
  createdAt: string;
  updatedAt: string;
  author: User;
}
