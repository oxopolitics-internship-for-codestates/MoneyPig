import React from 'react';
import { LinkButton } from '../Button/Button';

type SidebarProps = {
  menuState: boolean;
};

const Sidebar = ({ menuState }: SidebarProps) => {
  return (
    <aside
      className={`w-52 bg-grey h-screen flex flex-col items-center space-y-6 py-6 transition-all ease-in-out duration-300 ${
        menuState ? '-translate-x-52' : 'translate-x-0'
      } ${menuState ? 'invisible' : 'visible'}`}
    >
      <LinkButton href={'#'}>{'Home'}</LinkButton>
      <LinkButton href={'#'}>{'Make a Quiz'}</LinkButton>
      <LinkButton href={'#'}>{'Solve a Quiz'}</LinkButton>
      <LinkButton href={'#'}>{'Search'}</LinkButton>
    </aside>
  );
};

export default Sidebar;
