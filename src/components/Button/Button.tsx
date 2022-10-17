import Link from 'next/link';
import React, { memo } from 'react';
import { UrlObject } from 'url';
import { classNameJoiner } from '../../../utils/className';

type buttonProps = {
  children?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  bgColor?: string;
  style?: string;
  value?: string;
};

type linkButtonProps = {
  children?: string;
  href: string | UrlObject;
};

function Button({
  type = 'button',
  children = 'button',
  bgColor = 'bg-primary',
  style,
  onClick,
  value,
}: buttonProps) {
  return (
    <button
      type={type}
      // className="text-violet hover:text-white border border-violet focus:border-magenta hover:bg-violet focus:hover:bg-magenta focus:ring-4 focus:outline-none focus:ring-magenta font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
      className={classNameJoiner(
        'hover:bg-blue-dark text-white font-bold py-2 px-4 rounded',
        bgColor,
        style,
      )}
      onClick={onClick}
      value={value}
    >
      {children}
    </button>
  );
}

export const LinkButton = memo(
  ({ children = 'button', href }: linkButtonProps) => (
    <Link href={href}>
      <a
        // className="text-violet hover:text-white border border-violet focus:border-magenta hover:bg-violet focus:hover:bg-magenta focus:ring-4 focus:outline-none focus:ring-magenta font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        className="hover:bg-primary text-center hover:text-white rounded w-48 py-2 px-4"
      >
        {children}
      </a>
    </Link>
  ),
);

LinkButton.displayName = 'LinkButton';

export default React.memo(Button);
