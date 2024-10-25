'use client';

import { usePostStore } from '@/providers/post-store-provider';
import Button from '../common/Button';
import { patchComment, patchInspect } from '@/services/post';

interface EditButtonsProps {
  onClose: () => void;
}

export default function EditButtons({ onClose }: EditButtonsProps) {
  const { post, postId, editWork, fetchPost } = usePostStore((state) => ({
    post: state.post,
    postId: state.postId,
    editWork: state.editWork,
    fetchPost: state.fetchPost,
  }));

  const handleSubmit = async () => {
    if (!editWork?.answer) return;

    if (post?.target === undefined) {
      const response = await patchInspect(postId, editWork?.id, editWork?.answer);
    } else {
      const response = await patchComment(postId, editWork?.id, editWork?.answer);
    }

    fetchPost(postId);
    onClose();
  };

  return (
    <div className="flex justify-end gap-19 w-full">
      <Button text="취소" onClick={onClose} />
      <Button text="저장" onClick={handleSubmit} />
    </div>
  );
}
