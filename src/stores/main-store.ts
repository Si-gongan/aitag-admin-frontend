import { createStore } from 'zustand/vanilla';
import { DataType } from '@/services/main/schema';

export type MainStateType = {
  datas: DataType[];
  state: string;
  page: number;
  totalPages: number;
  search: string;
};

export type MainActionsType = {
  setDatas: (datas: DataType[]) => void;
  setState: (state: string) => void;
  setPage: (page: number) => void;
  setTotalPages: (totalPages: number) => void;
  setSearch: (search: string) => void;
};

export type CreateMainStoreType = MainStateType & MainActionsType;

export const defaultData: MainStateType = {
  datas: [],
  state: 'all',
  page: 1,
  totalPages: 1,
  search: '',
};

export const createMainStore = (initState: MainStateType = defaultData) => {
  return createStore<CreateMainStoreType>()((set) => ({
    ...initState,
    setDatas: (datas: DataType[]) => set(() => ({ datas })),
    setState: (state: string) => set(() => ({ state })),
    setPage: (page: number) => set(() => ({ page })),
    setTotalPages: (totalPages: number) => set(() => ({ totalPages })),
    setSearch: (search: string) => set(() => ({ search })),
  }));
};
