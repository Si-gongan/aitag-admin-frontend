import { getPostDetailType } from '@/services/post/schema';
import { createStore } from 'zustand';

export type PostStateType = {
  post: getPostDetailType | null;
};

export type PostActionsType = {
  setPost: (post: getPostDetailType) => void;
};

export type CreatePostStoreType = PostStateType & PostActionsType;

export const defaultPost: PostStateType = {
  post: null,
};

export const createPostStore = (initState: PostStateType = defaultPost) => {
  return createStore<CreatePostStoreType>()((set) => ({
    ...initState,
    setPost: (post: getPostDetailType) => set(() => ({ post })),
  }));
};
