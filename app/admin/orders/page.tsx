import Sidebar from '@/components/Sidebar'
import React from 'react'

const showOrders = () => {
  return (
    <div className='h-screen w-full flex bg-gray-200'>
      <Sidebar></Sidebar>
      <div className='flex-1 h-full'></div>
    </div>
  )
}

export default showOrders