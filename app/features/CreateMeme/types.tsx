import type { Comment } from '../Comments'
import { User } from '../User';
export type Meme = {
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

export type MemeStore = {
  memes: Meme[];
  setMeme: (meme: Meme) => void;
  setInitialData: (initialData: Meme[]) => void;
}

