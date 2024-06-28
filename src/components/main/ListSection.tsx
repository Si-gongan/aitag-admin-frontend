'use client';

import ListItem from './ListItem';
import { useMainStore } from '@/providers/main-store-provider';
import { useEffect } from 'react';
import Link from 'next/link';
import { URL_PATH } from '@/utils/route';
import { DataType } from '@/services/main/schema';

interface ListSectionProps {
  initialData: DataType[];
}

export default function ListSection({ initialData }: ListSectionProps) {
  const { datas, setDatas } = useMainStore((state) => ({
    datas: state.datas,
    setDatas: state.setDatas,
  }));

  useEffect(() => {
    setDatas(initialData);
  }, [setDatas, initialData]);

  return (
    <section className="flex flex-wrap gap-y-37 gap-x-66">
      <div className="flex items-center justify-center w-224 h-245 rounded-lg bg-gray-300 text-24 text-white">
        + 새 의뢰 생성
      </div>
      {datas?.map((item) => {
        const linkHref = item.target === undefined ? URL_PATH.INSPECT_DETAIL(item.id) : URL_PATH.POST_DETAIL(item.id);

        return (
          <Link key={item.id} href={linkHref}>
            <ListItem item={item} />
          </Link>
        );
      })}
    </section>
  );
}
