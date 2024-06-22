'use client';

import Image from 'next/image';

interface PaginationProps {
  page: number;
  totalPages: number;
}

export default function Pagination({ page, totalPages }: PaginationProps) {
  const startPage = Math.ceil(page / 10);
  const endPage = Math.min(startPage + 9, totalPages);
  const prevPage = page > 10;
  const nextPage = startPage * 10 < totalPages;

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  const handlePrev = () => {
    console.log('이전페이지로');
  };

  const handleClick = (num: number) => {
    console.log(num);
  };

  const handleNext = () => {
    console.log('다음페이지로');
  };

  return (
    <div className="flex justify-between items-center w-full">
      <button className="flex items-center justify-center w-78 h-36" onClick={handlePrev}>
        {prevPage && (
          <span className="flex items-center gap-8 text-[#2E2E2E]">
            <Image
              src="/images/page-arrow-right.svg"
              alt="이전 페이지로 가는 왼쪽 화살표 아이콘 버튼"
              width={20}
              height={20}
              style={{ transform: 'scaleX(-1' }}
            />
            이전
          </span>
        )}
      </button>
      <div className="flex justify-center items-center gap-2">
        {pageNumbers.map((num) => (
          <div
            key={num}
            onClick={() => handleClick(num)}
            className={`flex justify-center items-center w-40 h-40 rounded-4 ${
              num === page ? 'font-bold bg-[#F2F6FE] text-primary-500 border-1 border-primary-500' : ''
            }`}>
            {num}
          </div>
        ))}
      </div>
      <button className="flex items-center justify-center w-78 h-36" onClick={handleNext}>
        {nextPage && (
          <span className="flex items-center gap-8 text-[#2E2E2E]">
            다음
            <Image
              src="/images/page-arrow-right.svg"
              alt="다음 페이지로 가는 오른쪽 화살표 아이콘 버튼"
              width={20}
              height={20}
            />
          </span>
        )}
      </button>
    </div>
  );
}
