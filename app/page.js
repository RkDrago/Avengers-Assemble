"use client";
import gsap from "gsap";
import { useEffect } from "react";
import Rightbar from "./components/Rightbar";
import Leftbar from "./components/Leftbar";
import Footer from "./components/Footer";
import Chart from "./components/Chart";

export default function Home() {

  useEffect(() => {
    // GSAP animation to make the avengers.png sprout in from the bottom when the page loads
    gsap.to(".avengers-logo", {
      y: "-100%",
      duration: 1.5, // Duration of the animation
      ease: "bounce.out",
    }
    );
    gsap.to(".the-peeking", {
      y: "-85%",
      duration: 0.3, // Duration of the animation
      delay: 1.6
    }
    );
  }, []);



  return (
    <>
      <div className="bg-[#111] min-h-[100svh] relative">
        <Leftbar />
        <Rightbar />
        <div className="w-[100svw] flex justify-center md:pt-56 md:items-center relative">
          <div className="relative w-[40rem] h-[20rem] overflow-hidden">
            <div className="w-[7rem] h-[4rem] absolute md:top-3 md:left-[10.3rem] top-[6.4rem] left-[25%] z-10 overflow-hidden hidden md:block">
              <h1 className="the-peeking font-extrabold sans text-6xl absolute top-[100%] text-white">THE</h1>
            </div>
            <img className="bg-[#eeeeee] w-[40rem] avengers-logo invert absolute top-[100%]" src="/imgs/avengers.png" alt="" draggable="false" />
          </div>
        </div>
        <Chart/>
        <Footer />
      </div>
    </>
  );
}
