'use client';

import { usePostStore } from '@/providers/post-store-provider';
import Image from 'next/image';
import Textarea from '../common/Textarea';
import React, { useState } from 'react';

export default function EditContent() {
  const { editWork, setEditWork } = usePostStore((state) => ({
    editWork: state.editWork,
    setEditWork: state.setEditWork,
  }));

  const [value, setValue] = useState<string>(editWork?.answer || '없음');

  const thumbnail =
    editWork?.image && editWork?.image.startsWith('https://gongbang-v2')
      ? editWork.image
      : '/images/default-edit-thumbnail.png';

  const keyworks = editWork?.keywords.length === 0 ? '없음' : editWork?.keywords.join(', ');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    setValue(newValue);

    if (editWork) {
      setEditWork({ ...editWork, answer: newValue });
    }
  };

  return (
    <div className="flex flex-col gap-28 w-full text-20">
      <div className="flex gap-25">
        <div className="relative w-300 h-300 overflow-hidden">
          <Image
            src={thumbnail}
            alt={`work ${editWork?.id}의 썸네일 이미지`}
            fill
            sizes="50vw"
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL="/images/default-edit-thumbnail.png"
          />
        </div>
        <Textarea name="value" value={value} onChange={handleChange} />
      </div>
      SEO키워드 <br />
      <p className="w-full h-56 overflow-scroll">{keyworks}</p>
      문체
      <br />
      <p className="w-full h-56 overflow-scroll">{editWork?.tone}</p>
    </div>
  );
}
