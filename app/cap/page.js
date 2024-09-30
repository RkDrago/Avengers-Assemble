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
        // GSAP animation to make the avengers.png sprout in from the bottom when the page loads
        gsap.to(".avenger-img", {
            top: "-6%",
            left: "7%",
            height: "16rem",
            width: "16rem",
            duration: 1.5, // Duration of the animation
            ease: "power4.out",
            // rotate: "-1080",
        }
        );
        gsap.to(".avengers-page", {
            backgroundColor: "#35f0486d",
            borderColor: "#4CAF50",
            text: "black",
            duration: 1.5, // Duration of the animation
        }
        );
    }, []);

    return (
        <>
            <div className="relative">
                <Leftbar />
                <Rightbar />
                <div className="bg-[#111] min-h-[100svh] py-[20svh]">
                    <div className="min-h-[150svh] w-[80svw] mx-auto rounded-[4rem] border-double border-8 text-center p-24 flex flex-col gap-14 relative avengers-page text-[#111] border-[#111]">
                        <div
                            className="w-[3rem] h-[3rem] border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/cap.avif)] bg-cover bg-center absolute top-[9.4%] left-[108.8%] avenger-img"
                        ></div>
                        <h1 className="text-5xl font-bold uppercase sans underline">captain America</h1>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Captain America, also known as Steve Rogers, is one of Marvel&apos;s most iconic and enduring superheroes. Created by Joe Simon and Jack Kirby, he first appeared in Captain America Comics #1 in 1941, during the height of World War II. As a symbol of patriotism, courage, and justice, Captain America represents the ideals of freedom and righteousness, both in the Marvel Comics and the Marvel Cinematic Universe (MCU). His story spans decades, from his origins as a frail young man turned super-soldier to his role as a leader of the Avengers.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Origin and Backstory
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Steve Rogers was born a sickly and frail man in Brooklyn, New York, during the Great Depression. Despite his physical limitations, he was determined to serve his country during World War II. His unwavering courage and sense of duty led him to volunteer for a secret government experiment, the Super Soldier Program. Under the supervision of Dr. Abraham Erskine, Rogers was injected with the Super Soldier Serum, which transformed him into a physically enhanced human with incredible strength, speed, agility, and endurance. <br />After his transformation, Steve Rogers became Captain America, a patriotic symbol of the United States&apos; fight against tyranny. Armed with his iconic vibranium shield, Captain America fought Nazi forces, including the villainous Red Skull, as part of a special military unit called the Howling Commandos. Toward the end of the war, Rogers made a heroic sacrifice, crashing a plane loaded with explosives into the Arctic. He was presumed dead but was frozen in ice, where he remained for decades.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Role in the MCU
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Captain America made his MCU debut in Captain America: The First Avenger (2011), portrayed by Chris Evans. The film explores his transformation from a frail, determined young man into a super-soldier and the ultimate symbol of hope during World War II. After his heroic sacrifice, Steve Rogers is discovered in modern times, thawed out, and introduced to a new world in The Avengers (2012), where he joins Earth&apos;s mightiest heroes. <br />Throughout the MCU, Captain America becomes a central figure in the Avengers. His leadership, moral compass, and tactical brilliance make him a vital part of the team. In Captain America: The Winter Soldier (2014), Steve grapples with the complexities of modern-day politics and espionage, uncovering a deep conspiracy within S.H.I.E.L.D. that leads to the resurgence of Hydra. He also faces his old friend, Bucky Barnes, who has been brainwashed and transformed into the Winter Soldier. <br />Captain America&apos;s character arc reaches a turning point in Captain America: Civil War (2016), where he opposes Tony Stark (Iron Man) over the Sokovia Accords, a government measure designed to control the actions of superheroes. Steve believes in individual freedom and the need for heroes to operate without government oversight, leading to a split between him and Tony, fracturing the Avengers. His relationship with Bucky, as well as his deep sense of loyalty to his friends and his beliefs, drives much of his actions throughout the film.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Role in the Avengers
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            As one of the founding members of the Avengers, Captain America is often seen as the moral center and leader of the team. In The Avengers (2012), he plays a key role in uniting the heroes against Loki and the invading Chitauri forces. His tactical skills and leadership abilities are showcased in numerous battles, and his sense of justice helps guide the Avengers through their challenges. <br />In Avengers: Infinity War (2018), Captain America stands against Thanos alongside the rest of the Avengers and the Wakandan army. Though he fights bravely, Thanos ultimately succeeds in his plan to wipe out half of all life in the universe. Steve&apos;s resilience is tested to its limits, but he continues to fight for what he believes in. <br />Captain America&apos;s story comes full circle in Avengers: Endgame (2019). After successfully helping the Avengers reverse the effects of the Snap, Steve Rogers chooses to return to the past to live out his life with Peggy Carter, the woman he loves. In a poignant conclusion to his arc, an elderly Steve passes his iconic shield to Sam Wilson (The Falcon), symbolically passing the mantle of Captain America to a new generation.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Legacy and Cultural Impact
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Captain America&apos;s impact on pop culture is immense. He has long been a symbol of patriotism, resilience, and moral integrity, and his depiction in the MCU has only further solidified his place as a beloved character. Chris Evans&apos; portrayal of Steve Rogers brought a sense of nobility, humility, and heart to the role, endearing the character to audiences around the world. <br />Captain America&apos;s shield has become an iconic symbol, representing not just the character but also the themes of protection, justice, and courage. His story, which spans across wars, modern-day conflicts, and intergalactic battles, reflects timeless themes of sacrifice, friendship, and the fight for freedom.
                        </p>
                    </div>
                </div>
                <Footer />
                <Scrollup />
            </div>
        </>
    )
}

export default Page
