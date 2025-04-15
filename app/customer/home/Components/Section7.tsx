import Image from "next/image";
import React from "react";

const Section7 = () => {
  const obj = [
    {
      label: "Patna , Bihar",
      image:
        "https://s3-alpha-sig.figma.com/img/cad4/40ef/ca409d24c2e2cfcff7d42c4b7d2461ef?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JTXrKRDHUUJK4JmkEE5DX~f~hzeQKLICH37oKuXarpMlkewtwlrzPFevyZmpHjTrILWkLBj54yEGzL6E~RFJOZrO8rMSk3uqG-Jozz1cqCC3kdeOAGi1FXanh1rVMyRbugrKnp7-IvJOILWLFQuyIETwWPk0wS9tSyAIYIYsd~G0JahEJJp7tVyAdu8yhOFeVmHdAgwtPW~S7z5WJSVjJMQMlbD0MZY4ojV~YxJ6fyiYl9rR9-hGR7hY1iyCH5Eitdqa-ewa6g1u0fMEU06aSKcKZs3prw53PkumGyYLHFNh4~I4x8kyVqSU3vEhyPyZBGtE9U39W7XVSlgfKDIFow__",
    },
    {
      label: "Ranchi , Jharkhand",
      image:
        "https://s3-alpha-sig.figma.com/img/da1e/9a63/ba61e80072e092345536542d3201af2c?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PSLoFU8y1ZPoi3QOxgBNO1AzR35x34ZeeQKn5tdH0xxHuj6vrpfsOo1rzX8WNZnoiPbNu55P9WLKSt5kx1O4vw9ve~luDSx3qEi0g3vFvdrxOLV-Y4OOB2~-pCQ0HefUv38SQjP6VJnU0RQ-YYUGcEMSluXN1YYE7kwxxVU5JhO3sGEmCgQH1d1oDf1MqEhbx79S5j7O-axeQf4BAfWSImogPARP9yqXcGjBQ2-VAdgPuN4s36JesGLlx49otHHGPgch5gIR9WLohEMcDXQnF5-D-eNobOrj602SzwLXQL3zR2S2uZLOmXDxgxbymZemMQHQMZX7nd6O4NhN0KGXeQ__",
    },
    {
      label: "Delhi (Head Office)",
      image:
        "https://s3-alpha-sig.figma.com/img/e20e/84c7/73e718eed36187a8717bc7894447a66c?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qYH3J6uWBn8HvK~iDZAodTqcV11I-PuK8cQAEWWTs-8KwCiOhRAmcLvGnD3igt25ERJHtXKyc3qiefwzh7~AzC6d5apjGWOMzPTDH4HzRfK2YZagdrlJ~O0TPUhmgN38MVZmtQ3d6C19G~5DtKHV26ty7hk3BjrmmOLrP5lZmTkHqmut56d8cmBI3LlUQgq4XF6qp2Y8eA7WuishujnOLN-VLWi72RP6y02HZes2yk8Vd7TSSetCWDXoKm0C2wUEMiHp3fZSi7sdN6sq-6424oOhhWiRbn7s8WeI6brE9VTZbeV9BF-YkEKlRxhElJJTMCdjMwvc7~YJJPwdzUW2nA__",
    },
  ];
  return (
    <div className="light h-fit w-full pb-[2rem]">
      <h1 data-aos="fade-up" className="w-full text-[40px]  md:text-[50px] py-[3rem] text-center font-bold ">
        Connecting Cities, Delivering Quality
      </h1>
      <div className="flex items-center   h-fit justify-center gap-3  flex-wrap  lg:gap-7 ">
        {obj.map((item, index) => (
          <div
          
           data-aos="fade-up"
            data-aos-delay={`${(index + 2) * 100}`}
            key={index} className="h-[60dvh] w-[60%] md:w-[25%] min-w-[300px]">
            <div className="h-full  w-full flex flex-col justify-between items-center ">
              <Image
                src={item.image}
                alt=""
                height={400}
                width={400}
                className=" h-[85%] w-[80%] object-cover rounded-xl shadow-md"
              ></Image>
              <p className="text-[20px] text-center font-bold">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section7;
