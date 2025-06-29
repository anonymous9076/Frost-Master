import React from "react";
import Image from "next/image";
const Section5 = () => {
const object = [
  { image: `https://img1.wsimg.com/isteam/ip/49ed8486-628e-4b4a-93b2-2d761788d1d5/icon.jpg`, title: "FRESH TO HOME" },
  { image: `https://img1.wsimg.com/isteam/ip/49ed8486-628e-4b4a-93b2-2d761788d1d5/png-transparent-tata-football-academy-de-jamsh.png`, title: "TATA" },
  { image: `https://img1.wsimg.com/isteam/ip/49ed8486-628e-4b4a-93b2-2d761788d1d5/delhi-s-famous-authentic.jpeg`, title: "GIANI" },
  { image: `https://img1.wsimg.com/isteam/ip/49ed8486-628e-4b4a-93b2-2d761788d1d5/Screenshot%202023-04-01%20135253-03848a5.jpg`, title: "CALVIN KARE" },
  { image: `https://img1.wsimg.com/isteam/ip/49ed8486-628e-4b4a-93b2-2d761788d1d5/basil_logo.jpg`, title: "BASIL" },
  { image: `https://img1.wsimg.com/isteam/ip/49ed8486-628e-4b4a-93b2-2d761788d1d5/1634554180433.jpeg`, title: "AXON" },
  { image: `https://img1.wsimg.com/isteam/ip/49ed8486-628e-4b4a-93b2-2d761788d1d5/1594632398_BurgersinghLogo.png`, title: "BURGER SINGH" },
  { image: `https://img1.wsimg.com/isteam/ip/49ed8486-628e-4b4a-93b2-2d761788d1d5/1200px-Dabur_Logo.svg.png`, title: "DABUR" },
];


  return (
    <div className="olive w-full px-[5%] py-[4rem]">
      <h3 data-aos="fade-up" className="text-center w-full responsive-heading">
        Trusted by thoudsands Businesss
      </h3>
      <p data-aos="fade-up" className="text-center w-full responsive-subtext">
        More than 15,000 companies and partners trust FrostMaster for
        excellence, reliability, and superior kitchen solutions.
      </p>
      <div className="   w-[100%] flex flex-wrap justify-center   py-[3rem]  mx-auto h-fit gap-5">
        {object.map((item, index) => (
          <div
          key={index}
            data-aos="fade-up"
            data-aos-delay={`${(index + 2) * 100}`}
          >

            <div
              key={index}

              className="py-[2rem] responsive-subtext light text-left px-[10%] min-w-[300px] hover:shadow-md hover:scale-105 transition-transform duration-300 w-full flex items-center justify-start gap-2 font-bold border rounded-lg  shadow-md border-white"
            >
              <Image
                src={item.image}
                alt="ew"
                height={400}
                width={400}
                className=" w-[45px] object-contain object-center border border-gray-400 rounded-full h-[45px] "
              />
              {item.title}
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Section5;
