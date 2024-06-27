'use client';

import { useMainStore } from '@/providers/main-store-provider';
import { useEffect } from 'react';
import { StateType, TargetType } from '@/services/main/schema';
import Button from '../common/Button';

interface SortButtonsProps<T> {
  type: 'state' | 'target';
  buttons: Array<{ value: T; text: string }>;
}

export default function SortButtons<T extends StateType | TargetType>({ type, buttons }: SortButtonsProps<T>) {
  const { state, setState, target, setTarget, setPage, fetchDatas } = useMainStore((state) => ({
    state: state.state,
    setState: state.setState,
    target: state.target,
    setTarget: state.setTarget,
    setPage: state.setPage,
    fetchDatas: state.fetchDatas,
  }));

  const currentValue = type === 'state' ? state : target;

  const handleChange = (value: T) => {
    setPage(1);

    if (type === 'state') {
      setState(value as StateType);
      fetchDatas();
    } else if (type === 'target') {
      setTarget(value as TargetType);
      fetchDatas();
    }
  };

  return (
    <div className="flex items-center gap-40">
      {buttons?.map((button) => (
        <Button
          key={button.value}
          text={button.text}
          clicked={button.value === currentValue}
          onClick={() => handleChange(button.value)}
        />
      ))}
    </div>
  );
}
