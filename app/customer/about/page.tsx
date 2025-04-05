import Navbar from '@/components/Navbar'
import React from 'react'
import Footer from '@/components/Footer'
import Section7 from '../home/Components/Section7'
import Section5 from '../home/Components/Section5'
import Section1 from './Section1'
import Section2 from './Section2'
const page = () => {
  return (
   <>
   <Navbar active='/customer/about'></Navbar>
   <Section1></Section1>
   <Section2></Section2>
   <Section5></Section5>
   <Section7></Section7>
   <Footer></Footer>
   </>
  )
}

export default page