"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'
import Leftbar from '../components/Leftbar'
import Rightbar from '../components/Rightbar'
import Scrollup from '../components/Scrollup'
import Footer from '../components/Footer'

function Page() {

    useEffect(() => {
        window.scrollTo(0, 0);
        // GSAP animation to make the avenger-img sprout in from the right when the page loads
        gsap.to(".avenger-img", {
            top: "-6%",
            left: "7%",
            height: "16rem",
            width: "16rem",
            duration: 1.5,
            ease: "power4.out",
            // rotate: "-1080",
        }
        );
        gsap.to(".avengers-page", {
            backgroundColor: "#35f0486d",
            borderColor: "#4CAF50",
            text: "black",
            duration: 1.5,
        }
        );
    }, []);

    return (
        <>
            <div className="relative">
                <Leftbar />
                <Rightbar />
                <div className="bg-[#111] md:py-[20svh] py-[10svh]">
                    <div className="min-h-[150svh] md:w-[80svw] w-[95svw] mx-auto rounded-[4rem] border-double border-8 text-center md:p-24 p-6 flex flex-col gap-14 relative avengers-page text-[#111] border-[#111]">
                        <div
                            className="w-[3rem] h-[3rem] bg-green-500 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/hulk.jpg)] bg-cover bg-center absolute top-[27.5%] left-[108.8%] avenger-img hidden md:block"
                        ></div>
                        <h1 className="text-5xl font-bold uppercase sans underline">hulk</h1>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Hulk, also known as Bruce Banner, is a significant character in the Marvel Universe, especially recognized as a member of the Avengers. Created by writer Stan Lee and artist Jack Kirby, he first appeared in The Incredible Hulk #1 in 1962. Hulk embodies the duality of human nature, combining intelligence and rage, making him one of the most complex figures in the Marvel Cinematic Universe (MCU) and comics.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Origin and Backstory
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Bruce Banner, a brilliant scientist, was exposed to gamma radiation during a failed experiment with a gamma bomb. This exposure triggers a transformation that occurs whenever he experiences intense anger or stress, turning him into the Hulk—a giant, green-skinned behemoth with immense strength and durability. Banner struggles with his dual identity, constantly seeking a cure for his condition while also learning to harness the Hulk&apos;s power for good.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Role in the MCU
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Hulk made his MCU debut in The Incredible Hulk (2008), portrayed by Edward Norton. However, Mark Ruffalo took over the role in The Avengers (2012), where he is depicted as a key member of the team. Throughout the MCU, Bruce Banner&apos;s character evolves as he learns to balance his intellect with the Hulk&apos;s raw power. In Avengers: Age of Ultron (2015), he grapples with the consequences of his dual identity, leading to significant character development.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Role in the Avengers
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            As a member of the Avengers, Hulk provides unmatched physical strength during battles. He plays a critical role in the team&apos;s efforts against formidable foes like Loki and Thanos. In Avengers: Infinity War (2018), Hulk&apos;s initial refusal to emerge during critical moments adds tension and depth to Banner&apos;s character. However, he ultimately joins the fight, showcasing his loyalty to his fellow heroes.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Legacy and Cultural Impact
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Hulk&apos;s portrayal has had a profound impact on popular culture, symbolizing the struggle between intelligence and primal rage. The character&apos;s catchphrase, “HULK SMASH!” has become iconic, representing the brute force of the Hulk. The duality of Bruce Banner and the Hulk resonates with audiences, making him a symbol of inner conflict. Hulk&apos;s evolution within the MCU illustrates themes of acceptance and the quest for identity, ensuring his place as a beloved character in the Marvel Universe.
                        </p>
                    </div>
                </div>
                <Footer/>
                <Scrollup />
            </div>
        </>
    )
}

export default Page
