'use client';

import { ReactNode } from 'react';

interface IsolatedContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function IsolatedContainer({ children, id, className }: IsolatedContainerProps) {
  return (
    <div
      id={id}
      className={`experiment-isolated-container ${className || ''}`}
      data-experiment-id={id}
    >
      {children}
    </div>
  );
}
