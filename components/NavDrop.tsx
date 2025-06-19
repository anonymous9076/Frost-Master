"use client";
import Image from "next/image";
// import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface NavProp {
  title: string;
  list: string[];
  active: boolean;
  image: string;
  handleCloseModel: () => void;
}
// const NavDrop = ({title,list,active}:NavProp) => {
//   const [closeModel,setCloseModel]= useState<boolean>(active)
//   const handleCloseModel=()=>{
//     setCloseModel(false)
//   }
//   const handleOpenModel=()=>{
//     setCloseModel(true)
//   }

//   useEffect(()=>{
//     setCloseModel(active)
//   },[active])

//   return (
//     <div className={`absolute h-[90dvh] w-full top-0 mt-[10dvh] bg-black/5 left-0 ${closeModel?'block':'hidden'}`}>
//       <div className=" px-[6rem] py-[1rem] pb-[2rem] min-h-[20dvh] h-fit w-full   light"onMouseEnter={handleOpenModel} onMouseLeave={handleCloseModel}>
//         <div className="w-full flex items-center justify-between">
//         <h2 className="text-[35px]">{title} </h2>
//         <span onClick={()=>setCloseModel(false)} className="text-[25px] font-semibold">
//         <RxCross2 ></RxCross2>
//         </span>
//         </div>
//         <div className="flex items-start justify-between">
//           <ul className="text-[18px] w-[300px]  ">
//             {list.map((item,index)=>
//               <li key={index} className="hover:bg-gray-100 px-4 py-2 rounded-md flex items-center justify-between">{item}</li>
//             )}
//           </ul>
//           <Image
//           src="/Images/PremiumKitchenEquipments/img4.jpg"
//           alt=""
//           height={400}
//           width={400}
//           className="hidden lg:block w-[450px] rounded-lg max-h-[30dvh]"
//           ></Image>
//         </div>
//       </div>
//     </div>
//   );
// };
const NavDrop = ({ title, list, active, handleCloseModel, image }: NavProp) => {
  // remove local closeModel state entirely and rely on the `active` prop
  if (!active) return null;

  return (
    <div className="absolute top-[10dvh] !z-0 transition-all duration-500 ease-in-out left-0 w-full h-[90dvh] bg-black/50">
      <div
        className="px-[6rem] py-[1rem]  min-h-[20dvh] light"
        onMouseLeave={handleCloseModel}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-[35px]">{title}</h2>
          <RxCross2
            onClick={handleCloseModel}
            className="cursor-pointer text-[25px]"
          />
        </div>

        <div className="flex justify-between items-start mt-4">
          <ul className="w-[300px] md:w-[40%] text-[18px] space-y-2">
            {list.map((item, i) => (
              <li
                key={i}
                className="px-4 py-1 rounded-md hover:bg-gray-100 flex justify-between"
              >
                {item}
              </li>
            ))}
          </ul>
          <Image
            src={`${process.env.NEXT_PUBLIC_CDNURL}${image}`}
            alt=""
            height={400}
            width={400}
            className="hidden lg:block w-[450px] rounded-lg max-h-[30dvh]"
          />
        </div>
      </div>
    </div>
  );
};

export default NavDrop;
