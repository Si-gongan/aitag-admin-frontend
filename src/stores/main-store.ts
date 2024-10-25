import { createStore } from 'zustand/vanilla';
import { DataType, StateType, TargetType, getDataParamsType } from '@/services/main/schema';
import { getData } from '@/services/main';

export type MainStateType = {
  datas: DataType[];
  target: TargetType;
  state: StateType;
  page: number;
  totalPages: number;
  search: string;
};

export type MainActionsType = {
  setDatas: (datas: DataType[]) => void;
  setTarget: (target: TargetType) => void;
  setState: (state: StateType) => void;
  setPage: (page: number) => void;
  setTotalPages: (totalPages: number) => void;
  setSearch: (search: string) => void;
  fetchDatas: () => Promise<void>;
};

export type CreateMainStoreType = MainStateType & MainActionsType;

export const defaultData: MainStateType = {
  datas: [],
  target: 'all',
  state: 'all',
  page: 1,
  totalPages: 1,
  search: '',
};

export const createMainStore = (initState: MainStateType = defaultData) => {
  return createStore<CreateMainStoreType>()((set, get) => ({
    ...initState,
    setDatas: (datas: DataType[]) => set(() => ({ datas })),
    setTarget: (target: TargetType) => set(() => ({ target })),
    setState: (state: StateType) => set(() => ({ state })),
    setPage: (page: number) => set(() => ({ page })),
    setTotalPages: (totalPages: number) => set(() => ({ totalPages })),
    setSearch: (search: string) => set(() => ({ search })),
    fetchDatas: async () => {
      const { target, state, page } = get();
      const response = await getData({ target, state, page: page.toString() });
      set({ datas: response.data, totalPages: response.totalPages });
    },
  }));
};
