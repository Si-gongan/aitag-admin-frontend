'use client';

import { CreatePostStoreType, createPostStore } from '@/stores/post-store';
import { ReactNode, createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';

export type PostStoreApi = ReturnType<typeof createPostStore>;

export const PostStoreContext = createContext<PostStoreApi | undefined>(undefined);

export interface PostStoreProviderProps {
  children: ReactNode;
}

export const PostStoreProvider = ({ children }: PostStoreProviderProps) => {
  const storeRef = useRef<PostStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createPostStore();
  }

  return <PostStoreContext.Provider value={storeRef.current}>{children}</PostStoreContext.Provider>;
};

export const usePostStore = <T,>(selector: (store: CreatePostStoreType) => T): T => {
  const postStoreContext = useContext(PostStoreContext);

  if (!postStoreContext) {
    throw new Error('usePostStore은 반드시 PostStoreProvider 안에서 사용해야 해요!');
  }

  return useStore(postStoreContext, selector);
};
