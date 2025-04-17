"use client";
import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  ReactNode,
  FC,
} from "react";
import { AOSContext } from "./providers/AOSContext";
import type { JSX } from "react";

const headerStart = 200;

// ✅ Define Props with Generic
interface HorizontalScrollCarouselProps<T> {
  data: T[];
  children: (item: T, index: number) => ReactNode;
}

// ✅ Main Component
const HorizontalScrollCarousel = <T,>({
  children,
  data = [],
}: HorizontalScrollCarouselProps<T>): JSX.Element => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const startOffsetRef = useRef<HTMLDivElement | null>(null);
  const workSectionRef = useRef<HTMLDivElement | null>(null);

  const [w, setW] = useState(0);
  const { aos } = useContext(AOSContext)!;

  useEffect(() => {
    const width = document
      .getElementById("work-wrapper-0")
      ?.getBoundingClientRect().width;
    setW(width ?? 0);

    const handleScroll = () => {
      const start = workSectionRef.current?.getBoundingClientRect().top;
      const top = startOffsetRef.current?.offsetTop;

      if (start === headerStart && scrollerRef.current) {
        scrollerRef.current.scrollTo(window.scrollY - (top ?? 0), 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    aos?.refreshHard();
  }, [data, w]);

  return (
    <>
      <div ref={startOffsetRef} id="start-offset" className="text-white"></div>
      <div ref={workSectionRef} className="sticky h-full top-[200px]">
        <div ref={scrollerRef} className="scrollbar-hide sm:overflow-x-scroll">
          <div className="flex flex-wrap items-center gap-y-4 sm:flex-nowrap lg:px-3">
            <div className="one-side-width h-4"></div>
            {data.map((item, index) => (
              <div
                key={(item as { id?: string | number })?.id ?? index}
                id={`work-wrapper-${index}`}
              >
                <CardWrapper index={index}>{children(item, index)}</CardWrapper>
              </div>
            ))}
            <div className="one-side-width h-4"></div>
            <div className="h-4 px-1"></div>
          </div>
        </div>
      </div>
      <div
        className="hidden xl:block"
        style={{
          height: `calc((${w}px * ${data.length}) - 1136px + ${headerStart}px)`,
        }}
      ></div>
    </>
  );
};

// ✅ CardWrapper with type
interface CardWrapperProps {
  children: ReactNode;
  index: number;
}

const CardWrapper: FC<CardWrapperProps> = ({ children }) => {
  return (
    <div className="flex-none px-3">
      {/* Add AOS data attributes if needed */}
      {children}
    </div>
  );
};

export default HorizontalScrollCarousel;
