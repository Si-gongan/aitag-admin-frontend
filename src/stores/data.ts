import { createStore } from 'zustand/vanilla';
import { DataType } from '@/services/main/schema';

export type DataStateType = {
  listData: DataType[];
  state: string;
  page: number;
  totalPage: number;
  search: string;
};

export type DataActionsType = {
  setListData: (istData: DataType[]) => void;
  setState: (state: string) => void;
  setPage: (page: number) => void;
  setTotalPage: (totalPage: number) => void;
  setSearch: (search: string) => void;
};

export type CreateDataStoreType = DataStateType & DataActionsType;

export const defaultData: DataStateType = {
  listData: [],
  state: 'all',
  page: 1,
  totalPage: 1,
  search: '',
};

export const createDataStore = (initState: DataStateType = defaultData) => {
  return createStore<CreateDataStoreType>()((set) => ({
    ...initState,
    setListData: (listData: DataType[]) => set(() => ({ listData })),
    setState: (state: string) => set(() => ({ state })),
    setPage: (page: number) => set(() => ({ page })),
    setTotalPage: (totalPage: number) => set(() => ({ totalPage })),
    setSearch: (search: string) => set(() => ({ search })),
  }));
};
