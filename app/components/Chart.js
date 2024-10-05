import React, {useEffect} from 'react'
import gsap from 'gsap';
import Link from 'next/link'

const Chart = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        gsap.to(".chart-page", {
            opacity: "0",
            display: "none",
            duration: 1.5,
            delay: 0.5,
        });
    }, []);

    return (
        <>
            <div className='h-[45svh] w-[90svw] mx-auto grid grid-cols-3 items-center justify-center px-7 gap-x-7 pt-12 relative md:hidden'>
                <div className="absolute chart-page bg-[#111] w-full h-full"></div>
                <Link href={"/black-panther"} className='rounded-full'>
                    <div
                        className="custom-shadow circle w-[5rem] h-[5rem] bg-green-100 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/blackpanther.webp)] bg-cover"></div>
                </Link>
                <Link href={"/iron-man"} className='rounded-full'>
                    <div
                        className="custom-shadow circle w-[5rem] h-[5rem] bg-green-200 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/ironman.jpg)] bg-cover"></div>
                </Link>
                <Link href={"/thor"} className='rounded-full'>
                    <div
                        className="custom-shadow circle w-[5rem] h-[5rem] bg-green-300 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/thor.jpg)] bg-cover bg-center"></div>
                </Link>
                <Link href={"/cap"} className='rounded-full'>
                    <div
                        className="custom-shadow circle w-[5rem] h-[5rem] bg-green-400 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/cap.avif)] bg-cover bg-center"></div>
                </Link>
                <Link href={"/black-widow"} className='rounded-full'>
                    <div
                        className="custom-shadow circle w-[5rem] h-[5rem] bg-green-500 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/blackwidow.jpg)] bg-cover bg-center"></div>
                </Link>
                <Link href={"/hawk-eye"} className='rounded-full'>
                    <div
                        className="custom-shadow circle w-[5rem] h-[5rem] bg-green-600 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/hawkeye.jpg)] bg-cover"></div>
                </Link>
                <Link href={"/hulk"} className='rounded-full'>
                    <div
                        className="custom-shadow circle w-[5rem] h-[5rem] bg-green-700 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/hulk.jpg)] bg-cover bg-center"></div>
                </Link>
            </div>
        </>
    )
}

export default Chart
