'use client';

import { useMainStore } from '@/providers/main-store-provider';
import { getData } from '@/services/main';
import { StateType } from '@/services/main/schema';
import { useCallback, useEffect } from 'react';
import Pagination from '../common/Pagination';

interface MainPaginationProps {
  initTotalPages: number;
}

export default function MainPagination({ initTotalPages }: MainPaginationProps) {
  const { page, setPage, totalPages, setTotalPages, setDatas, state } = useMainStore((state) => state);

  const fetchPageData = useCallback(async () => {
    const response = await getData({ target: 'all', state: state as StateType, page: String(page) });

    setDatas(response.data);
  }, [state, setDatas, page]);

  useEffect(() => {
    setTotalPages(initTotalPages);
  }, [initTotalPages, setTotalPages]);

  useEffect(() => {
    fetchPageData();
  }, [page, fetchPageData]);

  return <Pagination page={page} setPage={setPage} totalPages={totalPages} />;
}
