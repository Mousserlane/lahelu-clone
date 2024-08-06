import type { User } from '../User'
export type Comment = {
  date: Date;
  author: User;
  content: string;
  replies: Comment[];
  likedByOP: boolean
}