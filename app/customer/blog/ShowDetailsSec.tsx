"use client";

import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { TiArrowLeft } from "react-icons/ti";
import { Blog } from "./page"; // adjust this path if needed

interface BlogDetailProps {
  blog: Blog;
  recommendedBlogs: Blog[];
  setDetailModel:(val:boolean)=>void;
}

export default function BlogDetailPage({
  blog,
  recommendedBlogs,
  setDetailModel,
}: BlogDetailProps) {
  return (
    <div className="bg-white min-h-screen">
      <div className="h-fit w-full px-[4%]">
        <button onClick={()=>setDetailModel(false)}>
          <button className="py-[2rem] text-lg flex items-center text-slate-700">
            <TiArrowLeft /> Back
          </button>
        </button>

        <div className="flex w-full flex-col lg:flex-row">
          {/* Left Section - Main Blog */}
          <div className="flex-1">
            <p className="responsive-heading !text-left text-[#35736E]">
              {blog.title}
            </p>
            <div className="flex gap-4 text-slate-700">
              {blog.createdAt?.toString().slice(0, 10)}
              <p>|</p>
              {blog.category}
            </div>

            {blog.imagePath && (
              <div className="h-[70dvh] p-5 rounded-lg overflow-hidden w-full max-h-[350px] md:max-h-fit mx-auto">
                <Image
                  className="h-full w-full object-cover"
                  src={`${process.env.NEXT_PUBLIC_CDNURL}${blog.imagePath}`}
                  alt={blog.title}
                  height={400}
                  width={400}
                />
              </div>
            )}

            <div className="responsive-subtext text-justify text-slate-700 flex-row">
              <p>{blog.content}</p>
              <br />
            </div>
          </div>

          {/* Right Section - Recommended */}
          <div className="lg:w-[30%] w-full lg:pl-[5%]">
            <p className="text-[#35736E] text-[25px] py-4">Recommended Posts:</p>
            <div className="w-full h-fit flex flex-wrap gap-3 justify-center items-center pb-[2rem]">
              {recommendedBlogs
                .filter((item) => item._id !== blog._id)
                .map((item) => (
                  <Link
                    href={`/blogs/${encodeURIComponent(item._id)}`}
                    key={item._id}
                  >
                    <div className="w-[270px] hover:shadow-lg bg-white border border-gray-200 rounded-lg shadow-sm">
                      <div className="h-[200px] w-full p-3 object-center rounded-t-lg overflow-hidden">
                        <Image
                          className="h-full w-full object-cover"
                          src={`${process.env.NEXT_PUBLIC_CDNURL}${item.imagePath}`}
                          alt={item.title}
                          height={400}
                          width={400}
                        />
                      </div>
                      <div className="px-5">
                        <h5 className="mb-2 text-[16px] whitespace-nowrap line-clamp-1 font-bold tracking-tight text-[#35736E]">
                          {item.title}
                        </h5>
                        <p className="mb-3 text-[12px] text-justify line-clamp-4 font-normal text-gray-700">
                          {item.content.slice(0, 100)}...
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
