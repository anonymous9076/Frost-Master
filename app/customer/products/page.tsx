import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import ProductContainer from './components/ProductContainer'
import FilterBar from './components/FilterBar'

const page = () => {
  return (
    <div>
        <Navbar active='/customer/products'></Navbar>
        <div className='flex w-full h-fit light py-[4rem] '>
            <div className='w-[25%] min-w-[350px]'>
                <FilterBar></FilterBar>
            </div>
                <ProductContainer></ProductContainer>
           
        </div>
        <Footer></Footer>
    </div>
  )
}

export default page