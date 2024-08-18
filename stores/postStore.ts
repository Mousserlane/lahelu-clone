import type { StateCreator } from 'zustand'
import { Post, PostStore } from '../features/CreatePost/types'

export const createPostStore: StateCreator<PostStore, [], [], PostStore> = (set) => ({
  posts: [],
  setInitialData: (initialData: Post[]) => {
    set({ posts: initialData })
  },
  setPost: (post) => {
    set((prev: PostStore) => ({ posts: [...prev.posts, post] }))
  }
});