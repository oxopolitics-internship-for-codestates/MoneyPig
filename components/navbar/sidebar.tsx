import React from 'react';
import SidebarItem from './sidebarItem';

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
      <SidebarItem>{'Home'}</SidebarItem>
      <SidebarItem>{'Make a Quiz'}</SidebarItem>
      <SidebarItem>{'Solve a Quiz'}</SidebarItem>
      <SidebarItem>{'Search'}</SidebarItem>
    </aside>
  );
};

export default Sidebar;
