import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import FooterAnuj from '../../components/Footer/FooterAnuj';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> 
      <FooterAnuj />
    </>
  );
};

export default Layout;
