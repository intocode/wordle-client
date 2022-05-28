import React, { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  opened: boolean;
  onClose: () => void;
  fullScreen?: boolean;
};

const Modal = ({
  children,
  opened,
  onClose,
  fullScreen = false,
}: ModalProps) => {
  let fullScreenCss = '';

  if (fullScreen) {
    fullScreenCss = 'h-full';
  } else {
    fullScreenCss = 'm-1';
  }

  /**
   * Данная конструкция нужна для того, чтобы пропс onClose прокидывался в ModalTitle
   * Причина в том, чтобы API компонента выглядел красивее: вместо
   * <Modal><ModalTitle onClose...>... будет <Modal onClose...>
   */
  const childrenArray = React.Children.map(children, (child: any) => {
    if (child.type?.name) {
      return React.cloneElement(child, {
        onClose,
        ...child.props,
      });
    }

    return child;
  });

  if (!opened) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-100/70">
      <div className="flex flex-col justify-center h-full max-w-md mx-auto">
        <div className={`${fullScreenCss} bg-white shadow-sm p-6`}>
          {childrenArray}
        </div>
      </div>
    </div>
  );
};

export default Modal;
