import React, { ReactNode } from 'react';

type ModalTitleProps = {
  children: ReactNode;
  onClose?: () => void;
};

// пустышка
const noop = () => {};

const ModalTitle = ({ children, onClose = noop }: ModalTitleProps) => {
  return (
    <div className="text-center text-lg font-bold relative mb-6">
      {children}
      <button type="button" onClick={onClose} className="absolute right-0">
        {/* todo: заменить на svg-иконку */}x
      </button>
    </div>
  );
};

export default ModalTitle;
