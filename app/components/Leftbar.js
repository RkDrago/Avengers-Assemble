import React from 'react'
import Link from 'next/link'

const Leftbar = () => {
    return (
        <>
            <div className="flex flex-col h-full gap-[6.5rem] w-[7.3svw] justify-center fixed -left-[4.7rem] top-0 z-10">
                <Link href={"/"}>
                    <div className="pentagon-container">
                        <div className="pentagon flex items-end justify-center font-bold text-base pb-1 bg-[#4CAF50]">HOME</div>
                    </div>
                </Link>
                <Link href={"/about"}>
                    <div className="pentagon-container">
                        <div className="pentagon flex items-end justify-center font-bold text-base pb-1 bg-black text-white">ABOUT</div>
                    </div>
                </Link>
                <Link href={"/contact"}>
                    <div className="pentagon-container">
                        <div className="pentagon flex items-end justify-center font-bold text-base pb-1 bg-black text-white">CONTACT</div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Leftbar
