'use client';

import { useEffect, useRef } from 'react';

interface DropdownLayoutProps {
  children: React.ReactNode;
  position?: string;
  onClose: () => void;
}

export default function DropdownLayout({ children, position, onClose }: DropdownLayoutProps) {
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (outRef.current && !outRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClose]);

  return (
    <div
      ref={outRef}
      className={`absolute flex flex-col items-center justify-center py-4 z-dropdown bg-white shadow-2xl border-1 border-gray-200 rounded-4 ${
        position && position
      }`}>
      {children}
    </div>
  );
}
