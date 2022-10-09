import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Navbar/Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [menuState, setMenuState] = useState(true);
  return (
    <div className="sticky">
      <Header setMenuState={setMenuState} menuState={menuState} />
      <Sidebar menuState={menuState} />
      {children}
    </div>
  );
};

export default Layout;
