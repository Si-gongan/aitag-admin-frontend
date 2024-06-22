'use client';

import { DataType } from '@/services/main/schema';
import ListItem from './ListItem';
import { useDataStore } from '@/providers/data-store-provider';
import { useEffect } from 'react';

interface ListSectionProps {
  data: DataType[];
}

export default function ListSection({ data }: ListSectionProps) {
  const { datas, setDatas } = useDataStore((state) => state);

  useEffect(() => {
    setDatas(data);
  }, [data, setDatas]);

  return (
    <section className="flex flex-wrap gap-y-37 justify-between gap-x-66">
      <div className="flex items-center justify-center w-224 h-245 rounded-lg bg-gray-300 text-24 text-white">
        + 새 의뢰 생성
      </div>
      {datas.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </section>
  );
}
