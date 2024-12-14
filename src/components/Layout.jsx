import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
const Layout = ({children}) => {
  return (
    <div className='flex flex-col h-screen  text-white'>
      <Header />
      <main className='flex-grow bg-bg800'>{children}</main>
      <Footer/>
    </div>
  );
}

export default Layout;
