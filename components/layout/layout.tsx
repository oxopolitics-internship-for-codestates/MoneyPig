import React, { useState } from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';

const Layout = () => {
  const [menuState, setMenuState] = useState(true);
  return (
    <>
      <Header setMenuState={setMenuState} menuState={menuState} />
      {!menuState && <Navbar />}
    </>
  );
};

export default Layout;
