import React from 'react'
import gsap from 'gsap';
import Link from 'next/link';

const Rightbar = () => {

    return (
        <div>
            <div className="flex flex-col h-full w-[17svw] gap-4 items-end justify-center fixed right-0 top-0 pr-2 z-20">
                <Link href={"/black-panther"}>
                    <div
                        className="circle w-[3rem] h-[3rem] bg-green-100 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/blackpanther.webp)] bg-cover hover:w-[15rem] hover:h-[15rem] transition-all duration-500 delay-200"
                    ></div>
                </Link>
                <Link href={"/iron-man"}>
                    <div
                        className="circle w-[3rem] h-[3rem] bg-green-200 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/ironman.jpg)] bg-cover hover:w-[15rem] hover:h-[15rem] transition-all duration-500  delay-200"
                    ></div>
                </Link>
                <Link href={"/thor"}>
                    <div
                        className="circle w-[3rem] h-[3rem] bg-green-300 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/thor.jpg)] bg-cover bg-center hover:w-[15rem] hover:h-[15rem] transition-all duration-500  delay-200"
                    ></div>
                </Link>
                <Link href={"/cap"}>
                    <div
                        className="circle w-[3rem] h-[3rem] bg-green-400 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/cap.avif)] bg-cover bg-center hover:w-[15rem] hover:h-[15rem] transition-all duration-500  delay-200"
                    ></div>
                </Link>
                <Link href={"/black-widow"}>
                    <div
                        className="circle w-[3rem] h-[3rem] bg-green-500 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/blackwidow.jpg)] bg-cover bg-center hover:w-[15rem] hover:h-[15rem] transition-all duration-500  delay-200"
                    ></div>
                </Link>
                <Link href={"/hawk-eye"}>
                    <div
                        className="circle w-[3rem] h-[3rem] bg-green-600 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/hawkeye.jpg)] bg-cover hover:w-[15rem] hover:h-[15rem] transition-all duration-500  delay-200"
                    ></div>
                </Link>
                <Link href={"/hulk"}>
                    <div
                        className="circle w-[3rem] h-[3rem] bg-green-700 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/hulk.jpg)] bg-cover bg-center hover:w-[15rem] hover:h-[15rem] transition-all duration-500  delay-200"
                    ></div>
                </Link>
            </div>
        </div>
    )
}

export default Rightbar
