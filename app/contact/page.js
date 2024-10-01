"use client"
import React, {useEffect} from 'react';
import gsap from 'gsap';
import Leftbar from '../components/Leftbar';
import Rightbar from '../components/Rightbar';
import Footer from '../components/Footer';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        gsap.to(".contact-page", {
            opacity: "0",
            display: "none",
            duration: 0.3,
        });
    }, []);

    return (
        <>
            <div className="bg-[#111] min-h-[100svh] relative">
                <Leftbar />
                <Rightbar />
                <div className=" w-[70svw] mx-auto text-[#35f048a7] p-24 flex flex-col gap-12 relative">
                    <div className="absolute bg-[#111] opacity-1 h-full w-full top-0 left-0 z-20 contact-page"></div>
                    <div>
                        <h2 className='text-lg uppercase font-thin sans pb-6'>Liked what you see ?</h2>
                        <h1 className='text-8xl sans'>Let&apos;s talk ..</h1>
                    </div>
                    <div className="flex justify-between">
                        <div className="container w-[50%]">
                            <form className="contact-form flex flex-col gap-3 relative">
                                <div className="form-group flex flex-col gap-1 z-10">
                                    <label className='font-bold pl-1' htmlFor="name">Name:</label>
                                    <input className='bg-[#3d3d3daa] focus:bg-[#6a6a6aaa] text-white font-bold rounded h-[2rem] px-2 placeholder-[#92929256]' type="text" id="name" placeholder='Enter your full name' name="name" required />
                                </div>
                                <div className="form-group flex flex-col gap-1 z-10">
                                    <label className='font-bold pl-1' htmlFor="email">Email:</label>
                                    <input className='bg-[#3d3d3daa] focus:bg-[#6a6a6aaa] text-white font-bold rounded h-[2rem] px-2 placeholder-[#92929256]' type="email" id="email" placeholder='Enter your email address' name="email" required />
                                </div>
                                <div className="form-group flex flex-col gap-1 z-10">
                                    <label className='font-bold pl-1' htmlFor="message">Message:</label>
                                    <textarea className='bg-[#3d3d3daa] focus:bg-[#6a6a6aaa] text-white font-bold rounded min-h-[4rem] h-[4rem] max-h-[8rem] px-2 placeholder-[#92929256]' id="message" placeholder='Write your message here...' name="message" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="submit-button absolute -right-[5rem] bottom-0 bg-[#3d3d3daa] hover:bg-[#6a6a6aaa] rounded-full h-[4rem] w-[4rem] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#929292" fill="none">
                                        <path d="M22 12.5001C22 12.0087 21.9947 11.0172 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C9.90159 20.4836 10.7011 20.4954 11.5 20.4989" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2 6L8.91302 9.92462C11.4387 11.3585 12.5613 11.3585 15.087 9.92462L22 6" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
                                        <path d="M22 17.5L14 17.5M22 17.5C22 16.7998 20.0057 15.4915 19.5 15M22 17.5C22 18.2002 20.0057 19.5085 19.5 20" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                        <div className='w-[5svw] flex flex-col justify-end items-end'>
                            <a
                                href="mailto:rudrakp.india@gmail.com"
                                className='bg-[#3d3d3daa] h-[4rem] w-[4rem] rounded-full flex justify-center items-center hover:bg-[#3d3d3dda] transition-all mb-5'>
                                <img className='w-8' src="/icons/email.svg" alt="mail" />
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                className='bg-[#3d3d3daa] h-[4rem] w-[4rem] rounded-full flex justify-center items-center hover:bg-[#3d3d3dda] transition-all'>
                                <img className='w-8' src="/icons/linkedin.svg" alt="linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>


        </>
    );
};

export default Contact;
