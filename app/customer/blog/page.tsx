"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/Footer"));

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Electric Ovens for Home Baking in 2025",
    description:
      "Explore the best electric ovens with smart features and energy efficiency.",
    author: "Chef Anita",
    date: "April 15, 2025",
    image: "/Images/frostservices/img1.jpg",
  },
  {
    id: 2,
    title: "Kitchen Equipment Essentials for Modern Restaurants",
    description:
      "A complete guide to setting up your commercial kitchen with the latest appliances.",
    author: "KitchenPro",
    date: "April 12, 2025",
    image: "/Images/frostservices/img1.jpg",
  },
  {
    id: 3,
    title: "Convection vs. Conventional Ovens: What’s Right for You?",
    description:
      "Understand the difference between oven types and how it affects cooking.",
    author: "Food Tech Journal",
    date: "April 10, 2025",
    image: "/Images/frostservices/img1.jpg",
  },
];

export default function Blogs() {
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#35736E]">
            FROST MASTER BLOGS
          </h1>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            >
              <Image
                className="w-full h-48 sm:h-56 md:h-60 object-cover"
                src={post.image}
                height={300}
                width={400}
                alt={post.title}
              />
              <div className="p-5">
                <span className="flex gap-2 py-2 text-[#35736E] text-sm">
                  <p>{post.date}</p>
                </span>
                <h2 className="text-xl font-semibold text-[#35736E] mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-3">{post.description}</p>
                <p className="text-sm text-gray-500 mb-3">By {post.author}</p>
                <a
                  href="#"
                  className="inline-block text-sm text-white bg-[#35736E] px-4 py-2 rounded-md hover:bg-[#285a56] transition"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
