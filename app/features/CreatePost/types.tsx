import type { Comment } from '../Comments'
import { User } from '../User';
export type Post = {
  title: string;
  fileURL: string;
  isSensitive: boolean;
  isSiteCompliant: boolean;
  tags?: string[];
  comments?: Comment[];
  likes?: number;
  dislikes?: number;
  author: User
  datePosted?: Date
  sawerValue?: number
  // topicGoal?: unknown
}

export type PostStore = {
  posts: Post[];
  setPost: (post: Post) => void;
  setInitialData: (initialData: Post[]) => void;
}

