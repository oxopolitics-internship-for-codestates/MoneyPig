import React from 'react';
import NavbarItem from './navbarItem';

const Navbar = () => {
  return (
    <section className="w-52 bg-grey h-screen flex flex-col items-center space-y-6 py-6">
      <NavbarItem>{'Home'}</NavbarItem>
      <NavbarItem>{'Make a Quiz'}</NavbarItem>
      <NavbarItem>{'Solve a Quiz'}</NavbarItem>
      <NavbarItem>{'Search'}</NavbarItem>
    </section>
  );
};

export default Navbar;
