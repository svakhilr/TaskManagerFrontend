// Layout.jsx
import React from 'react';
import Header from '../components/header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
