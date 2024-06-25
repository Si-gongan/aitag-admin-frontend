'use client';

import { POST_LIST_PAGE_LIMIT } from '@/utils/constants';
import PostItem from './PostItem';
import { usePostStore } from '@/providers/post-store-provider';

export default function PostListSection() {
  const { post, page } = usePostStore((state) => state);

  const startIndex = (page - 1) * POST_LIST_PAGE_LIMIT;
  const indexArray = Array.from({ length: POST_LIST_PAGE_LIMIT }, (_, index) => startIndex + index);

  return (
    <section className="flex flex-wrap gap-x-46 gap-y-44">
      {indexArray.map(
        (index) =>
          post?.works[index] && <PostItem key={post?.works[index].id} work={post?.works[index]} target={post?.target} />
      )}
    </section>
  );
}
