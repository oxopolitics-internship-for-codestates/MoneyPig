import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Navbar/Sidebar';

const Layout = () => {
  const [menuState, setMenuState] = useState(true);
  return (
    <>
      <Header setMenuState={setMenuState} menuState={menuState} />
      <Sidebar menuState={menuState} />
    </>
  );
};

export default Layout;
