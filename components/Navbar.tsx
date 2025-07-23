"use client";
import React, { useContext, useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import Image from "next/image";
import UserAuthContext from "@/app/context/userAuthContext";
import { logout } from "@/app/api/Auth/routeData";
import { toast } from "react-toastify";
import NavDrop from "./NavDrop";
import { useCartStore } from "@/app/stores/CartStore";
import { getCategory } from "@/app/api/Product";

interface navprops {
  active: string;
}

interface catNSubCat {
  name: string;
  _id: string;
}
interface navfields {
  label: string;
  link: string;
  list: string[];
}
const Navbar = ({ active }: navprops) => {
  const [activeNavDrop, setActiveNavDrop] = useState<boolean>(false);
  const [hoveredNavField, setHoveredNavField] = useState<navfields>({
    label: "",
    link: "",
    list: [],
  });
  const [categories, setCategories] = useState([]);
  async function getcategories() {
    try {
      const data = await getCategory();
      const dataData = data.map((val: catNSubCat) => val.name);
      setCategories(dataData);
    } catch (err) {
      console.log(err);
    }
  }
  const navLinks = [
    // {
    //   label: "Home",
    //   link: "/customer/home",
    //   list: [
    //     "Explore Our Kitchen Solutions",
    //     "Our Customer Service",
    //     "Connecting Cities",
    //     "Experiences Shared by Our Clients",
    //     "Trusted by thousands Businesses",
    //     "What Makes us prominent players",
    //     "Why Frost Master ?",
    //   ],
    //   img: "Images/PremiumKitchenEquipments/img4.jpg",
    // },
    {
      label: "About Us",
      link: "/customer/about",
      list: [
        "Innovation Meets Perfection.",
        "Our core ideology",
        "Connecting Cities",
        "Trusted by thousands Businesses",
      ],
      img: "Images/PremiumKitchenEquipments/img14.jpg",
    },
    {
      label: "Our Products",
      link: "/customer/products",
      list: categories,
      img: "Images/PremiumKitchenEquipments/img24.jpg",
    },
    {
      label: "Services",
      link: "/customer/services",
      list: [
        "Our Features",
        "After Sale Service Or Amc",
        "Installation",
        "Lpg Pipeline Design Installation",
        "Commercial Kitchen Layout Design",
      ],
      img: "Images/PremiumKitchenEquipments/img34.jpg",
    },
    {
      label: "My Orders",
      link: "/customer/myorders",
      list: ["Your Order History", "Order Status"],
      img: "Images/PremiumKitchenEquipments/img4.jpg",
    },
    {
      label: "Career",
      link: "/customer/career",
      list: ["Careers in Frost Master", "We're Hiring!"],
      img: "Images/PremiumKitchenEquipments/img14.jpg",
    },
    {
      label: "T&C",
      link: "/customer/T&C",
      list: [
        "Terms and Conditions",
        "Refrigerated Display Case",
        "Ice Cream Machine",
        "Bakery Equipment",
      ],
      img: "Images/PremiumKitchenEquipments/img24.jpg",
    },
    {
      label: "Blogs",
      link: "/customer/blog",
      list: [
        "Convection vs. Conventional Ovens: What’s Right for You?",
        "Kitchen Equipment Essentials for Modern Restaurants",
        "Top 5 Electric Ovens for Home Baking in 2025",
      ],
      img: "Images/PremiumKitchenEquipments/img34.jpg",
    },
  ];
  const [profile, setProfile] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const { isAuthenticated, user, setUser } = useContext(UserAuthContext)!;
  const cartData = useCartStore((state) => state.cartData);
  const [totalQuantity, setTotalQuantity] = useState(
    cartData.reduce((total, item) => total + item.quantity, 0)
  );

  // console.log(user, cartData, "user details");
  async function handleLogout() {
    try {
      const res = await logout();
      localStorage.clear();
      console.log(res);
      setUser(null);
      location.reload();
      toast.success("logout successfully");
    } catch (error) {
      console.log(error);
      toast.error("error");
    }
  }
  const handleCloseModel = () => {
    setActiveNavDrop(false);
  };
  const handleOpenModel = (item: navfields) => {
    setHoveredNavField(item);
    setActiveNavDrop(true);
  };

  useEffect(() => {
    getcategories();
    setTotalQuantity(
      cartData.reduce((total, item) => total + item.quantity, 0)
    );
  }, [cartData]);

  return (
    <>
      <div
        className={`h-[10dvh] max-h-[90px] w-[full]   sticky z-90 top-0 left-0  bg-[#235753] text-white flex items-center justify-between px-[2%]  `}
      >
        {/* <NavDrop></NavDrop> */}
        <Link
          href="/customer/home"
          className="h-full min-w-[160px] w-[17%]   border-none outline-none "
        >
          <div className="w-full h-full flex items-center sm:py-3 justify-start px-2  ">
            <Image
              // src="/LOGO.png"
              src={`${process.env.NEXT_PUBLIC_CDNURL}${"LOGO.png"}` || ""}
              alt=""
              height={300}
              width={300}
              className="h-full hidden sm:block w-full"
            ></Image>
            <Image
              src="/LOGO2.png"
              alt=""
              height={300}
              width={300}
              className="h-[40px] sm:hidden  w-[40px] "
            ></Image>
          </div>
        </Link>
        <div className=" text-white lg:flex h-full items-start    text-[18px] hidden ">
          {navLinks.map((item, index) => {
            if (
              item.label === "My Orders" &&
              !(user?.roleType === "customer" && isAuthenticated)
            ) {
              return null; // Skip rendering "My Orders" if conditions not met
            }

            return (
              <div
                onMouseEnter={() => handleOpenModel(item)}
                onMouseLeave={handleCloseModel}
                key={index}
                className=" flex items-center  px-[16px] h-full"
              >
                <Link
                  href={item.link}
                  className={`transform hover:scale-110 transition  whitespace-nowrap duration-200 ${
                    active === item.link ? "active" : ""
                  }`}
                >
                  {item.label}
                </Link>
                {/* <NavDrop
                title={hoveredNavField?.label}
                list={hoveredNavField?.list}
                active={activeNavDrop}
              ></NavDrop> */}
                <NavDrop
                  title={item.label}
                  list={item.list}
                  link={item.link}
                  image={item.img}
                  active={
                    activeNavDrop && hoveredNavField?.label === item.label
                  }
                  handleCloseModel={handleCloseModel}
                />
                {/* put the navdrip out  */}
              </div>
            );
          })}
        </div>
        <div className="flex items-center text-white gap-3 text-[20px]">
          <span
            className="text-[22px] relative "
            onClick={() => setProfile((curr: boolean) => !curr)}
          >
            {profile && isAuthenticated ? (
              <div className="absolute top-[2rem] right-[-8rem] bg-white rounded-lg h-fit w-[300px]">
                <div className="w-full py-3 px-5 flex flex-col gap-3  ">
                  <div className="text-left  flex  rounded-full gap-3 items-center  object-contain  overflow-hidden ">
                    <Image
                      src="https://th.bing.com/th/id/OIP.ZO2UnkvC5wL3-vo0FeHfdgHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      height={400}
                      width={400}
                      className=" customer_image h-[48px]  w-[53px]"
                      alt="customer"
                    />
                    <div className="text-gray-800 overflow-hidden whitespace-nowrap customer_name font-bold">
                      {user?.userName}
                    </div>
                  </div>
                  <div className="flex justify-between flex-col text-[16px]  ml-2">
                    <div className="text-gray-500 whitespace-nowrap overflow-hidden customer_email">
                      <span className="font-semibold text-black ">
                        Email :{" "}
                      </span>{" "}
                      {user?.email}
                    </div>
                    {/* <div className="text-gray-500 whitespace-nowrap overflow-hidden customer_phone">
                      <span className="font-semibold text-black ">
                        Phone :{" "}
                      </span>{" "}
                      +91 89574-58474
                    </div> */}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <GoPerson></GoPerson>
          </span>
          <Link
            href="/customer/mycart"
            className={`relative flex items-center gap-1  ${
              active === "/customer/mycart"
                ? "transform hover:scale-110 active"
                : ""
            }`}
          >
            {/* Cart Icon */}
            <BsCart3 className="text-2xl" />

            {/* Quantity Badge */}
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </Link>

          <Link
            className="lg:hidden"
            href="/signin"
          >
          <span className="text-[25px] " title="logout"  onClick={() => {
                if (isAuthenticated) {
                  handleLogout();
                } else {
                }
              }}>
            <TbLogout2></TbLogout2>
          </span>
          </Link>

          <span
            className="text-[25px] lg:hidden"
            onClick={() => setMenu((curr: boolean) => !curr)}
          >
            <IoIosMenu></IoIosMenu>
          </span>
          <Link
            className="hidden lg:block"
            href="/signin"
          >
            <button
              className="px-3 py-1 rounded-md olive ml-5 cursor-pointer"
              onClick={() => {
                if (isAuthenticated) {
                  handleLogout();
                } else {
                }
              }}
            >
              {isAuthenticated ? "Logout" : "Login"}
            </button>
          </Link>
        </div>
        {menu ? (
          <div className="h-[90dvh] fixed flex flex-col z-1 top-[10dvh] right-0 bg-[#235753] text-white w-[300px]">
            <ul className="w-full flex-1 space-y-3 py-[2rem]">
              {navLinks.map((item, index) => {
                // Check if item.label === 'My Orders'
                if (
                  item.label === "My Orders" &&
                  !(user?.roleType === "customer" && isAuthenticated)
                ) {
                  return null; // Skip rendering "My Orders" if conditions not met
                }

                return (
                  <li
                    key={index}
                    className="py-2 hover:bg-white text-[18px] hover:text-[#235753] text-center"
                  >
                    <Link
                      href={item.link}
                      className={`transform hover:scale-110 transition duration-200 ${
                        active === item.link ? "active" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="w-full text-white text-center py-5 border-t border-white text-[22px]">
              The Frost Pvt Ltd.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;
