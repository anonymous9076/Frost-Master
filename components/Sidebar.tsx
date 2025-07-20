"use client";
import React, { useContext, useEffect, useState } from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import Link from "next/link";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { RiBloggerLine } from "react-icons/ri";
import UserAuthContext from "@/app/context/userAuthContext";
import { usePathname } from "next/navigation";
import { LiaWpforms } from "react-icons/lia";
import Image from "next/image";
const Sidebar = () => {
  const pathName = usePathname();
  const { logoutUser } = useContext(UserAuthContext)!;
  const [active, setActive] = useState(true);
  const [activePage, setActivePage] = useState(pathName);

  const sidebarLinks = [
    {
      href: "/admin/users",
      label: "Customers",
      icon: <RiCustomerService2Fill />,
    },
    {
      href: "/admin/products",
      label: "Products",
      icon: <AiOutlineProduct />,
    },
    {
      href: "/admin/orders",
      label: "Orders",
      icon: <MdOutlineShoppingCart />,
    },
    {
      href: "/admin/payments",
      label: "Payments",
      icon: <MdOutlinePayments />,
    },
    {
      href: "/admin/enquiry",
      label: "Enquiry",
      icon: <MdOutlineSupportAgent />,
    },
    {
      href: "/admin/proforma",
      label: "Proforma",
      icon: <LiaWpforms />,
    },
     {
      href: "/admin/blog",
      label: "Blog",
      icon: <RiBloggerLine />,
    },
  ];

  useEffect(() => {
    setActivePage(pathName);
  }, [pathName]);

  useEffect(() => {
    console.log(window.outerWidth);
    const handleResize = () => {
      if (window.outerWidth < 810) {
        setActive(false);
      } else {
        setActive(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {active ? (
        <div className="h-full w-[15%] min-w-[250px] relative flex flex-col  !transition-all duration-500 ease-in-out   bg-white">
          <div className="  w-full bg-blue-400  text-left  text-white text-[18px] font-black flex items-center justify-between px-3 ">
            
            <div className="flex items-center p-3 gap-3 whitespace-nowrap">
              <Image
                src="/Logo.png"
                alt="Logo"
                height={400}
                width={400}
                className=""
              ></Image>
            </div>
            <span
              className="text-white  text-[22px]"
              onClick={() => setActive(false)}
            >
              <TbLayoutSidebarLeftCollapseFilled />
            </span>
          </div>

          {/* sidebar body */}
          {/* <div className="px-3 pb-3 flex justify-between flex-col flex-1">

          <div className=" cursor-pointer w-full  py-3 m-0 text-gray-700  flex flex-col gap-2 ">
            <Link
              href="/admin/users"
              className={`py-3 ${
                activePage === "/admin/users"
                  ? "bg-blue-400 text-white"
                  : "text-black"
              } w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group`}
              title="Customers"
            >
              {" "}
              <span
                className={`${
                  activePage === "/admin/users"
                    ? " text-white"
                    : "text-blue-400"
                }group-hover:text-white  text-[22px]`}
              >
                <RiCustomerService2Fill />
              </span>{" "}
              Customers
            </Link>
            <Link
              href="/admin/products"
              className={`py-3 ${
                activePage === "/admin/products"
                  ? "bg-blue-400 text-white"
                  : "text-black"
              } w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group`}
              title="Product"
              // onClick={() => setActivePage("/admin/products")}
            >
              {" "}
              <span
                className={`${
                  activePage === "/admin/products"
                    ? " text-white"
                    : "text-blue-400"
                }group-hover:text-white  text-[22px]`}
              >
                <AiOutlineProduct />
              </span>{" "}
              Products
            </Link>
            <Link
              href="/admin/orders"
              className={`py-3 ${
                activePage === "/admin/orders"
                  ? "bg-blue-400 text-white"
                  : "text-black"
              } w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group`}
              title="Orders"
              // onClick={() => setActivePage("/admin/orders")}
            >
              {" "}
              <span
                className={`${
                  activePage === "/admin/orders"
                    ? " text-white"
                    : "text-blue-400"
                }group-hover:text-white  text-[22px]`}
              >
                <MdOutlineShoppingCart />
              </span>{" "}
              Orders
            </Link>
            <Link
              href="/admin/payments"
              className={`py-3 ${
                activePage === "/admin/payments"
                  ? "bg-blue-400 text-white"
                  : "text-black"
              } w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group`}
              title="Payments"
              // onClick={() => setActivePage("/admin/payments")}
            >
              {" "}
              <span
                className={`${
                  activePage === "/admin/payments"
                    ? " text-white"
                    : "text-blue-400"
                }group-hover:text-white  text-[22px]`}
              >
                <MdOutlinePayments />
              </span>{" "}
              Payments
            </Link>
           
            <Link
              href="/admin/enquiry"
              className={`py-3 ${
                activePage === "/admin/enquiry"
                  ? "bg-blue-400 text-white"
                  : "text-black"
              } w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group`}
              title="enquiry"
              // onClick={() => setActivePage("/admin/enquiry")}
            >
              <span
                className={`${
                  activePage === "/admin/enquiry"
                    ? " text-white"
                    : "text-blue-400"
                }group-hover:text-white  text-[22px]`}
              >
                <MdOutlineSupportAgent />
              </span>{" "}
              Enquiry
            </Link>
            <Link
              href="/admin/proforma"
              className={`py-3 ${
                activePage === "/admin/proforma"
                  ? "bg-blue-400 text-white"
                  : "text-black"
              } w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group`}
              title="Proforma"
              // onClick={() => setActivePage("/admin/Proforma")}
            >
              <span
                className={`${
                  activePage === "/admin/proforma"
                    ? " text-white"
                    : "text-blue-400"
                }group-hover:text-white  text-[22px]`}
              >
                <LiaWpforms />
              </span>{" "}
              Proforma
            </Link>
          </div>

          <div
            onClick={logoutUser}
            className="py-2 w-full cursor-pointer rounded-lg bg-blue-400 font-bold text-center flex gap-2 items-center justify-center text-white"
          >
            {" "}
            <RiLogoutCircleLine></RiLogoutCircleLine> Logout
          </div>
        </div> */}
          <div className="px-3 pb-3 flex justify-between flex-col flex-1">
            <div className="cursor-pointer w-full py-3 m-0 text-gray-700 flex flex-col gap-2">
              {sidebarLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 ${
                    activePage === item.href
                      ? "bg-blue-400 text-white"
                      : "text-black"
                  } w-full flex items-center px-4 rounded-lg transition-all duration-500 ease-in-out hover:shadow-lg hover:bg-blue-400 hover:text-white gap-3 text-[16px] group`}
                  title={item.label}
                >
                  <span
                    className={`${
                      activePage === item.href ? "text-white" : "text-blue-400"
                    } transition-all duration-500 ease-in-out group-hover:text-white text-[22px]`}
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>

            <div
              onClick={logoutUser}
              className="py-2 w-full cursor-pointer rounded-lg bg-blue-400 font-bold text-center flex gap-2 items-center justify-center text-white"
            >
              <RiLogoutCircleLine /> Logout
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full w-[60px] min-w-[60px] flex flex-col  !transition-all duration-500 ease-in-out relative bg-white">
          <div
            onClick={() => setActive(true)}
            className="pt-[33px] pb-[15px] w-full   text-center  text-blue-400 text-[25px] font-black flex items-center justify-center gap-3"
          >
            <TbLayoutSidebarLeftExpandFilled />{" "}
          </div>
          <div className="flex-1 w-full py-3 m-0 text-gray-700  flex flex-col gap-2 ">
            <Link
              href="/admin/users"
              className={`py-3  w-[90%] mx-auto flex items-center justify-center rounded-lg hover:shadow-lg hover:bg-blue-400 hover:text-white ${
                activePage === "/admin/users"
                  ? "bg-blue-400 text-white"
                  : "text-blue-400"
              }  gap-3 text-[16px] group`}
              title="Customers"
            >
              {" "}
              <span
                className={`group-hover:text-white  ${
                  activePage === "/admin/users" ? " text-white" : "text-blue-400"
                }  text-[22px]`}
              >
                <RiCustomerService2Fill />
              </span>{" "}
            </Link>
            <Link
              href="/admin/products"
              className={`py-3  w-[90%] mx-auto flex items-center justify-center rounded-lg hover:shadow-lg hover:bg-blue-400 hover:text-white ${
                activePage === "/admin/products"
                  ? "bg-blue-400 text-white"
                  : "text-blue-400"
              }  gap-3 text-[16px] group`}
              title="Product"
            >
              {" "}
              <span
                className={`group-hover:text-white  ${
                  activePage === "/admin/products"
                    ? "bg-blue-400 text-white"
                    : "text-blue-400"
                }  text-[22px]`}
              >
                <AiOutlineProduct />
              </span>{" "}
            </Link>
            <Link
              href="/admin/orders"
              className={`py-3  w-[90%] mx-auto flex items-center justify-center rounded-lg hover:shadow-lg hover:bg-blue-400 hover:text-white ${
                activePage === "/admin/orders"
                  ? "bg-blue-400 text-white"
                  : "text-blue-400"
              }  gap-3 text-[16px] group`}
              title="Orders"
            >
              {" "}
              <span
                className={`group-hover:text-white  ${
                  activePage === "/admin/orders"
                    ? "bg-blue-400 text-white"
                    : "text-blue-400"
                }  text-[22px]`}
              >
                <MdOutlineShoppingCart />
              </span>{" "}
            </Link>
            <Link
              href="/admin/payments"
              className={`py-3  w-[90%] mx-auto flex items-center justify-center rounded-lg hover:shadow-lg hover:bg-blue-400 hover:text-white ${
                activePage === "/admin/payments"
                  ? "bg-blue-400 text-white"
                  : "text-blue-400"
              }  gap-3 text-[16px] group`}
              title="Payments"
            >
              {" "}
              <span
                className={`group-hover:text-white  ${
                  activePage === "/admin/payments"
                    ? "bg-blue-400 text-white"
                    : "text-blue-400"
                }  text-[22px]`}
              >
                <MdOutlinePayments />
              </span>{" "}
            </Link>
            {/* <Link
              href="/admin/settings"
              className={`py-3  w-[90%] mx-auto flex items-center justify-center rounded-lg hover:shadow-lg hover:bg-blue-400 hover:text-white activePage === "/admin/enquiry"
                  ? "bg-blue-400 text-white"
                  : "text-blue-400"  gap-3 text-[16px] group`}
              title="Settings"
            >
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <LuSettings />
              </span>{" "}
            </Link> */}
            <Link
              href="/admin/enquiry"
              className={`py-3  w-[90%] mx-auto flex items-center justify-center rounded-lg hover:shadow-lg hover:bg-blue-400 hover:text-white ${
                activePage === "/admin/enquiry"
                  ? "bg-blue-400 text-white"
                  : "text-blue-400"
              }  gap-3 text-[16px] group`}
              title="enquiry"
            >
              <span
                className={`group-hover:text-white  ${
                  activePage === "/admin/enquiry"
                    ? "bg-blue-400 text-white"
                    : "text-blue-400"
                }  text-[22px]`}
              >
                <MdOutlineSupportAgent />
              </span>{" "}
            </Link>
            <Link
              href="/admin/proforma"
              className={`py-3  w-[90%] mx-auto flex items-center justify-center rounded-lg hover:shadow-lg hover:bg-blue-400 hover:text-white ${
                activePage === "/admin/proforma"
                  ? "bg-blue-400 text-white"
                  : "text-blue-400"
              }  gap-3 text-[16px] group`}
              title="proforma"
            >
              <span
                className={`group-hover:text-white  ${
                  activePage === "/admin/proforma"
                    ? "bg-blue-400 text-white"
                    : "text-blue-400"
                }  text-[22px]`}
              >
                <LiaWpforms />
              </span>{" "}
            </Link>
            <Link
              href="/admin/proforma"
              className={`py-3  w-[90%] mx-auto flex items-center justify-center rounded-lg hover:shadow-lg hover:bg-blue-400 hover:text-white ${
                activePage === "/admin/proforma"
                  ? "bg-blue-400 text-white"
                  : "text-blue-400"
              }  gap-3 text-[16px] group`}
              title="proforma"
            >
              <span
                className={`group-hover:text-white  ${
                  activePage === "/admin/proforma"
                    ? "bg-blue-400 text-white"
                    : "text-blue-400"
                }  text-[22px]`}
              >
                <RiBloggerLine />
              </span>{" "}
            </Link>
          </div>
          <div
            onClick={logoutUser}
            className="py-2 w-[90%] cursor-pointer mx-auto rounded-lg bg-blue-400 font-bold flex items-center justify-center text-center  text-white"
            title="Logout"
          >
            <RiLogoutCircleLine></RiLogoutCircleLine>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
