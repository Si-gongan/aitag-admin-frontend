'use client';

import { WorksType } from '@/services/post/schema';
import CheckBox from '../common/CheckBox';
import Image from 'next/image';
import Button from '../common/Button';
import { useState } from 'react';

interface PostItemProps {
  work: WorksType;
}

export default function PostItem({ work }: PostItemProps) {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const thumbnail =
    typeof work.image === 'string' && work.image.startsWith('https://gongbang-v2')
      ? work.image
      : '/images/default-thumbnail.png';

  return (
    <section className="flex gap-12 items-center w-436 h-142 px-10 bg-gray-100 rounded-10">
      <CheckBox clicked={false} />
      <div className="relative w-77 h-74">
        <Image
          src={thumbnail}
          alt={`${work.id}의 썸네일`}
          sizes="100vw"
          fill
          placeholder="blur"
          blurDataURL="/images/default-thumbnail.png"
        />
      </div>
      <div className="flex flex-col items-end">
        <p className="w-292 h-48 text-13 leading-16 line-clamp-3">{work.answer}</p>
        <Button text="수정" size="small" handleClick={() => setEditModalOpen(true)} />
      </div>
    </section>
  );
}
