import React from 'react';
import { classNameJoiner } from '../../utils/className';

type CardProps = {
  children: React.ReactNode;
  bgColor?: string;
  height?: string;
  style?: string;
};

const Card = ({
  children,
  bgColor = 'bg-light-green',
  height = 'min-h-112',
  style,
}: CardProps) => {
  return (
    <section
      className={classNameJoiner(
        'w-full p-6 rounded-2xl',
        bgColor,
        height,
        style,
      )}
    >
      {children}
    </section>
  );
};

export default Card;
