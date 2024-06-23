'use client';

import { useMainStore } from '@/providers/main-store-provider';
import { getData } from '@/services/main';
import { TARGET_BUTTONS } from '@/utils/constants';
import { useCallback, useEffect } from 'react';
import SortButton from '../common/Button';
import { TargetType } from '@/services/main/schema';

export default function TargetButtons() {
  const { target, setTarget, state, setDatas, setPage, setTotalPages } = useMainStore((state) => state);

  const fetchPageData = useCallback(async () => {
    const response = await getData({ target: target, state: state });

    setDatas(response.data);
    setTotalPages(response.totalPages);
  }, [setDatas, setTotalPages, state, target]);

  const handleChangeState = (targetValue: TargetType) => {
    setTarget(targetValue);
    setPage(1);
  };

  useEffect(() => {
    fetchPageData();
  }, [target, fetchPageData]);

  return (
    <div className="flex items-center gap-40">
      {TARGET_BUTTONS.map((targetItem) => (
        <SortButton
          key={targetItem.value}
          text={targetItem.text}
          clicked={targetItem.value === state}
          handleClick={() => handleChangeState(targetItem.value as TargetType)}
        />
      ))}
    </div>
  );
}
