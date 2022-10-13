import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Navbar/Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [menuState, setMenuState] = useState(true);
  return (
    <>
      <Header setMenuState={setMenuState} menuState={menuState} />
      <Sidebar setMenuState={setMenuState} menuState={menuState} />
      <div className="flex flex-col w-full items-center">
        <div className="max-w-xl flex flex-col w-full items-center ">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
