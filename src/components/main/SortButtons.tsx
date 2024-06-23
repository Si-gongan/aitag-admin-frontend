'use client';

import { useMainStore } from '@/providers/main-store-provider';
import { getData } from '@/services/main';
import { useCallback, useEffect } from 'react';
import { StateType, TargetType } from '@/services/main/schema';
import Button from '../common/Button';

interface SortButtonsProps<T> {
  type: 'state' | 'target';
  buttons: Array<{ value: T; text: string }>;
}

export default function SortButtons<T extends StateType | TargetType>({ type, buttons }: SortButtonsProps<T>) {
  const { state, setState, target, setTarget, setDatas, setPage, setTotalPages } = useMainStore((state) => state);

  const currentValue = type === 'state' ? state : target;

  const fetchMainData = useCallback(async () => {
    const response = await getData({ target, state });

    setDatas(response.data);
    setTotalPages(response.totalPages);
  }, [setDatas, setTotalPages, state, target]);

  const handleChange = (value: T) => {
    setPage(1);

    if (type === 'state') {
      setState(value as StateType);
    } else if (type === 'target') setTarget(value as TargetType);
  };

  useEffect(() => {
    fetchMainData();
  }, [state, target, fetchMainData]);

  return (
    <div className="flex items-center gap-40">
      {buttons?.map((button) => (
        <Button
          key={button.value}
          text={button.text}
          clicked={button.value === currentValue}
          handleClick={() => handleChange(button.value)}
        />
      ))}
    </div>
  );
}
