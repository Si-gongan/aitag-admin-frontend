'use client';

import { DataType } from '@/services/main/schema';
import { formattedDate } from '@/utils/formattedDate';
import Image from 'next/image';

interface ListItemProps {
  item: DataType;
}

export default function ListItem({ item }: ListItemProps) {
  const image = item.works[0].image;
  const thumbnail =
    typeof image === 'string' && image.startsWith('https://gongbang-v2') ? image : '/images/default-thumbnail.png';

  const dateCreated = formattedDate(item.createdAt);
  const stateText = item.isComplete ? '완료' : '진행중';

  return (
    <section className="flex flex-col gap-14 w-224 h-245 p-14 bg-gray-100">
      <div className="relative w-196 h-147 overflow-hidden">
        <Image
          src={thumbnail}
          alt={`${item.id}의 썸네일 이미지`}
          fill
          sizes="196px"
          style={{ objectFit: 'cover' }}
          placeholder="blur"
          blurDataURL="/images/default-thumbnail.png"
        />
      </div>
      <h3 className="text-14 font-medium">{item.title}</h3>
      <div className="flex justify-between w-full">
        <span className="text-13">{dateCreated}</span>
        <span className="flex justify-items-start items-center px-14 h-24 text-12 bg-gray-200 rounded-full">
          {stateText}
        </span>
      </div>
    </section>
  );
}
