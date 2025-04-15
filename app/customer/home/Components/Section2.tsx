import Image from "next/image";
import React from "react";
const img = [
  {
    text: 'Kitchen Equipment',
    image: 'https://s3-alpha-sig.figma.com/img/cc7c/2f23/a0fb582ec2144e0690dd63283e98dba8?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KodzfgexOdqGJZzem8XmprUFRLyGlQylTrKrhK4BGg3m9Dv5aTisebBT-XjoJzjIYUmH3jv0XEfyWMl8b0j8SSjSvNqCcZX9uzWVyPk55B9G8g6CJb98CP1cTaFO7ZcU3HtOqdheQRTER-5-VpvkQuN-vtNvmDJMr8ao69XDBsT-gkhlph7aXWZgehre78cqva1ZozDCknfK60fPDeKhLb~TXrFmdo2P8QDE9bOhTprWJ0oSgCraQdOAwSmf8p0sfdPxQOLQOtzRpvZdtara6O4e8KXffc0EBMCxjalT5tmri6zkagpOAkZKbNdNCDJDM1nasN~qOaD6bER3Ohb91Q__'
  },
  {
    text: 'Specialty Appliances',
    image: 'https://s3-alpha-sig.figma.com/img/2084/589e/76fe2afdfd9676204fe654b52045e80b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r7KUYJa1jsXbeGjTtYNloa9rAPk1DXwXnrbqBNesVmIru8f0N5Aodd3RhggylVONdZRTIH~O7iR0uZOexL9~LSteyOPOa6IKH~yb-8avCF5adnnjBLowKJuVG3ZKq6LZ~EmsMjrvzfz7mg~CewHsoFIrsH6WqzmtsRut4jtNKlZWiF93HuJN6Hj~zDwA76HpwfFw9PX8hz85TEeMqHYqU~r~-TbkDLJhUZ0OP397OrpOdo09~N535PkW55Ki92TOG19pazPsolxr1gG3VY-9vuIz4GwZJJ1cbKuTfaazZmC6MkSp6Xs7EJcgOHWf0GrfD80Tn1OC-sMOOqfGjK7iDQ__'
  },
  {
    text: ' Food Preparation Tools',
    image: 'https://s3-alpha-sig.figma.com/img/483d/f8ef/8f2e3c6398f93231f5ed8c01abe46fad?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cW49S2fWY2i-EXHjPeeezQlDiMsB5qHH10wy6BFi7PcjfEPln~DdWSaUqVKZRw1eE9hEf8ofDO9yUmFYXtePrfzuV--i-inaxps2l9aEX0cb4nmQBDRcKC9RUyURWvZl3LJbmATMfrJQnMGnUkDOn~n5U9-vpyttKr3cEo~XY-fMxaeqwu8IDvxk687u-n7NOdihsYghptB7gtTd4ybFPLwwq-PFT5z6tEPTKggMAR2mcl5J9xI6-3sVXQOj9LXrodvcQ9bzAzI~8A1BI1oTUmfjWY68RR3Y~AHPZaZ8r2hJbU5ZTj7I7gYDD~1XYTDUruHjsmjl7anHDGm98OShqw__'
  },
  {
    text: 'Refrigeration Solutions',
    image: 'https://s3-alpha-sig.figma.com/img/1f2c/9c67/b51a34f78375c2eb22450083605ad303?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p2-f-SXx265KyX-OWTbESwDcsonIOKWW5NOhhZYChwEjtHOOTMZ8JEkY8LhkB04cwS-UaDQdfaeMOsKnVVmER-s1ZzWlVlDySIwrksi2A7yNDotDSO3BOXQB8l6v4H~v85cej4JyD61-z9S8JIQae3Kp1DRCPEzYMELwR~uSfTa~a4TCDuokCxorboybbcXaaeRdxxwHaCIbhkxP3d5bnHUg2OQvps-0y8UnLakXoCokRbDd9rAu57zDcaHNFSkfr0vRsjVZRP8Z0vKGMtvV6Yj5bNBOzeO1WKnXk3SqfujpqiQtAmRE~4BlCVk9UN7q3Clt2z~j4e1reIkZ9DY-1Q__'
  },

]
const Section2 = () => {

  return (
    <div  className="w-full light pb-[3rem]">
      <h3 data-aos="fade-up" className="w-full text-center text-[45px] py-[3rem]">
        Explore Our Kitchen Solutions
      </h3>
      <div data-aos="fade-up" className="w-[90%] h-fit mx-auto rounded-2xl flex lg:flex-row flex-col border-y border-r border-[#35736E] ">
        <div className="text-left lg:w-[50%] w-[100%]  px-[4rem] flex flex-col items-start justify-center py-[2rem] ">
          <h3 data-aos="fade-up" data-aos-delay="400" className="py-[1rem] text-[25px] font-semibold">
            Premium Kitchen Equipment
          </h3>
          <p data-aos="fade-up" data-aos-delay="500" className="text-[18px]">
            {"At Forst Master Pvt. Ltd., we bring innovation and efficiency to your kitchen with high-quality, durable, and performance-driven equipment. Whether you're running a professional restaurant, a bustling café, or upgrading your home kitchen, our expertly crafted solutions ensure seamless cooking, refrigeration, food prep, and hygiene management."}
          </p>
          <button data-aos="fade-up" data-aos-delay="600" className="olive rounded-md py-2 px-4 mt-[2rem]">Explore More</button>
        </div>
        <div className="w-[100%]  overflow-hidden lg:w-[50%] items-center justify-center flex flex-wrap gap-6  p-4">
          {img.map((item, index) =>
            <div
            key={index}
              data-aos="fade-up"
              data-aos-delay={`${(index + 2) * 100}`}
            >
              <div
                key={index} className=" hover:shadow-md hover:scale-105 transition-transform !duration-500  w-[45%] xl:w-[300px]  h-[200px] relative bg-blue-400 rounded-2xl overflow-hidden">
                <Image src={item.image}
                  alt=""
                  height={400}
                  width={400}
                  className=" w-full object-cover h-full "
                />
                <span className="absolute bottom-2 text-[20px] left-3 text-white"> {item.text}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section2;
