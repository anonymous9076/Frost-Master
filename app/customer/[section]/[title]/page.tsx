"use client";
import React, { useEffect, useState } from "react";
import rawData from "../../../../SpecificData.json";
import { CommonData } from "../../../../SpecificDataTypes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { TiArrowLeft } from "react-icons/ti";
import { use } from "react"; // React 18+ API

type Params = {
  section: string;
  title: string;
};

export default function CommonDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { section: rawSection, title: rawId } = use(params);

  const [specificData, setSpecificData] = useState<CommonData | undefined>();
  const [data, setData] = useState<CommonData[] | undefined>();
  const [notFound, setNotFound] = useState(false);

  const paramTitle = decodeURIComponent(rawId);

  // cast to CommonData[] to help TypeScript understand it's an array
  const selectedSection = rawData[
    rawSection as keyof typeof rawData
  ] as CommonData[];

  useEffect(() => {
    if (!selectedSection || !Array.isArray(selectedSection)) {
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

  if (notFound)
    return (
      <h3 className="p-8 text-center text-red-600 text-xl">No Data Found</h3>
    );
  if (!data) return <p className="p-8 text-center">Loading…</p>;

  return (
    <div className="bg-white min-h-screen">
      <Navbar
        active={
          rawSection === "tnc" ? `/customer/T&C` : `/customer/${rawSection}`
        }
      />
      <div className="h-fit w-full px-[4%]">
        <Link
          href={
            rawSection === "tnc" ? `/customer/T&C` : `/customer/${rawSection}`
          }
        >
          <button className="py-[2rem] text-lg flex items-center text-slate-700">
            <TiArrowLeft /> Back
          </button>
        </Link>

        <div className="flex w-full flex-col lg:flex-row">
          {/* Left Section */}
          <div className="flex-1">
            <p className="responsive-heading !text-left text-[#35736E]">
              {specificData?.title}
            </p>
            <div className="flex gap-4 text-slate-700">
              {specificData?.date_uploaded}
              <p>|</p>
              {specificData?.category}
            </div>

            <div className="h-[70dvh] p-5 rounded-lg overflow-hidden w-full max-h-[350px] md:max-h-fit mx-auto">
              <Image
                className="h-full w-full"
                // src={specificData?.image||''}
                src={
                  `${process.env.NEXT_PUBLIC_CDNURL}${specificData?.image}` ||
                  ""
                }
                alt="no image found"
                height={400}
                width={400}
              />
            </div>
            {Array.isArray(specificData?.description) &&
              specificData.description.map(
                (description: string, index: number) => (
                  <div
                    key={index}
                    className="responsive-subtext text-justify text-slate-700 flex-row"
                  >
                    <p>{description}</p>
                    <br />
                  </div>
                )
              )}
          </div>

          {/* Right Section */}
          <div className="lg:w-[30%] w-full lg:pl-[5%]">
            <p className="text-[#35736E] text-[25px] py-4">
              Recommended Posts :
            </p>
            <div className="w-full h-fit flex flex-wrap gap-3 justify-center items-center pb-[2rem]">
              {data.map((item, index) => (
                <Link
                  href={`/customer/${rawSection}/${item.title}`}
                  key={index}
                  className=""
                >
                  <div className="w-[270px] hover:shadow-lg bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="h-[200px] w-full p-3 object-center rounded-t-lg overflow-hidden">
                      <Image
                        className="h-full w-full"
                        // src={specificData?.image||''}
                        src={
                          `${process.env.NEXT_PUBLIC_CDNURL}${item?.image}` ||
                          ""
                        }
                        alt="no image found"
                        height={400}
                        width={400}
                      />
                    </div>
                    <div className="px-5">
                      <h5 className="mb-2 text-[16px] whitespace-nowrap line-clamp-1 font-bold tracking-tight text-[#35736E]">
                        {item.title}
                      </h5>
                      <p className="mb-3 text-[12px] text-justify line-clamp-4 font-normal text-gray-700 dark:text-gray-400">
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
      <Footer />
    </div>
  );
}
