import { catNSubCatResponse } from "@/components/AddProductForm";
import React from "react";
interface PropsType {
  minProductPrice: number;
  setMinProductPrice: (value: number) => void;
  maxProductPrice: number;
  setMaxProductPrice: (value: number) => void;
  filterCategory: string[];
  setFilterCategory: (value: string[]) => void;
  setFilterRating: (value: number[]) => void;
  filterRating: number[];
  categories?: catNSubCatResponse;
}
interface RatingItem {
  title: string;
  value: number;
}

const FilterBar = (props: PropsType) => {
  const {
    minProductPrice,
    setMinProductPrice,
    maxProductPrice,
    setMaxProductPrice,
    setFilterRating,
    filterRating,
    filterCategory,
    setFilterCategory,
    categories,
  } = props;

  //   "Cookware",
  //         "Bakeware",
  //         "Cutlery",
  //         "Storage",
  //         "Kitchen Appliances",
  //         "Tableware",
  //         "Others",
  // const category = [
  //   { title: "Cloud Kitchen Equipments", value: "Cloud kitchen equipment" },
  //   { title: "Commercial Refrigerators", value: "Commercial Refrigerator" },
  //   { title: "Restaurant Equipment", value: "Restaurant Equipment" },
  //   { title: "Bakery Machinery", value: "Bakery Machinery" },
  // ];

  const rating: RatingItem[] = [
    { title: "5 Star Rating", value: 5 },
    { title: "4 Star Rating", value: 4 },
    { title: "3 Star Rating", value: 3 },
    { title: "2 Star Rating", value: 2 },
    { title: "1 Star Rating", value: 1 },
  ];
  // const available:string = [{ title: "In Stock" }, { title: "Out of Stock" }];

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    if (e.target.checked) {
      setFilterRating([...filterRating, value]);
    } else {
      setFilterRating(filterRating.filter((r) => r !== value));
    }
  };

  function handleCategoryChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (e.target.checked) {
      setFilterCategory([...filterCategory, value]);
    } else {
      setFilterCategory(filterCategory.filter((r) => r !== value));
    }
  }
  return (
    <div className="w-[90%] xl:w-full mx-auto h-[100%] overflow-y-auto xl:shadow-[0] shadow-[inset_0_4px_4px_rgba(0,0,0,0.1),inset_0_-4px_4px_rgba(0,0,0,0.1)]">
      <div className="w-full xl:px-[2rem] px-4  flex flex-col gap-4 h-fit">
        <div className="border border-gray-400 px-[2rem] py-[1rem] rounded-3xl ">
          <h1 className="text-[22px] border-l-3 border-[#35736E] text-[#35736E] px-[1rem] mb-2 font-bold">
            Categories
          </h1>
          <ul>
            {categories?.map((item, index) => (
              <li key={index} className="items-center flex py-2 gap-2">
                <input
                  type="checkbox"
                  checked={filterCategory.includes(item.name)}
                  value={item.name}
                  onChange={handleCategoryChange}
                ></input>
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-gray-400 px-[2rem] py-[1rem] rounded-3xl">
          <h1 className="text-[22px] border-l-[4px] border-[#35736E] text-[#35736E] px-[1rem] mb-4 font-bold">
            Price Range
          </h1>

          {/* Show selected price range */}
          <div className="text-center mb-2 font-semibold text-gray-700">
            ₹{minProductPrice.toLocaleString()} - ₹
            {maxProductPrice.toLocaleString()}
          </div>

          <div className=" h-[80px] flex flex-col">
            <label htmlFor="minprice">Min Price</label>
            <input
              type="range"
              min={0}
              max={100000}
              step={1000}
              value={minProductPrice}
              onChange={(e) => setMinProductPrice(Number(e.target.value))}
              className=" w-full accent-[#35736E]"
            />

            <label htmlFor="maxprice">Max Price</label>

            <input
              type="range"
              min={0}
              max={100000}
              step={1000}
              value={maxProductPrice}
              onChange={(e) => setMaxProductPrice(Number(e.target.value))}
              className=" w-full accent-[#35736E]"
            />
          </div>
        </div>
        <div className="border border-gray-400 px-[2rem] py-[1rem] rounded-3xl ">
          <h1 className="text-[22px] border-l-3 border-[#35736E] text-[#35736E] px-[1rem] mb-2 font-bold">
            Rating
          </h1>
          <ul>
            {rating.map((item: RatingItem, index: number) => (
              <li key={index} className="items-center flex py-1 gap-2">
                <input
                  type="checkbox"
                  value={item?.value}
                  checked={filterRating.includes(item.value)}
                  onChange={handleRatingChange}
                ></input>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="border border-gray-400 px-[2rem] py-[1rem] rounded-3xl ">
        <h1 className="text-[22px] border-l-3 border-[#35736E] text-[#35736E] px-[1rem] mb-2 font-bold">
          Availability
        </h1>
        <ul>
          {available.map((item, index) => (
            <li key={index} className="items-center flex py-1 gap-2">
              <input type="checkbox"></input>
              {item.title}
            </li>
          ))}
        </ul>
      </div> */}
      </div>
    </div>
  );
};

export default FilterBar;
