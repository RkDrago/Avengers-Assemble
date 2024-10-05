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
                <div className="bg-[#111] py-[20svh]">
                    <div className="min-h-[150svh] md:w-[80svw] w-[95svw] mx-auto rounded-[4rem] border-double border-8 text-center md:p-24 p-6 flex flex-col gap-14 relative avengers-page text-[#111] border-[#111]">
                        <div
                            className="w-[3rem] h-[3rem] border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/hawkeye.jpg)] bg-cover absolute top-[17.25%] left-[108.8%] avenger-img hidden md:block"
                        ></div>
                        <h1 className="text-5xl font-bold uppercase sans underline">hawk-eye</h1>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Hawkeye, also known as Clint Barton, is a prominent character in the Marvel Universe, particularly recognized as a key member of the Avengers. Created by writer Stan Lee and artist Don Heck, Hawkeye first appeared in Tales of Suspense #57 in 1964. He is renowned for his exceptional archery skills, marksmanship, and proficiency with various weapons, making him one of the most skilled human heroes in the Marvel Cinematic Universe (MCU) and comics.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Origin and Backstory
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Clint Barton was born in Waverly, Iowa, and raised in a dysfunctional family. After losing his parents at a young age, he and his brother, Barney, ran away from an abusive foster home and joined a traveling circus, where Clint honed his skills as an acrobat and marksman. Under the mentorship of the circus&apos;s master archer, he became a master archer, developing exceptional accuracy and reflexes. <br />Clint&apos;s life took a darker turn when he was recruited into the criminal organization known as the &quot;Black Widow&quot; program, where he met Natasha Romanoff (Black Widow). However, after a confrontation with Iron Man, Clint realized the error of his ways and decided to turn his life around. He eventually became an agent for S.H.I.E.L.D., where he used his skills for good and was recruited into the Avengers.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Role in the MCU
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Hawkeye made his MCU debut in Thor (2011), where he was briefly seen as a S.H.I.E.L.D. agent guarding Thor&apos;s hammer, Mjölnir. However, his first significant role came in The Avengers (2012), where he was brainwashed by Loki and served as one of the film&apos;s antagonists. After being freed from Loki&apos;s control, Clint joined forces with the Avengers, showcasing his exceptional archery skills and tactical expertise in the battle against Loki and the Chitauri invasion. <br />In Avengers: Age of Ultron (2015), Clint&apos;s character is further developed as he reveals his hidden family life. The film showcases his deep sense of loyalty and the lengths he will go to protect those he loves. His character stands out as the &quot;everyman&quot; among the super-powered Avengers, bringing a grounded perspective to the team. <br />Clint Barton plays a crucial role in Captain America: Civil War (2016), where he sides with Captain America in opposing the Sokovia Accords, which seek to regulate the activities of superheroes. His relationships with other Avengers, especially Natasha Romanoff, deepen, highlighting their long-standing friendship and mutual respect. <br />In Avengers: Infinity War (2018) and Avengers: Endgame (2019), Clint is noticeably absent from the initial fight against Thanos but returns in a crucial role during the climactic battle. In Endgame, after losing his family in the Snap, he takes on the vigilante persona of Ronin and becomes a brutal hunter of criminals, showcasing his darker side. His arc culminates in a selfless act during the final battle against Thanos, where he fights alongside his fellow Avengers to restore balance to the universe.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Role in the Avengers
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Hawkeye&apos;s role in the Avengers is multifaceted, encompassing themes of redemption, loyalty, and mentorship. His journey from a troubled past to a key member of Earth&apos;s Mightiest Heroes illustrates the importance of human resilience and the impact of personal connections. Clint Barton, with his exceptional skills and relatable struggles, remains a beloved and integral part of the Avengers&apos; legacy in the Marvel Universe.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Legacy and Cultural Impact
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Hawkeye&apos;s portrayal in the MCU has evolved significantly over the years. While he started as a secondary character, his depth and complexity have been highlighted through various story arcs. Clint Barton, portrayed by Jeremy Renner, has become a relatable figure in the superhero genre, resonating with audiences for his struggles, vulnerabilities, and resilience. <br />The character&apos;s standalone Disney+ series, Hawkeye (2021), further explores Clint&apos;s life post-Endgame, focusing on his attempts to reconnect with his family during the holiday season while confronting past adversaries. The series introduces Kate Bishop, a young archer who becomes his mentee, highlighting themes of legacy and mentorship.
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
