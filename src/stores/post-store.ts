import { getInspectDetail, getPostDetail } from '@/services/post';
import { WorksType, getPostDetailType } from '@/services/post/schema';
import { POST_LIST_PAGE_LIMIT } from '@/utils/constants';
import { createStore } from 'zustand';

export type PostStateType = {
  postId: string;
  pathname: string;
  post: getPostDetailType | null;
  selectedWorks: WorksType[];
  page: number;
  editWork: WorksType | null;
};

export type PostActionsType = {
  setPostId: (postId: string) => void;
  setPathname: (pathname: string) => void;
  fetchPost: (postId: string) => Promise<void>;
  addSelectedWork: (newWork: WorksType) => void;
  deleteSelectedWork: (workId: string) => void;
  resetSelectedWork: () => void;
  selectAllCurrentPageWorks: (clickedAll: boolean) => void;
  setPage: (page: number) => void;
  setEditWork: (editWork: WorksType) => void;
};

export type CreatePostStoreType = PostStateType & PostActionsType;

export const defaultPost: PostStateType = {
  postId: '',
  pathname: '',
  post: null,
  selectedWorks: [],
  page: 1,
  editWork: null,
};

export const createPostStore = (initState: PostStateType = defaultPost) => {
  return createStore<CreatePostStoreType>()((set, get) => ({
    ...initState,
    setPostId: (postId: string) => set(() => ({ postId })),
    setPathname: (pathname: string) => set(() => ({ pathname })),
    fetchPost: async (postId: string) => {
      const { pathname } = get();

      if (pathname === 'post') {
        const response = await getPostDetail(postId);
        set({ post: response });
      } else if (pathname === 'inspect') {
        const response = await getInspectDetail(postId);
        set({ post: response });
      }
    },
    addSelectedWork: (newWork: WorksType) =>
      set((state) => ({
        selectedWorks: [...state.selectedWorks, newWork],
      })),
    deleteSelectedWork: (workId: string) =>
      set((state) => ({
        selectedWorks: state.selectedWorks.filter((work) => work.id !== workId),
      })),
    resetSelectedWork: () => set(() => ({ selectedWorks: [] })),
    selectAllCurrentPageWorks: (clickedAll: boolean) => {
      const { post, selectedWorks, page } = get();
      const startIndex = (page - 1) * POST_LIST_PAGE_LIMIT;
      const endIndex = startIndex + POST_LIST_PAGE_LIMIT;
      const currentWorks = post?.works.slice(startIndex, endIndex) || [];
      let newSelectedWorks = [...selectedWorks];

      if (!clickedAll) {
        currentWorks.forEach((work) => {
          if (!newSelectedWorks.some((selectedWork) => selectedWork.id === work.id)) {
            newSelectedWorks.push(work);
          }
        });
      } else {
        newSelectedWorks = selectedWorks.filter(
          (selectedWork) => !currentWorks.some((work) => work.id === selectedWork.id)
        );
      }

      set({ selectedWorks: newSelectedWorks });
    },
    setPage: (page: number) => set(() => ({ page })),
    setEditWork: (editWork: WorksType) => set(() => ({ editWork })),
  }));
};
