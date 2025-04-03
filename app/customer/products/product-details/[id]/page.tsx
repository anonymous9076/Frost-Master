import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import ProductDetailSection from '../ProductDetailSection'

const productDetails = () => {
  return (
    <>
    <Navbar active='/customer/products'></Navbar>
    <ProductDetailSection></ProductDetailSection>
    
    <Footer></Footer>
    </>
  )
}

export default productDetails