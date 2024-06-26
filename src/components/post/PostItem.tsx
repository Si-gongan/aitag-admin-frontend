'use client';

import { PostTargetType, WorksType } from '@/services/post/schema';
import CheckBox from '../common/CheckBox';
import Image from 'next/image';
import Button from '../common/Button';
import { useEffect, useState } from 'react';
import { usePostStore } from '@/providers/post-store-provider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface PostItemProps {
  work: WorksType;
}

export default function PostItem({ work }: PostItemProps) {
  const [checked, setChecked] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const router = useRouter();

  const { postId, post, selectedWorks, addSelectedWork, deleteSelectedWork, setEditWork } = usePostStore((state) => ({
    postId: state.postId,
    post: state.post,
    selectedWorks: state.selectedWorks,
    addSelectedWork: state.addSelectedWork,
    deleteSelectedWork: state.deleteSelectedWork,
    setEditWork: state.setEditWork,
  }));

  const isInspect = post && post.target === undefined;
  const answerText = isInspect ? work.after || '' : work.answer || '없음';
  const buttonText = isInspect === undefined ? '작성' : '수정';

  const thumbnail =
    typeof work.image === 'string' && work.image.startsWith('https://gongbang-v2')
      ? work.image
      : '/images/default-thumbnail.png';

  const handleClick = () => {
    const findSelectedWork = selectedWorks.find((selectedWork) => selectedWork.id === work.id);

    if (!checked && !findSelectedWork) {
      addSelectedWork(work);
    } else deleteSelectedWork(work.id);
  };

  const handleEdit = () => {
    setEditWork(work);
    router.push(`/post/${postId}/edit`);
  };

  useEffect(() => {
    const isWorkSelected = selectedWorks.some((selectedWork) => selectedWork.id === work.id);
    setChecked(isWorkSelected);
  }, [selectedWorks, work.id]);

  return (
    <section className="flex gap-12 items-center w-436 h-142 px-10 bg-gray-100 rounded-10">
      <CheckBox clicked={checked} onClick={handleClick} />
      <div className="relative w-77 h-74">
        <Image
          src={thumbnail}
          alt={`${work.id}의 썸네일`}
          sizes="30vw"
          fill
          placeholder="blur"
          blurDataURL="/images/default-thumbnail.png"
        />
      </div>
      <div className="flex flex-col items-end">
        <p className="w-292 h-48 text-13 leading-16 line-clamp-3">{answerText}</p>
        {post && post.target !== 'ai' && (
          // <Link href={`/post/${post.id}/edit`}>
          <Button text={buttonText} size="small" onClick={handleEdit} />
          // </Link>
        )}
      </div>
    </section>
  );
}
