import React, { Dispatch, SetStateAction } from 'react';
import { classNameJoiner } from '../../../utils/className';
import IconBox, { IconType } from '../Icon/Icon';

type ModalProps = {
  children: React.ReactNode;
  title?: string;
  bgColor?: string;
  height?: string;
  style?: string;
  modalState: boolean;
  modalStateControl: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({
  children,
  title = ' Temp Title',
  bgColor = 'bg-white',
  height = 'h-full',
  style,
  modalState,
  modalStateControl,
}: ModalProps) => {
  const closeModalFunction = () => {
    modalStateControl(prev => !prev);
  };

  return (
    <div
      className={classNameJoiner(
        modalState ? '' : ' hidden',
        'overflow-y-auto overflow-x-hidden bg-modalBg opacity-90 fixed top-0 right-0 left-0 z-50 w-full h-full',
      )}
    >
      <div
        className={classNameJoiner(
          bgColor,
          height,
          style,
          'absolute_center p-4 w-4/5 max-w-lg max-h-144 rounded-2xl',
        )}
      >
        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <button
            type="button"
            onClick={closeModalFunction}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal"
          >
            <IconBox iconName={IconType.cancel} style="h-6 w-6"></IconBox>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
