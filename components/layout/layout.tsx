import React, { useState } from 'react';
import Header from '../header/header';
import Sidebar from '../navbar/sidebar';

const Layout = () => {
  const [menuState, setMenuState] = useState(true);
  return (
    <>
      <Header setMenuState={setMenuState} menuState={menuState} />
      {!menuState && <Sidebar />}
    </>
  );
};

export default Layout;
