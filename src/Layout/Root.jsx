import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className="sm:max-w-[95%] md:max-w-6xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
