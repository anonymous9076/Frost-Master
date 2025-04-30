"use client";
const Footer = dynamic(() => import("@/components/Footer"));
const Navbar = dynamic(() => import("@/components/Navbar"));
import React, { useEffect, useState } from "react";
const ProductContainer = dynamic(() => import("./components/ProductContainer"));
const FilterBar = dynamic(() => import("./components/FilterBar"));
import dynamic from "next/dynamic";
import { getAllProducts } from "@/app/api/Product";
import useDebouncing from "@/app/hooks/useDebouncing";
import { RxCross2 } from "react-icons/rx";

const ProductsPage = () => {
  const [minProductPrice, setMinProductPrice] = useState<number>(0);
  const [maxProductPrice, setMaxProductPrice] = useState<number>(0);
  const [filterCategory, setFilterCategory] = useState<string[]>([]);
  const [filterRating, setFilterRating] = useState<number[]>([]);
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [productsData, setProductsData] = useState<[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterBar,setFilterBar]= useState<boolean>(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const deboundedData = useDebouncing(searchProduct, 800);

  async function showProducts() {
    console.log(filterRating, "filterRating9900");
    const res = await getAllProducts(
      filterCategory,
      deboundedData as string,
      minProductPrice,
      maxProductPrice,
      filterRating,
      currentPage
    );
    setTotalPages(res.totalPages);
    setProductsData(res.data);
    console.log(res, "data products customer791");
  }
  useEffect(() => {
    showProducts();
  }, [
    filterCategory,
    minProductPrice,
    maxProductPrice,
    filterRating,
    currentPage,
    deboundedData,
  ]);

  const handleToggleFilter=()=>{
    console.log('filter visible')
    setFilterBar(curr=>!curr)
  }

  return (
    <div >
      <div>
        <Navbar active="/customer/products"></Navbar>
        <div className="flex w-full h-fit min-h-[55dvh] relative light py-[4rem] ">
          {filterBar?
          <div className="h-[100dvh] w-full bg-black/50 fixed top-0  z-60 flex justify-start ">
          <div className={`w-[25%] min-w-[350px] xl:hidden light h-full py-[6rem] relative z-60 block`}>
            <button className="text-red-500 pb-[1rem] w-full  flex items-center justify-end pr-[2rem] text-[25px]" onClick={()=>setFilterBar(curr=>!curr)}><RxCross2/></button>
            <FilterBar
              minProductPrice={minProductPrice}
              setMinProductPrice={setMinProductPrice}
              maxProductPrice={maxProductPrice}
              setMaxProductPrice={setMaxProductPrice}
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
              filterRating={filterRating}
              setFilterRating={setFilterRating}
            />
          </div>
          </div>
          :''}
          <div className={`w-[25%] min-w-[350px] hidden xl:block`}>
            <FilterBar
              minProductPrice={minProductPrice}
              setMinProductPrice={setMinProductPrice}
              maxProductPrice={maxProductPrice}
              setMaxProductPrice={setMaxProductPrice}
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
              filterRating={filterRating}
              setFilterRating={setFilterRating}
            />
          </div>
          <ProductContainer
          handleToggleFilter={handleToggleFilter}
            searchProduct={searchProduct}
            setSearchProduct={setSearchProduct}
            productsData={productsData}
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
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

export default ProductsPage;
