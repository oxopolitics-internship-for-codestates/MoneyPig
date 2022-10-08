import React, { useState } from 'react';
import { classNameJoiner } from '../../utils/className';
import Icon, { IconType } from '../Icon/icon';

type HeaderProps = {
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  menuState: boolean;
};

const Header = ({ setMenuState, menuState }: HeaderProps) => {
  const onClick = () => {
    setMenuState(!menuState);
  };
  return (
    <header
      className={classNameJoiner(
        'w-full bg-primary flex items-center justify-between',
      )}
    >
      <div className="flex items-center ">
        {menuState ? (
          <Icon onClick={onClick} iconName={IconType.menu} />
        ) : (
          <Icon onClick={onClick} iconName={IconType.cancel} />
        )}
      </div>
    </header>
  );
};

export default Header;
