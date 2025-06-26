"use client";
import React, { useEffect, useState } from "react";
import rawData from "../../../../SpecificData.json";
import { SectionData, CommonData } from "../../../../SpecificDataTypes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { TiArrowLeft } from "react-icons/ti";
import { use } from "react"; // React 18+ API

export default function CommonDetailPage({ params }: { params: Promise<{ section: string; title: string }> }) {
  const { section: rawSection, title: rawId } = use(params);

  const [specificData, setSpecificData] = useState<CommonData | undefined>();
  const [data, setData] = useState<CommonData | undefined>();
  const [notFound, setNotFound] = useState(false);

  const paramTitle = decodeURIComponent(rawId);
  const selectedSection = rawData[rawSection as keyof typeof rawData];

  useEffect(() => {
    if (!selectedSection) {
      setNotFound(true);
      return;
    }
    setData(selectedSection);
    const sectionData = selectedSection.find(
      (item) => item.title.toLowerCase() === paramTitle.toLowerCase()
    );

    if (!sectionData) {
      setNotFound(true);
    } else {
      setSpecificData(sectionData);
      setNotFound(false);
    }
  }, [rawSection, rawId, selectedSection, paramTitle]);

  if (notFound) return <h3>No Data Found</h3>;
  if (!data) return <p>Loading…</p>;
  console.log(data);
  return (
    <>
      <div className=" bg-white min-h-screen">
        <Navbar active={rawSection=='tnc'?`/customer/T&C`:`/customer/${rawSection}`} />
        <div className="h-fit w-full  px-[5%] ">
          <Link href={rawSection=='tnc'?`/customer/T&C`:`/customer/${rawSection}`}>
          <button className='py-[2rem] text-lg flex items-center text-slate-700'><TiArrowLeft></TiArrowLeft> Back</button>
          </Link>
          <div className=" flex w-full flex-col md:flex-row ">
            <div className="flex-1">
              <p className="responsive-heading text-[#35736E]">
                {" "}
                {specificData?.title}
              </p>
              <div className="flex gap-4 text-slate-700">
                {specificData?.date_uploaded}
                <p>|</p>
                {specificData?.category}
              </div>
              <div className="h-[70dvh] p-5 rounded-lg overflow-hidden w-[100%] max-h-[400px] md:max-h-fit mx-auto">
                <Image
                  className="h-full w-full"
                  src="/oven2.jpg"
                  alt="no image found"
                  height={400}
                  width={400}
                ></Image>
              </div>
              {specificData &&
                specificData?.description.map((description, index: number) => (
                  <div
                    key={index}
                    className=" responsive-subtext text-slate-700  flex-row"
                  >
                    <p>{description}</p>
                    <br></br>
                  </div>
                ))}
            </div>
            <div className=" w-[30%] pl-[5%]">
              <p className="text-[#35736E] text-[25px] py-4">
                Recommended Posts :
              </p>
              <div className=" w-full   gap-3 h-fit grid grid-cols-1 pb-[2rem]  place-items-center ">
                {data.map((item :CommonData, index: number) => (
                  <Link href={`/customer/${rawSection}/${item.title}`} className="w-full"
                    key={index}>
                  <div
                    className=" w-full  hover:shadow-lg   bg-white border border-gray-200 rounded-lg shadow-sm "
                  >
                    <div className="w-full h-[200px] p-3 object-center rounded-t-lg  overflow-hidden ">
                      <Image
                        className="rounded-t-lg w-full object-center h-full "
                        src="/oven2.jpg"
                        height={400}
                        width={400}
                        alt=""
                      />
                    </div>
                    <div className="px-5">
                      <h5 className="mb-2 text-[16px] whitespace-nowrap line-clamp-1  font-bold tracking-tight text-[#35736E]">
                        {item.title}
                      </h5>
                      <p className="mb-3 text-[12px] line-clamp-4 font-normal text-gray-700 dark:text-gray-400">
                        {item.description[0]}
                      </p>
                    </div>
                  </div>
                  </Link>

                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
