'use client';

import { useState } from 'react';
import Button from '../common/Button';

export default function DelExportButtons() {
  const [selectedAll, setSelectedAll] = useState(false);

  const handleSelectAll = () => {
    setSelectedAll((prev) => !prev);
  };

  const handleDelete = () => {
    console.log('');
  };

  const handleExport = () => {
    console.log('');
  };

  return (
    <div className="flex items-center gap-30">
      <Button text="전체선택" size="large" clicked={selectedAll} selectable={true} handleClick={handleSelectAll} />
      <Button text="삭제" size="large" handleClick={handleDelete} />
      <Button text="내보내기" size="large" handleClick={handleExport} />
    </div>
  );
}
