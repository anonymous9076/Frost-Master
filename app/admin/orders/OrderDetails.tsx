import React,{useState,useEffect} from 'react'
import Image from "next/image";
import Stepper from "@/components/Stepper";
import { TiArrowLeft } from "react-icons/ti";

interface Props {
    handleCloseModel:()=>void
}

const OrderDetails = ({handleCloseModel}:Props) => {
    //  const [cancle, setCancle] = useState<boolean>(false);
      const [currentStep, setCurrentStep] = useState(0);
      const NUMBER_OF_STEPS = 5;
      const product = {
        title: "Large Mixing Bowl",
        image: "/Images/bak1.jpg",
        category: "Mixing",
        in_stock: true,
        review: 4.5,
        status: "Pending",
        delivery: "Jan 2 2025",
        orderId: "#34HJ85NVI4NJ4BFIEI5",
        deliveryPhase: 2,
      };
    
      useEffect(() => {
        setCurrentStep(product.deliveryPhase);
      }, [product.deliveryPhase]);
    
    //   const handleCloseModel = () => {
    //     setCancle((curr) => !curr);
    //   };
    
  return (
    <div className=" w-full  overflow-x-auto bg-gray-100 py-[2rem] h-[92%] ">
      {/* <h1 className="text-[35px] font-bold  pt-5 w-[90%] mx-auto">Order Detail</h1> */}

        <div className="!cursor-pointer select-none relative  w-[90%]  mx-auto">
          {/* {cancle ? (
            <CancelOrderModel handleclose={handleCloseModel}></CancelOrderModel>
          ) : (
            ""
          )} */}

          <div className="w-full">
          <div onClick={()=>handleCloseModel()} className='pb-[2rem] text-lg flex items-center'><TiArrowLeft></TiArrowLeft> Back</div>
            <div className="  w-full flex h-fit  px-[2rem] ">
              <Image
                src={product.image}
                alt=""
                height={400}
                width={400}
                className="w-min-[200px] w-[22%] h-[200px] mix-blend-multiply "
              ></Image>
              <div className="px-[2rem] flex-1 flex items-center  gap-3">
                <div className="flex-1 gap-1">
                  <p className="whitespace-nowrap overflow-hidden">
                    {" "}
                    Order Id : {product.orderId}
                  </p>
                  <h1 className="text-[20px] font-bold  ">
                    Gas Oven Three Deck Nine Tray
                  </h1>
                  
                  <p className="text-[16px] font-medium ">Total Quantity : 1</p>
                  <p className="text-[20px] font-medium ">$234,344</p>
                  
                </div>
               <div></div>
                <div className="flex-1 flex items-center text-[20px] flex-col gap-2 font-bold ">
                  Dilevery Excepted By
                  {product.status === "Delivered" ||
                  product.status === "Cancelled" ? (
                    ""
                  ) : (
                    <p className="font-normal">{product.delivery}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-[25px] font-bold  py-2 ">Shipping Details</h1>
          <div className="border flex justify-center border-gray-400 rounded-lg p-[2rem]">
            <div className="flex-1">
              {" "}
              <h3 className="text-[20px]  font-semibold "> Depart From</h3>
              <p className="w-[50%] min-w-[200px] pl-[1rem]">
                John Smith 123 Maple Street Springfield, IL 62704 United States
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-[20px]   font-semibold "> Shipped To</h3>
              <p className="w-[50%] min-w-[200px] pl-[1rem]">
                Skyline Technologies Pvt. Ltd. 5th Floor, Orchid Business Park
                Golf Course Road, Sector 54 Gurgaon, Haryana 122002 India
              </p>
            </div>
          </div>
          <h1 className="text-[25px] font-bold mt-6  py-2 ">
            Delivery Partner Details
          </h1>
          <div className="border flex justify-center border-gray-400 rounded-lg p-[2rem]">
            <div className="flex-1">
              <h3 className="text-[20px]   font-semibold "> Delivered By</h3>
              <p className="w-[50%] min-w-[200px] pl-[1rem]">
                Skyline Technologies Pvt. Ltd. 5th Floor, Orchid Business Park
                Golf Course Road, Sector 54 Gurgaon, Haryana 122002 India
              </p>
            </div>
          </div>
          <h1 className="text-[25px] font-bold mt-6  py-2 ">
            Tracking Details
          </h1>
          <div className="border flex justify-center border-gray-400 rounded-lg p-[2rem]">
            <ul className="text-[16px] w-full space-y-[1rem]">
              <li className=" flex items-center gap-3 ">
                <span className="font-semibold">Tracking Id : </span>
                <span>#3JGB59GJH30FM</span>
              </li>
              <Stepper
                currentStep={currentStep}
                numberOfSteps={NUMBER_OF_STEPS}
              />
            </ul>
          </div>
          <h1 className="text-[25px] font-bold mt-6  py-2 ">Cost Details</h1>
          <div className="border flex justify-center border-gray-400 rounded-lg p-[2rem]">
            <div className="flex-1">
              <ul className="text-[16px] space-y-[1rem]">
                <li className=" flex items-center justify-between ">
                  <span>Price</span>
                  <span>$3059</span>
                </li>
                <li className=" flex items-center justify-between">
                  <span>Discount</span>
                  <span>$3059</span>
                </li>
                <li className="flex items-center justify-between ">
                  <span>Delivery Fee</span>
                  <span>$3059</span>
                </li>
              </ul>
              <div className="border border-gray-500 my-[2rem]"></div>
              <ul className="text-[16px] space-y-[1rem]">
                <li className=" flex items-center justify-between ">
                  <span>Net Amount </span>
                  <span>$3059</span>
                </li>
              </ul>
            </div>
          </div>
          <h1 className="text-[25px] font-bold mt-6  py-2 ">
            Status 
          </h1>
          <div className="border flex justify-center border-gray-400 rounded-lg p-[2rem]">
            <select className='px-4 py-2 w-full border border-gray-300 rounded-lg'>
                {  <option>Select </option>
                  }
            </select>
          </div>
        </div>
      </div>
  )
}

export default OrderDetails