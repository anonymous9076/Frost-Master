"use client"; // You can keep this if needed
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { getAllProducts, getCategory } from "@/app/api/Product";
import useDebouncing from "@/app/hooks/useDebouncing";
import { RxCross2 } from "react-icons/rx";
// import SearchParamsClient from "./components/SearchParamsHandler";
import { catNSubCatResponse } from "@/components/AddProductForm";
import { useSearchParams } from "next/navigation";

const Footer = dynamic(() => import("@/components/Footer"));
const Navbar = dynamic(() => import("@/components/Navbar"));
const ProductContainer = dynamic(() => import("./components/ProductContainer"));
const FilterBar = dynamic(() => import("./components/FilterBar"));

const ProductsPage = () => {
  const [minProductPrice, setMinProductPrice] = useState<number>(0);
  const [maxProductPrice, setMaxProductPrice] = useState<number>(0);
  const [filterCategory, setFilterCategory] = useState<string[]>([]);
  const [filterRating, setFilterRating] = useState<number[]>([]);
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [productsData, setProductsData] = useState<[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterBar, setFilterBar] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState(1);
  const debouncedData = useDebouncing(searchProduct, 800);
  const [categories, setCategories] = useState<catNSubCatResponse>([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  async function getcategories() {
    try {
      const data = await getCategory();
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (category) {
      setFilterCategory((prev) => [...prev, category]);
    }
    
  }, [category]);

  useEffect(() => {
    getcategories();

    async function showProducts() {
      const res = await getAllProducts(
        filterCategory,
        debouncedData as string,
        minProductPrice,
        maxProductPrice,
        filterRating,
        currentPage
      );
      setTotalPages(res.totalPages);
      setProductsData(res.data);
    }

    showProducts();
  }, [
    filterCategory,
    minProductPrice,
    maxProductPrice,
    filterRating,
    currentPage,
    debouncedData,
  ]);

  return (
    <div>
      <Navbar active="/customer/products" />

      {/* <Suspense fallback={null}>
        <SearchParamsClient
          onCategoryChange={(category) => {
            if(category){
              setFilterCategory((prev) => {
              const newCategory = category ? [category] : [];
              // Only update state if different
              if (
                prev.length !== newCategory.length ||
                prev[0] !== newCategory[0]
              ) {
                return newCategory;
              }
              return prev; // don't trigger state update
            });
            }
          }}
        />
      </Suspense> */}

      <div className="flex w-full h-fit min-h-[55dvh] relative light py-[4rem]">
        {filterBar && (
          <div className="h-[100dvh] w-full bg-black/50 fixed top-0 z-60 flex justify-start">
            <div className="w-[25%] min-w-[350px] xl:hidden light h-full py-[6rem] relative z-60 block">
              <button
                className="text-red-500 pb-[1rem] w-full flex items-center justify-end pr-[2rem] text-[25px]"
                onClick={() => setFilterBar((curr) => !curr)}
              >
                <RxCross2 />
              </button>
              <FilterBar
                minProductPrice={minProductPrice}
                setMinProductPrice={setMinProductPrice}
                maxProductPrice={maxProductPrice}
                setMaxProductPrice={setMaxProductPrice}
                filterCategory={filterCategory}
                setFilterCategory={setFilterCategory}
                filterRating={filterRating}
                setFilterRating={setFilterRating}
                categories={categories}
              />
            </div>
          </div>
        )}
        <div className="w-[25%] min-w-[350px] hidden xl:block">
          <FilterBar
            minProductPrice={minProductPrice}
            setMinProductPrice={setMinProductPrice}
            maxProductPrice={maxProductPrice}
            setMaxProductPrice={setMaxProductPrice}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
            filterRating={filterRating}
            setFilterRating={setFilterRating}
            categories={categories}
          />
        </div>
        <ProductContainer
          handleToggleFilter={() => setFilterBar((curr) => !curr)}
          searchProduct={searchProduct}
          setSearchProduct={setSearchProduct}
          productsData={productsData}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
