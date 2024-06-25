'use client';

import { usePostStore } from '@/providers/post-store-provider';
import Pagination from '../common/Pagination';

export default function PostPagination() {
  const { page, setPage, post } = usePostStore((state) => state);

  const totalPages = post ? Math.ceil(post.works.length / 9) : 1;

  return <Pagination page={page} setPage={setPage} totalPages={totalPages} />;
}
