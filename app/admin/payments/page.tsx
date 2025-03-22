import React from "react";
import Sidebar from '@/components/Sidebar'

const showPayments = () => {
  return (
    <div className='h-screen w-full flex bg-gray-200'>
    <Sidebar></Sidebar>
    <div className='flex-1 h-full'></div>
  </div>
  );
};

export default showPayments;
