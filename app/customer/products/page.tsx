const Footer = dynamic(() => import("@/components/Footer"));
const Navbar = dynamic(() => import("@/components/Navbar"));
import React from "react";
const ProductContainer = dynamic(() => import("./components/ProductContainer"));
const FilterBar = dynamic(() => import("./components/FilterBar"));
import Link from "next/link";
import dynamic from "next/dynamic";

const page = () => {
  return (
    <div>
      <div>
        <Navbar active="/customer/products"></Navbar>
        <div className="flex w-full h-fit light py-[4rem] ">
          <div className="w-[25%] min-w-[350px]">
            <FilterBar></FilterBar>
          </div>
          <ProductContainer></ProductContainer>
        </div>
        {/* <Link
          href="/customer/products/product-details/2"
          className="flex-1 h-fit"
        >
          <ProductContainer></ProductContainer>
        </Link> */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
