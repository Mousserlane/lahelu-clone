import type { StateCreator } from 'zustand'
import { Meme, MemeStore } from '../features/CreateMeme/types'

export const createMemeStore: StateCreator<MemeStore, [], [], MemeStore> = (set) => ({
  memes: [],
  setInitialData: (initialData: Meme[]) => {
    set({ memes: initialData })
  },
  setMeme: (meme) => {
    set((prev: MemeStore) => ({ memes: [...prev.memes, meme] }))
  }
});