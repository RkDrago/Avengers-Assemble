
import React from 'react'
import Link from 'next/link';

const Rightbar = () => {

    return (
        <div>
            <div className="flex flex-col h-full w-[17svw] gap-4 items-end justify-center fixed right-0 top-0 pr-2 z-20">
                <Link href={"/black-panther"}>
                    <div
                        className="custom-shadow circle w-[3rem] h-[3rem] bg-green-100 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/blackpanther.webp)] bg-cover group transition-all duration-500 delay-200 relative"
                    >
                        <div className="group-hover:opacity-100 group-hover:right-[120%] transition-all custom-shadow bg-[#4CAF50] text-black text-xs font-bold rounded py-1 px-2 absolute top-[20%] right-[20%] opacity-0 -z-10">Black_Panther</div>
                    </div>
                </Link>
                <Link href={"/iron-man"}>
                    <div
                        className="custom-shadow circle w-[3rem] h-[3rem] bg-green-200 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/ironman.jpg)] bg-cover group transition-all duration-500 delay-200 relative"
                    >
                        <div className="group-hover:opacity-100 group-hover:right-[120%] transition-all custom-shadow bg-[#4CAF50] text-black text-xs font-bold rounded py-1 px-2 absolute top-[20%] right-[20%] opacity-0 -z-10">Iron_Man</div>
                    </div>
                </Link>
                <Link href={"/thor"}>
                    <div
                        className="custom-shadow circle w-[3rem] h-[3rem] bg-green-300 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/thor.jpg)] bg-cover bg-center group transition-all duration-500 delay-200 relative"
                    >
                        <div className="group-hover:opacity-100 group-hover:right-[120%] transition-all custom-shadow bg-[#4CAF50] text-black text-xs font-bold rounded py-1 px-2 absolute top-[20%] right-[20%] opacity-0 -z-10">Thor</div>
                    </div>
                </Link>
                <Link href={"/cap"}>
                    <div
                        className="custom-shadow circle w-[3rem] h-[3rem] bg-green-400 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/cap.avif)] bg-cover bg-center group transition-all duration-500 delay-200 relative"
                    >
                        <div className="group-hover:opacity-100 group-hover:right-[120%] transition-all custom-shadow bg-[#4CAF50] text-black text-xs font-bold rounded py-1 px-2 absolute top-[20%] right-[20%] opacity-0 -z-10">Captain_America</div>
                    </div>
                </Link>
                <Link href={"/black-widow"}>
                    <div
                        className="custom-shadow circle w-[3rem] h-[3rem] bg-green-500 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/blackwidow.jpg)] bg-cover bg-center group transition-all duration-500 delay-200 relative"
                    >
                        <div className="group-hover:opacity-100 group-hover:right-[120%] transition-all custom-shadow bg-[#4CAF50] text-black text-xs font-bold rounded py-1 px-2 absolute top-[20%] right-[20%] opacity-0 -z-10">Black_Widow</div>
                    </div>
                </Link>
                <Link href={"/hawk-eye"}>
                    <div
                        className="custom-shadow circle w-[3rem] h-[3rem] bg-green-600 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/hawkeye.jpg)] bg-cover group transition-all duration-500 delay-200 relative"
                    >
                        <div className="group-hover:opacity-100 group-hover:right-[120%] transition-all custom-shadow bg-[#4CAF50] text-black text-xs font-bold rounded py-1 px-2 absolute top-[20%] right-[20%] opacity-0 -z-10">Hawkeye</div>
                    </div>
                </Link>
                <Link href={"/hulk"}>
                    <div
                        className="custom-shadow circle w-[3rem] h-[3rem] bg-green-700 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/hulk.jpg)] bg-cover bg-center group transition-all duration-500 delay-200 relative"
                    >
                        <div className="group-hover:opacity-100 group-hover:right-[120%] transition-all custom-shadow bg-[#4CAF50] text-black text-xs font-bold rounded py-1 px-2 absolute top-[20%] right-[20%] opacity-0 -z-10">Hulk</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Rightbar
