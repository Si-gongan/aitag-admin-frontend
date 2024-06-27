'use client';

import { useMainStore } from '@/providers/main-store-provider';
import { useEffect } from 'react';
import Pagination from '../common/Pagination';

export default function MainPagination() {
  const { page, setPage, totalPages, fetchDatas } = useMainStore((state) => ({
    page: state.page,
    setPage: state.setPage,
    totalPages: state.totalPages,
    fetchDatas: state.fetchDatas,
  }));

  useEffect(() => {
    fetchDatas();
  }, [page, fetchDatas]);

  return <Pagination page={page} setPage={setPage} totalPages={totalPages} />;
}
