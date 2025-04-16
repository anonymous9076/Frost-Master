import Image from "next/image";
import React from "react";

const Section2 = () => {
  const items = [
    { title: "Innovative Solution", anime:'fade-up-right', desc: "We will defy the conventional processes and explore the possibilities. We will constantly break our paradigms by entering into the unknown. We will constantly research, formulate and deliver innovative solutions", image: "https://s3-alpha-sig.figma.com/img/b126/8bd8/a5da2253cda74a20860aed20a5e67b23?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ME3XxOtK6-XdE~FhCM8xaLaCtiL4qzZ~qBLrsRnRSDtJ9lS3-CdZMvE6vA1-ii2H5LMG~hxW-BDWgI8GLBx7B8rzz~KVu7tQb8Jm~9WSQ1AwxudbXTWtvypstBMrX81vFqjwPx6YF1Wh2BCxyqR5JyRnedwDCmpTkcqdLL61fvmiwj0KPcZI6qWwlpeA1mAFecg--jQR4SnZSI4otkm-K7ORFrdqBQRAff8DDnUwY8HjmNzT9MVllYMt9Z-KKasD1gyMHKeF5LImJUYYmJ6fc76UFStYaoD~Ive-QPUq0vFmX0y2dNyl9up6Yy9-ydbSHEtagthyFeDUjHVJm3HwCg__" },
    { title: "Commitment is staying dedicated.",anime:'fade-up', desc: "We will be dedicated and determined to deliver, whatever we promise in-time. We will not over commit and under deliver. We will complete what we have started and bring it to a logical end.", image: "https://s3-alpha-sig.figma.com/img/de96/8401/fa98ed8e1158ee380ce7fa75f20d7713?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YVNSs2SROb2KV6i-SecdbY8ItmIfT3GnvacgRoLJv9WsaA7CZL7-SaszL5gfGirRrWUsPaGrYIExbQPRxxznw4JWoTo1-NlJCWrcgaNZDgzCt63Q0Yu-cmV3KAqm9P9kNv55H3PKtlHI8zTTMtQwM0jhk4qqOloXhaDVy22r6lAWRkFdiTceWf-Ccb1OXAyXGZHZZ7ZhHkqNJGhGdFmxGeoDFo11D~YIUwj2qGgIhRUYzKO8zB~LgojHyJlUSMf36F00uCwWejDFLuIOZDIrWUxTwoiFeHwntC9FOh1BQWHwYGOMy1KR34Za2dswtz3XgAHql9BViJbyn9ujfJ4xSQ__" },
    { title: "Relationship for Life",anime:'fade-up-left', desc: "Once you fill in your details, you’re added to the right student group (e.g., MBA, Computer Science). Engage in meaningful academic discussions, exchange resources, and get the support you need.", image: "https://s3-alpha-sig.figma.com/img/b8bc/bc19/aecc53758fd83ba885b8dabfdb554546?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IdME8pyvHDeO7o-J8U8-~rJVkTQrKqtN8GXFJIqqovZjUk4vR9bEcqnq-7fsIOg0UtamH1TVCGcf01901KZ0GmowL1fXtpUFXKfrMR45DpbgmATe-61wJQlHmuCwOQ14CIguyAEHp518xkiGCYeVKpY~tHpqhlgfKcK1ji9HggG9ktTO2H1wgqWO66aOV7Siax4Wj9jceM-Cx2Ij~F7CaQ-Ypld91Zl0V1XlG-qAqqoEC-2CkGJx3Q8sT9zrBAvHwFYC2qAyih~0B3SaaxLMSiNWqjQLDc4evHfsFIsPlnY4D0PgruUAfutdeF0Tn2RW60kn0EvtPy8cLnexMeaVhg__" },
  ];
  return (
    <div className="light w-full h-fit py-[4rem]">
        <h1 className="text-[45px] text-center w-[70%] pb-[3rem] mx-auto">Our core ideology is passion, persistence, and purpose-driven excellence.</h1>
        <div className="w-[80%] h-fit flex flex-col md:flex-row gap-[2rem] items-center justify-center mx-auto">

        {items.map((item,index)=>
      <div key={index} data-aos={item.anime} className="w-[350px] h-[75dvh] p-4 bg-white border hover:scale-103 hover:shadow-lg border-gray-200 rounded-lg shadow-sm ">
        <a href="#">
          <Image
            className="rounded-t-lg !h-[50%]"
            src={item.image}
            alt=""
            height={400}
            width={400}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {item.title}
            </h5>
          </a>
          <p className="mb-3  h-[16dvh] overflow-hidden font-normal text-gray-700 dark:text-gray-400">
            {item.desc}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </a>
        </div>
      </div>
        )}
        </div>

    </div>
  );
};

export default Section2;
