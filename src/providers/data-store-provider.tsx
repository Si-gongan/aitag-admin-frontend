'use client';

import { CreateDataStoreType, createDataStore } from '@/stores/data-store';
import { ReactNode, createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';

export type DataStoreApi = ReturnType<typeof createDataStore>;

export const DataStoreContext = createContext<DataStoreApi | undefined>(undefined);

export interface DataStoreProviderProps {
  children: ReactNode;
}

export const DataStoreProvider = ({ children }: DataStoreProviderProps) => {
  const storeRef = useRef<DataStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createDataStore();
  }

  return <DataStoreContext.Provider value={storeRef.current}>{children}</DataStoreContext.Provider>;
};

export const useDataStore = <T,>(selector: (store: CreateDataStoreType) => T): T => {
  const dataStoreContext = useContext(DataStoreContext);

  if (!dataStoreContext) {
    throw new Error(`useDataStore은 반드시 DataStoreProvider 안에서 사용해야 해요!`);
  }

  return useStore(dataStoreContext, selector);
};
