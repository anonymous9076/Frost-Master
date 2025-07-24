"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/Footer"));
import { getAllBlogs } from "@/app/api/Blog";
import { dateFormate } from "@/app/utlis/dateFormate/dateFormating";

const InitialsblogPosts: Blog[] = [
  {
    _id: "1",
    title: "Top 5 Electric Ovens for Home Baking in 2025",
    content:
      "Explore the best electric ovens with smart features and energy efficiency.",
    category: "Home",
    status: "published",
    createdAt: "2025-04-15T00:00:00Z",
    updatedAt: "2025-04-15T00:00:00Z",
    imagePath: "/oven1.jpg",
  },
  {
    _id: "2",
    title: "Kitchen Equipment Essentials for Modern Restaurants",
    content:
      "A complete guide to setting up your commercial kitchen with the latest appliances.",
    category: "Commercial",
    status: "published",
    createdAt: "2025-04-12T00:00:00Z",
    updatedAt: "2025-04-12T00:00:00Z",
    imagePath: "Images/frostservices/img1.jpg",
  },
  {
    _id: "3",
    title: "Convection vs Conventional Ovens What's Right for You",
    content:
      "Understand the difference between oven types and how it affects cooking.",
    category: "Technology",
    status: "published",
    createdAt: "2025-04-10T00:00:00Z",
    updatedAt: "2025-04-10T00:00:00Z",
    imagePath: "/oven2.jpg",
  },
];


export interface Blog {
  _id: string;
  title: string;
  content: string;
  category: string;
  status: string;
  imagePath?: string;
  createdAt?: string|undefined;
  updatedAt?: string;
}

export default function Blogs() {

  const [blogPosts, setBlogPosts] = React.useState<Blog[]>(InitialsblogPosts);

  useEffect(() => {
    const fetchBlogData = async () => {
      const response = await getAllBlogs();
      console.log(response,process.env.NEXT_PUBLIC_CDNURL);
      setBlogPosts(response)

    };
    fetchBlogData();
  }, []);

  return (
    <>
      <Head>
        <title>Blog - Kitchen & Appliances Insights</title>
        <meta
          name="description"
          content="Expert reviews and tips on ovens, electrical appliances, and kitchen equipment."
        />
      </Head>

      <Navbar active="/customer/blog" />

      <div className="h-fit min-h-screen w-full light py-10 px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#35736E]">
            FROST MASTER BLOGS
          </h1>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post,index:number) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            >
              <Image
                className="w-full h-48 sm:h-56 md:h-60 object-cover"
                src={`${process.env.NEXT_PUBLIC_CDNURL}${post?.imagePath}`}
                height={300}
                width={400}
                alt={post.title}
              />
              <div className="p-5">
                <p className="text-sm text-gray-500 pb-2"> {post.category}</p>
               
                <h2 className="text-xl  font-semibold text-[#35736E] mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 text-justify mb-3">
                  {post.content}
                </p>
                 <span className="flex gap-2 py-2 text-[#35736E] text-sm">
                  <p> Created on {dateFormate(post?.createdAt || "")}</p>
                </span>
                <Link
                  href={`/customer/blog/${post.title}`}
                  className="inline-block text-sm text-white bg-[#35736E] px-4 py-2 rounded-md hover:bg-[#285a56] transition"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
