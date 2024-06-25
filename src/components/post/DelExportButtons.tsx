'use client';

import { useState } from 'react';
import Button from '../common/Button';
import { usePostStore } from '@/providers/post-store-provider';

export default function DelExportButtons() {
  const [clickedAll, setClickedAll] = useState(false);

  const { selectAllCurrentPageWorks } = usePostStore((state) => ({
    post: state.post,
    selectedWorks: state.selectedWorks,
    selectAllCurrentPageWorks: state.selectAllCurrentPageWorks,
  }));

  const handleSelectAll = () => {
    selectAllCurrentPageWorks(clickedAll);
    setClickedAll((prev) => !prev);
  };

  const handleDelete = () => {
    console.log('');
  };

  const handleExport = () => {
    console.log('');
  };

  return (
    <div className="flex items-center gap-30">
      <Button text="전체선택" size="large" clicked={clickedAll} selectable={true} handleClick={handleSelectAll} />
      <Button text="삭제" size="large" handleClick={handleDelete} />
      <Button text="내보내기" size="large" handleClick={handleExport} />
    </div>
  );
}
