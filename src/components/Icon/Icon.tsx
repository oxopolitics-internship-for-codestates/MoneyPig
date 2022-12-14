import React from 'react';
import { classNameJoiner } from '../../../utils/className';

type IconBoxProps = {
  id?: string;
  style?: string;
  iconName: IconType;
  // onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
};

export enum IconType {
  menu = 'M4 6h16M4 12h16M4 18h16',
  search = 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  trash = 'M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0',
  cancel = 'M6 18L18 6M6 6l12 12',
  check = 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  error = 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
}

const Icon = ({ iconName, onClick, style = 'h-16 w-16 p-5' }: IconBoxProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNameJoiner(
        style,
        ' flex cursor-pointer items-center justify-center ',
      )}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      onClick={onClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={iconName} />
    </svg>
  );
};

export default Icon;
