import Image from "next/image";
import React from "react";
const Section4 = () => {
  const object = [
    {
      title: "Excellence Beyond Every Sale",
      desc: "Building lasting relationships with continuous support, exceptional service, and a commitment to your long-term success.",
      image:"/Images/PinkSectionNow/img1.jpg"
    },
    {
      title: 'Superior Quality, Maximum Performance ',
      desc: ' Delivering top-tier equipment to maximize efficiency, performance, and value for your investment. ',
      // image: 'https://s3-alpha-sig.figma.com/img/a8ff/ecb4/fba30b031cdbd10b9f730a8771504ae6?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eH6bskaN2L8xWV~A42CSaB5TKDUa~8AEv33Jg7-75MQaEViur3A3u7V3qheA50VypbPDHjLrX6YD-EvpEOuZNFkFZJ1Vl6LgSxoQTKcVUA3YvVBZPsQhlu6PQ9VW2HgevGgvNPIYgJo8BvOQDMxtMeEs1Y-gRhx1PyW2aICe6vsDDjzNjI6tAz08xP-c8NEhG9TuUKMhxemayDIsWafPJLTCLydODnJI80QH6GjgjH3y-Ndujd5arPgWvGeLFqSDbzmDu0Y5mckWxaCYoQ-WZ1jzJtwt-PhzMcSyauDaj9L0juTb0VEtbGqa~1MQGBlw-syZtIY-1SyeCiEbsiNLxw__'
      image:"/Images/PinkSectionNow/img7.jpg"
    },
    {
      title: 'Committed to Your Success ',
      desc: 'Supporting you until your investment turns into lasting value, ensuring growth, reliability, and customer satisfaction. ',
      // image: 'https://s3-alpha-sig.figma.com/img/3ec5/50f6/dc7ab03a215cbe944c0ee2d7489722d2?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pCMfRC6cC9Pwlnzq-DRRY04BAVgSVxVs7piJFazIKzdKFriMTv~j-jHcX26YnIhgmOm1kqC5OOHMr1lFebLH~G5q3qg3oRSroBFTEQ68j-YnSGLSrBwQXrsKy9QvUk9cp0zJue~kQt5ijGtxv1TuK5t3oSMUqQSnHymJ9~BwSXx-lb8COBwAO1alhhZM3AdWAyH81Q0ichPoRGy8QJfz~KnEuSYSxHfwYrT~GfkDm7zmr89zVpaIvm-qbqN2VJNvTxlVgVLf0BBePR9NRORo4EAJzFzLkp5KvSmcdvADdzMtUZnLDYw6HpVTl10O6xNx3-jREIKdigqknf69wPz6sQ__'
      image:"/Images/PinkSectionNow/img8.jpg"
    },
    {
      title: 'Relationships for Life ',
      desc: ' Committed to customer success with continuous support, innovative solutions, and value-driven leadership.',
      // image: 'https://s3-alpha-sig.figma.com/img/241c/905f/14153c5570cca2a2b6b921ca5f3888b5?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZsXnyqkJLi6AFlGJsN4NPn3ssdJt8R2IFKUZD2rPQ-Og7famJaikRO5lgqWwCNxUY9Lyp9SOhp75PqNce2TtJL2w1eJABlATWxLHcRz7qkjnvJ7BA2BBm6STEBoEfPdLHB8aNjuDXfju0elv4ncD8SyxhKgLdNdlw5zIf2J~lB7YOOnj5j~r7h2VQ-uRIi7bwidQ-BAIIKwnxh3zqcnUcu8niKVIGAI6eVAw0tdJmOYAr4Q4fbOMe5aPgT7Lsw9OWL4UFMRi1SgIxuCf6fWOV~lGfpnlylXnWbv7I35D99w7lOny6rHvdWRwrWJm8taBsgHMjsdjZdfoxzGekzArbw__'
      image:"/Images/PinkSectionNow/img10.jpg"
    },
    {
      title: 'Elegant & Durable Designs ',
      desc: ' Stylish glass-encased pieces with a superior finish, built for beauty, durability, and stain resistance. ',
      // image: 'https://s3-alpha-sig.figma.com/img/9779/8848/6356de3ccd5c5a42a7aa0a138ce6fd91?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XbzGxiwalOsJiKgIY-ZMZKbJoqB-S4Ha8Z3ckb3cM-zjd9gzy4UYXwhLGYud9uDPC3O1sMg~A3cDb9dyjYLz3ztgbloMOyO1x9RADwumay2jTzj1zbcupqjVoG0jrnmpovR8O-LI-XKYQbmGtGUkI8G809pnIjcVBftvi7YSxSxxqEPW84Bx2cRHl~J3nZPGz5~ttzEVdWJqoP0kp95jY~iob-2wtnBlhFlGpjIKNuMUSzsFo0SEXE4PfZAvZ6Q7yIYUPtmmFqzHl2NorVtTsqSjs~nUGTTgB3LogdAm9BIbLKndMf66XHW~SQ6g0vyVzDW0KdT9URBt15-RBeHLeg__'
      image:"/Images/PinkSectionNow/img11.jpg"
    },
    {
      title: 'Power of Teamwork ',
      desc: 'Collaborating with unity, mentorship, and dedication to achieve collective and personal growth. ',
      image:"/Images/PinkSectionNow/img13.jpg"
      // image: 'https://s3-alpha-sig.figma.com/img/1848/dca3/51e097f012d70f96179b204ca9d253ac?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GteXLx2Fhv9gTBVNzhh0mhh4v~N3y1BBcuLrqnoji0BiBIDFFhZDIPqjVHXMs6EBmZX~3Yf1Lp4XfhMpBkX6ws-k1manplm9JrwQi7q3Qe7xDoGDtx3bLujTvlDH9dtlDPf0N4g0~vVL70dG2KBkLo8nqYi9-25U6Fd6AKJx6-UQFCmcOkOgzeU6lk8feQv~lb9bVgqRvTu8Irg~OYE8uzS18iRNKJb0qQyQkfvCFaoQYdl79950ipxFZI2te5dbmQh8uokDXN~qUdzmApjDhShA6MDZdbWYP8IRlUNsb~8xN3aYurlUsPCJHhh3k0Qrmsp3XHuzgESo6FjIp8IjEA__'
    },
  ];

  return (
    <div className="light py-[5rem]">
      <div className="w-[70%] mx-auto flex md:flex-row flex-col items-center justify-center py-[3rem]">
        <h1 data-aos="fade-up" className="flex-1 px-[1rem]  md:px-[2rem] leading-10 text-[40px]">
          What Makes us prominent players
        </h1>
        <p data-aos="fade-up" className="flex-1 px-[1rem] mt-2 md:mt-0 text-[20px]">
          FrostMaster excels in premium kitchen equipment distribution, offering
          top-quality products, reliable service, and innovative solutions for
          culinary professionals.
        </p>
      </div>
      <div className="w-[70%] mx-auto grid md:grid-cols-2  grid-cols-1 lg:grid-cols-3 gap-7">
        {object.map((item, index) =>
          <div
          key={index}
            data-aos="fade-up"
            data-aos-delay={`${(index + 2) * 100}`}
          >
            <div
              key={index} className="border hover:shadow-md hover:scale-105 transition-transform duration-300 min-h-[28rem] border-gray-400 rounded-lg min-w-[250px] p-[1rem] ">
              <div className="w-full bg-red-300  h-[15rem] rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt="uo"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover "
                ></Image>
              </div>
              <h3 className="text-center w-full text-[25px] leading-8 mt-5 font-semibold">
                {item.title}
              </h3>
              <p className="text-center text-gray-700">
                {item.desc}
              </p>
            </div>
          </div>

        )}
      </div>
    </div>
  );
};

export default Section4;
