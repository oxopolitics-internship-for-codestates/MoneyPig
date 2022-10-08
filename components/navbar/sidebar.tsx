import React from 'react';
import SidebarItem from './sidebarItem';

const Sidebar = () => {
  return (
    <section className="w-52 bg-grey h-screen flex flex-col items-center space-y-6 py-6">
      <SidebarItem>{'Home'}</SidebarItem>
      <SidebarItem>{'Make a Quiz'}</SidebarItem>
      <SidebarItem>{'Solve a Quiz'}</SidebarItem>
      <SidebarItem>{'Search'}</SidebarItem>
    </section>
  );
};

export default Sidebar;
