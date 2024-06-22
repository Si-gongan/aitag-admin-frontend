'use client';

import { useDataStore } from '@/providers/data-store-provider';
import { getData } from '@/services/main';
import { StateType } from '@/services/main/schema';
import { SORT_BUTTONS } from '@/utils/constants';
import { useCallback } from 'react';

export default function SortButtons() {
  const { state, setState, page, setDatas } = useDataStore((state) => state);

  const fetchPageData = useCallback(async () => {
    const response = await getData({ target: 'all', state: state as StateType, page: String(page) });

    setDatas(response.data);
  }, [page, setDatas, state]);

  const handleChangeState = (sortId: string) => {
    setState(sortId);
    fetchPageData();
  };

  return (
    <div className="flex items-center gap-40">
      {SORT_BUTTONS.map((sort) => (
        <button
          key={sort.text}
          onClick={() => handleChangeState(sort.id)}
          className={`flex items-center justify-center rounded-lg w-108 h-40 text-18 ${
            sort.id === state ? 'bg-gray-400 text-white' : 'bg-gray-100'
          }`}>
          {sort.text}
        </button>
      ))}
    </div>
  );
}
