// export default HorizontalScrollCarousel
'use client'
import React, { useRef, useState, useEffect, ReactNode, useContext } from 'react'
import { AOSContext } from './providers/AOSContext'

const headerStart = 200
interface HorizontalScrollCarouselProps {
    children: (item: any, index: number) => any
    data: any[]
}
const HorizontalScrollCarousel: React.FC<HorizontalScrollCarouselProps> = ({ children = () => { }, data = [] }) => {
    const scrollerRef = useRef<any | null>(null)
    const startOffsetRef = useRef<any | null>(null)
    const workSectionRef = useRef<any | null>(null)

    const [w, setW] = useState(0)

    const { aos } = useContext(AOSContext)

    useEffect(() => {
        const width = document
            .getElementById('work-wrapper-0')
            ?.getBoundingClientRect().width
        setW(width ?? 0)

        const handleScroll = () => {
            const start = workSectionRef.current?.getBoundingClientRect().top
            const top = startOffsetRef.current?.offsetTop

            if (start === headerStart && scrollerRef.current) {
                scrollerRef.current.scrollTo(window.scrollY - (top ?? 0), 0)
            }
        }
        window.addEventListener('scroll', handleScroll)

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll)

        }

    }, [])

    useEffect(() => {


        aos.refreshHard()

    }, [data, w, headerStart])

    return (
        <>
            <div ref={startOffsetRef} id="start-offset" className="text-white"></div>
            <div ref={workSectionRef} className={`sticky h-full top-[200px]`} 
            //  style={{ top: `${headerStart}px` }}
            >
                <div ref={scrollerRef} className="scrollbar-hide sm:overflow-x-scroll">
                    <div className="flex flex-wrap items-center gap-y-4 sm:flex-nowrap lg:px-3">
                        <div className="one-side-width h-4"></div>
                        {data.map((item, index) => (
                            <div key={item?.id} id={'work-wrapper-' + index}>
                                <CardWrapper index={index} >{children(item, index)}</CardWrapper>
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
    )
}

const CardWrapper = ({ children, index }: { children: any, index: number }) => {
    return (
        <div
            // data-aos="fade-up"
            // data-aos-delay={`${(index + 2) * 100}`}
            className="flex-none px-3"
        >
            {children}
        </div>
    )
}

export default HorizontalScrollCarousel
