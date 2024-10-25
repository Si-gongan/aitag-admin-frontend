'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalLayoutProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function ModalLayout({ children, onClose }: ModalLayoutProps) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  return (
    portalRoot &&
    createPortal(
      <div
        onClick={handleClose}
        className="fixed inset-0 flex justify-center items-center h-full w-full bg-overlay z-overlay">
        <section className="relative flex flex-col items-center justify-center py-24 px-30 w-794 z-modal bg-white shadow-2xl">
          {children}
        </section>
      </div>,
      document.body
    )
  );
}
