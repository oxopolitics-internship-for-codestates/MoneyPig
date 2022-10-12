import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Navbar/Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [menuState, setMenuState] = useState(true);
  return (
    <div className="">
      <Header setMenuState={setMenuState} menuState={menuState} />
      <Sidebar menuState={menuState} />
      <div className="flex flex-col w-full items-center">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
