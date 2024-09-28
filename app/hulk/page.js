"use client"
import React, { useEffect } from 'react'
import Leftbar from '../components/Leftbar'
import Rightbar from '../components/Rightbar'
import Scrollup from '../components/Scrollup'
import Footer from '../components/Footer'

function Page() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="relative">
                <Leftbar />
                <Rightbar />
                <div className="bg-[#111] min-h-[100svh] py-[20svh]">
                    <div className="min-h-[150svh] w-[80svw] mx-auto bg-[#35f0486d] rounded-[4rem] border-double border-8 border-[#4CAF50] text-center p-24 flex flex-col gap-14 relative">
                        <div
                            className="w-[15rem] h-[15rem] bg-green-500 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/hulk.jpg)] bg-cover bg-center absolute -top-[7rem] left-[4rem]"
                        ></div>
                        <h1 className="text-5xl font-bold uppercase sans underline">hulk</h1>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Hulk, also known as Bruce Banner, is a significant character in the Marvel Universe, especially recognized as a member of the Avengers. Created by writer Stan Lee and artist Jack Kirby, he first appeared in The Incredible Hulk #1 in 1962. Hulk embodies the duality of human nature, combining intelligence and rage, making him one of the most complex figures in the Marvel Cinematic Universe (MCU) and comics.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Origin and Backstory
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Bruce Banner, a brilliant scientist, was exposed to gamma radiation during a failed experiment with a gamma bomb. This exposure triggers a transformation that occurs whenever he experiences intense anger or stress, turning him into the Hulk—a giant, green-skinned behemoth with immense strength and durability. Banner struggles with his dual identity, constantly seeking a cure for his condition while also learning to harness the Hulk's power for good.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Role in the MCU
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Hulk made his MCU debut in The Incredible Hulk (2008), portrayed by Edward Norton. However, Mark Ruffalo took over the role in The Avengers (2012), where he is depicted as a key member of the team. Throughout the MCU, Bruce Banner’s character evolves as he learns to balance his intellect with the Hulk’s raw power. In Avengers: Age of Ultron (2015), he grapples with the consequences of his dual identity, leading to significant character development.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Role in the Avengers
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            As a member of the Avengers, Hulk provides unmatched physical strength during battles. He plays a critical role in the team’s efforts against formidable foes like Loki and Thanos. In Avengers: Infinity War (2018), Hulk's initial refusal to emerge during critical moments adds tension and depth to Banner's character. However, he ultimately joins the fight, showcasing his loyalty to his fellow heroes.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Legacy and Cultural Impact
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Hulk’s portrayal has had a profound impact on popular culture, symbolizing the struggle between intelligence and primal rage. The character’s catchphrase, “HULK SMASH!” has become iconic, representing the brute force of the Hulk. The duality of Bruce Banner and the Hulk resonates with audiences, making him a symbol of inner conflict. Hulk’s evolution within the MCU illustrates themes of acceptance and the quest for identity, ensuring his place as a beloved character in the Marvel Universe.
                        </p>
                    </div>
                </div>
                <Footer/>
                <Scrollup />
            </div>
        </>
    )
}

export default page
