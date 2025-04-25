const Navbar = dynamic(() => import("@/components/Navbar"));
import React from "react";
const Footer = dynamic(() => import("@/components/Footer"));
const Section7 = dynamic(() => import("../home/Components/Section7"));
const Section5 = dynamic(() => import("../home/Components/Section5"));
const Section1 = dynamic(() => import("./Section1"));
const Section2 = dynamic(() => import("./Section2"));
import dynamic from "next/dynamic";
const page = () => {
  return (
    <>
      <Navbar active="/customer/about"></Navbar>
      <Section1></Section1>
      <Section2></Section2>
      <Section5></Section5>
      <Section7></Section7>
      <Footer></Footer>
    </>
  );
};

export default page;
