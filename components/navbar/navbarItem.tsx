import React from 'react';

type NavbarItemProps = {
  children: string;
};

const NavbarItem = ({ children }: NavbarItemProps) => {
  return (
    <button className="hover:bg-primary hover:text-white rounded w-48 py-2 px-4 ">
      {children}
    </button>
  );
};

export default NavbarItem;
