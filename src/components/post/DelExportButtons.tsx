'use client';

import { useState } from 'react';
import Button from '../common/Button';
import { usePostStore } from '@/providers/post-store-provider';
import { deleteWork } from '@/services/post';

export default function DelExportButtons() {
  const [clickedAll, setClickedAll] = useState(false);

  const { postId, selectedWorks, selectAllCurrentPageWorks, resetSelectedWork, fetchPost } = usePostStore((state) => ({
    postId: state.postId,
    selectedWorks: state.selectedWorks,
    selectAllCurrentPageWorks: state.selectAllCurrentPageWorks,
    resetSelectedWork: state.resetSelectedWork,
    fetchPost: state.fetchPost,
  }));

  const handleSelectAll = () => {
    selectAllCurrentPageWorks(clickedAll);
    setClickedAll((prev) => !prev);
  };

  const handleDelete = async () => {
    if (selectedWorks.length === 0) return;

    const deleteIds = selectedWorks.map((work) => work.id);
    await deleteWork(postId, deleteIds);
    await fetchPost(postId);
    resetSelectedWork();
  };

  const handleExport = () => {
    console.log('');
  };

  return (
    <div className="flex items-center gap-30">
      <Button text="전체선택" size="large" clicked={clickedAll} selectable={true} onClick={handleSelectAll} />
      <Button text="삭제" size="large" onClick={handleDelete} />
      <Button text="내보내기" size="large" onClick={handleExport} />
    </div>
  );
}
