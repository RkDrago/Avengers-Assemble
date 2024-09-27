import React from 'react';
import Leftbar from '../components/Leftbar';
import Rightbar from '../components/Rightbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            <div className="bg-[#111] min-h-[100svh] relative">
                <Leftbar />
                <Rightbar />
                <div className=" w-[70svw] mx-auto text-[#35f048a7] p-24 flex flex-col gap-16 relative">
                    <div>
                        <h2 className='text-lg uppercase font-thin sans pb-6'>Liked what you see ?</h2>
                        <h1 className='text-8xl sans'>Let's talk ..</h1>
                    </div>
                    <div className="flex justify-between">
                        <div className="">

                        </div>
                        <div className='pt-16 w-[5svw]'>
                            <a
                                href="mailto:rudrakp.india@gmail.com"
                                className='bg-[#3d3d3daa] h-[4rem] w-[4rem] rounded-full flex justify-center items-center mb-5'>
                                <img className='w-8' src="/icons/email.svg" alt="mail" />
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                className='bg-[#3d3d3daa] h-[4rem] w-[4rem] rounded-full flex justify-center items-center'>
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

export default About;
