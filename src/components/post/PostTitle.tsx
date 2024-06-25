'use client';

import { usePostStore } from '@/providers/post-store-provider';
import { useEffect } from 'react';

interface PostTitleProps {
  postId: string;
}

export default function PostTitle({ postId }: PostTitleProps) {
  const { setPostId, fetchPost, post } = usePostStore((state) => state);

  useEffect(() => {
    setPostId(postId);
    fetchPost(postId);
  }, [postId, setPostId, fetchPost]);

  return (
    <div className="flex flex-col gap-25">
      <h2 className="text-36">{post?.title}</h2>
      {post?.detail && (
        <div className="flex flex-col gap-14 w-full text-24">
          해설진 작성 세부 요청서
          <p className="flex p-20 bg-gray-100 text-24">{post?.detail}</p>
        </div>
      )}
    </div>
  );
}
