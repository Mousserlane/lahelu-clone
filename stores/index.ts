import { create } from 'zustand'
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createPostStore } from './postStore';
import type { PostStore } from '../features/CreatePost';

export type Stores = PostStore

const asyncStorageConfig: StateStorage = {
  setItem: async (key: string, val: string) => await AsyncStorage.setItem(key, val),
  getItem: async (key: string) => await AsyncStorage.getItem(key),
  removeItem: async (key: string) => await AsyncStorage.removeItem(key)
}

export const useGlobalStore = create<Stores, [["zustand/persist", Pick<Stores, "posts">]]>(persist((...a) => ({
  ...createPostStore(...a)
}), {
  name: 'lahelu_store',
  storage: createJSONStorage(() => asyncStorageConfig)
}))