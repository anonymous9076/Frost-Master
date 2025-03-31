import React from "react";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section6 from "./Components/Section6";
import Section7 from "./Components/Section7";
import Section8 from "./Components/Section8";
import Footer from "../../components/Footer";
import Section5 from "./Components/Section5";
import Section4 from "./Components/Section4";
import Section3 from "./Components/Section3";

const page = () => {
  return (
    <div className="light">
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Section7></Section7>
      <Section8></Section8>
      <Footer></Footer>
    </div>
  );
};

export default page;

{
  /* section 2 */
}
{
  /* <div className="h-[70dvh] flex items-center w-full bg-white">
        <div className="flex-1 h-full flex items-center justify-end">
          <Image
            className="h-[80%] w-[90%]"
            src="https://s3-alpha-sig.figma.com/img/d4e4/d339/7cdb53da4a81ef7cdae1e05253f63f8c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sI1IhwMI~CkbdsXk7VDYmbyBJIa8AqWUo01NqVy~aCF1JtN0nQU55YvN5MKs9m7P1XIxfr-lizu6MBAO9kcQxnvc49WZiFRj0ig6fA3RmheT0jAXxAJPuAMjtSGj05JsrAVAP~Ga~QNs9ErLoK1TJ5hnhXnhCR86tuBklv~JKKBkxzGE5764bz7CeGk3JeLYn3Zets0yUPgo~qlmbDm24Rf3Z0lmy12n~as4R3PuURLDt78ml4Uszx8volVjU4Xgvur2oSI4TrsZ6xZEyz6IgWsQZxUxxyNAnUu-nG60xSubrlzJNqIGCZXY7UFOTfuPtt7yJzRsBSjKR-9ATPKdqQ__"
            alt="frost"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="flex-1 h-full pl-[4rem] flex items-start justify-center flex-col">
          <p className="text-[#4C585B] leading-12 w-[75%]  text-[36px] font-bold">
            Innovative Manufacturing with<br></br> FROST MASTER
          </p>
          <p className="text-[#4C585B] w-[70%]  text-[22px]">
            FROST MASTER | Manufacturer of Commercial Refrigerators, we are
            dedicated to providing innovative manufacturing solutions for our
            clients. Our state-of-the-art technology and experienced team ensure
            that we deliver exceptional products every time. Contact us today to
            learn more about our services and how we can help yo
          </p>
          <button className="bg-gray-300 rounded-md px-4 py-2 text-black mt-6 tracking-wide">
            Find out More
          </button>
        </div>
      </div> */
}
{
  /* section3 */
}
{
  /* <h2 className="w-full text-center text-[40px] font-bold text-[#4C585B] bg-white py-[1rem]">
        Our Products
      </h2> */
}
{
  /* <div className="bg-[#F4EDD3] h-[40dvh] flex items-center transition-all  duration-500   justify-between text-black px-[2rem]  w-full">
        <span
          className="text-[30px] text-gray-600"
          onClick={() => handleMoveElement(products, 0, products.length)}
        >
          <FaChevronLeft></FaChevronLeft>
        </span>
        <div className="h-full flex-1  flex justify-evenly items-center">
          {products &&
            products.slice(0, 4).map((item, index) => (
              <span
                key={index}
                className="text-center min-w-[250px] w-[15%] font-bold text-[30px] gap-2 text-gray-700  flex flex-col items-center justify-center h-full "
              >
                <Image
                  className="rounded-md w-full h-[62%] "
                  src={item.image}
                  alt="Product"
                  width={500}
                  height={500}
                ></Image>
                {item.title}
              </span>
            ))}
        </div>
        <span
          className="text-[30px] text-gray-600"
          onClick={() => handleMoveElement(products, products.length - 1, 0)}
        >
          <FaChevronRight></FaChevronRight>
        </span>
      </div> */
}
{
  /* section 4 */
}
{
  /* <div className="h-fit w-full bg-white pb-[3rem]">
        <h1 className=" w-full text-center font-bold text-[40px] text-[#4C585B] py-[3rem]">
          What Makes us prominent players
        </h1>
        <div className="h-fit px-[3rem] w-full grid-cols-3 gap-y-14 grid">
          {review &&
            review.splice(0, 6).map((item, index) => (
              <div
                key={index}
                className="h-full rounded-lg  p-[2rem] mx-[2rem] bg-[#D0DDD0]"
              >
                <h1 className=" w-full text-center font-semibold text-[30px] text-[#4C585B]">
                  {item.title}
                </h1>
                <p className=" w-full  text-justify text-[20px] text-[#4C585B] ">
                  {item.desc}
                </p>
              </div>
            ))}
        </div>
      </div> */
}
