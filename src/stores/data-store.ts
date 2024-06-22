import { createStore } from 'zustand/vanilla';
import { DataType } from '@/services/main/schema';

export type DataStateType = {
  datas: DataType[];
  state: string;
  page: number;
  totalPages: number;
  search: string;
};

export type DataActionsType = {
  setDatas: (datas: DataType[]) => void;
  setState: (state: string) => void;
  setPage: (page: number) => void;
  setTotalPages: (totalPages: number) => void;
  setSearch: (search: string) => void;
};

export type CreateDataStoreType = DataStateType & DataActionsType;

export const defaultData: DataStateType = {
  datas: [],
  state: 'all',
  page: 1,
  totalPages: 1,
  search: '',
};

export const createDataStore = (initState: DataStateType = defaultData) => {
  return createStore<CreateDataStoreType>()((set) => ({
    ...initState,
    setDatas: (datas: DataType[]) => set(() => ({ datas })),
    setState: (state: string) => set(() => ({ state })),
    setPage: (page: number) => set(() => ({ page })),
    setTotalPages: (totalPages: number) => set(() => ({ totalPages })),
    setSearch: (search: string) => set(() => ({ search })),
  }));
};
