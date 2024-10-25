'use client';

import { usePostStore } from '@/providers/post-store-provider';
import useGetPathname from '@/utils/getPathname';
import { useEffect } from 'react';

interface PostTitleProps {
  postId: string;
}

export default function PostTitle({ postId }: PostTitleProps) {
  const pathname = useGetPathname();
  const { setPostId, fetchPost, post, setPathname } = usePostStore((state) => ({
    setPostId: state.setPostId,
    fetchPost: state.fetchPost,
    post: state.post,
    setPathname: state.setPathname,
  }));

  useEffect(() => {
    setPostId(postId);
    setPathname(pathname);
    fetchPost(postId);
  }, [fetchPost, pathname, postId, setPathname, setPostId]);

  return (
    <div className="flex flex-col gap-25">
      <h2 className="text-36">{post?.title}</h2>
      {post?.detail && (
        <div className="flex flex-col gap-14 w-full text-24">
          {post.target ? '해설진 작성 세부 요청서' : '해설진 검수 세부 요청서'}
          <p className="flex p-20 bg-gray-100 text-24">{post?.detail}</p>
        </div>
      )}
    </div>
  );
}
