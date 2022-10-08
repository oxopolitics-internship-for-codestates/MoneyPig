import React from 'react';
import { classNameJoiner } from '../../utils/className';
import Icon, { IconType } from '../Icon/icon';

type HeaderProps = {
  onClick?: () => void;
};

const Header = ({ onClick }: HeaderProps) => {
  return (
    <header
      className={classNameJoiner(
        'w-full bg-primary flex items-center justify-between',
      )}
    >
      <div className="flex items-center ">
        <Icon onClick={onClick} iconName={IconType.menu} />
      </div>
    </header>
  );
};

export default Header;
