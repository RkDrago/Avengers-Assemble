"use client";
import gsap from "gsap";
import { useEffect } from "react";
import Rightbar from "./components/Rightbar";
import Leftbar from "./components/Leftbar";
import Footer from "./components/Footer";

export default function Home() {

  useEffect(() => {
    // GSAP animation to make the avengers.png sprout in from the bottom when the page loads
    gsap.to(".avengers-img", {
      y: "-100%",
      duration: 1.5, // Duration of the animation
    }
    );
    gsap.to(".the-peeking", {
      y: "-85%",
      duration: 0.3, // Duration of the animation
      delay: 1.6
    }
    );
    gsap.to(".logo", {
      opacity: 1,
      duration: 1.5, // Duration of the animation
    }
    );
  }, []);



  return (
    <>
      <div className="bg-[#111] min-h-[100svh] relative">
        <Leftbar />
        <Rightbar />
        <div className="h-[100svh] w-[100svw] flex justify-center items-center relative">
          <div className="relative w-[40rem] h-[20rem] overflow-hidden">
            <div className="w-[7rem] h-[4rem] absolute top-3 left-[10.3rem] z-10 overflow-hidden">
              <h1 className="the-peeking font-extrabold sans text-6xl absolute top-[100%] text-white">THE</h1>
            </div>
            <img className="w-[40rem] avengers-img invert absolute top-[100%]" src="/imgs/avengers.png" alt="" draggable="false" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
