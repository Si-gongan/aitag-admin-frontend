'use client';

import { usePostStore } from '@/providers/post-store-provider';
import Button from '../common/Button';
import { useRouter } from 'next/navigation';
import { patchComment } from '@/services/post';

export default function EditButtons() {
  const router = useRouter();

  const { postId, editWork, fetchPost } = usePostStore((state) => ({
    postId: state.postId,
    editWork: state.editWork,
    fetchPost: state.fetchPost,
  }));

  const handleClose = () => {
    router.back();
  };

  const handleSubmit = async () => {
    if (!editWork?.answer) return;

    const response = await patchComment(postId, editWork?.id, editWork?.answer);

    fetchPost(postId);
    router.back();
  };

  return (
    <div className="flex justify-end gap-19 w-full">
      <Button text="취소" onClick={handleClose} />
      <Button text="저장" onClick={handleSubmit} />
    </div>
  );
}
