const Footer = dynamic(() => import("@/components/Footer"));
const Navbar = dynamic(() => import("@/components/Navbar"));
import dynamic from "next/dynamic";
import React from "react";
const ProductDetailSection = dynamic(
  () => import("../../ProductDetailSection")
);

const productDetails = () => {
  return (
    <>
      <Navbar active="/customer/products"></Navbar>
      <ProductDetailSection></ProductDetailSection>

      <Footer></Footer>
    </>
  );
};

export default productDetails;
