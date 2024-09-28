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
                            className="w-[15rem] h-[15rem] bg-green-500 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/ironman.jpg)] bg-cover absolute -top-[7rem] left-[4rem]"
                        ></div>
                        <h1 className="text-5xl font-bold uppercase sans underline">iron man</h1>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Iron Man, also known as Tony Stark, is one of the most iconic characters in the Marvel Universe and a founding member of the Avengers. First appearing in Tales of Suspense #39 in 1963, created by writer Stan Lee, developed by Larry Lieber, and designed by artists Don Heck and Jack Kirby, Iron Man has grown to be a central figure in both Marvel Comics and the Marvel Cinematic Universe (MCU). Tony Stark&apos;s journey from a genius playboy industrialist to a selfless superhero is one of the most compelling arcs in superhero storytelling.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Origin and Backstory
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Tony Stark is the son of wealthy industrialist and weapons manufacturer Howard Stark. A brilliant inventor and engineer, Tony inherited his father&apos;s company, Stark Industries, at a young age. While visiting a war zone to demonstrate Stark Industries&apos; new weapons, Stark is injured by a landmine and captured by terrorists. A piece of shrapnel is lodged near his heart, threatening his life. To save himself, Stark builds a suit of powered armor with the help of fellow captive Ho Yinsen. This suit not only keeps him alive but allows him to escape captivity. Upon returning home, Stark refines the armor and decides to use it to fight crime and protect the world, taking on the mantle of Iron Man. <br /> Stark&apos;s decision to become Iron Man marks a shift in his philosophy. Once a weapons manufacturer, he realizes the destructive power of the arms industry and transforms Stark Industries into a force for good, focusing on clean energy and global defense technologies.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Role in the MCU
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Iron Man&apos;s debut in the MCU came in 2008 with the release of Iron Man, directed by Jon Favreau and starring Robert Downey Jr. as Tony Stark. The success of this film launched the MCU and set the tone for future films. The movie follows Stark&apos;s journey from a self-centered, reckless billionaire to a hero who takes responsibility for his actions. He constructs his first armor to escape his captors, later refining it into the advanced suits that become synonymous with Iron Man. <br />Throughout the MCU, Stark&apos;s character evolves as he grapples with his responsibilities as both a billionaire industrialist and a superhero. In Iron Man 2 (2010), Iron Man 3 (2013), and his appearances in The Avengers films, he faces challenges ranging from personal health crises (stemming from the shrapnel near his heart) to the consequences of his company&apos;s past actions. Tony Stark is portrayed as a deeply flawed character, constantly evolving as he faces his inner demons, fears, and responsibilities.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Role in the Avengers
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            As one of the founding members of the Avengers, Tony Stark plays a key role in bringing together Earth&apos;s mightiest heroes. In The Avengers (2012), Stark funds and designs much of the technology used by the team, including the Avengers Tower and various upgrades to their equipment. His leadership, intelligence, and resources are invaluable to the team&apos;s operations. <br />Iron Man&apos;s influence is perhaps most felt during the Infinity Saga. In Avengers: Age of Ultron (2015), his creation of the Ultron program, designed to protect Earth, backfires disastrously, leading to global destruction and the creation of Vision. His actions reflect the complexity of Stark&apos;s character—he&apos;s often motivated by a genuine desire to protect the world, but his ambition and ego sometimes create unintended consequences. <br />Stark&apos;s role reaches its pinnacle in Avengers: Infinity War (2018) and Avengers: Endgame (2019), where he leads the fight against Thanos. His character arc, which spans over a decade in the MCU, concludes with a heroic self-sacrifice in Endgame. In the final battle, Stark uses the Infinity Stones to defeat Thanos and his army, knowing that the act will cost him his life. His final words, "I am Iron Man," become a symbol of his journey from selfish genius to selfless savior.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Legacy and Cultural Impact
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Robert Downey Jr.&apos;s portrayal of Tony Stark has become synonymous with Iron Man, transforming the character from a lesser-known hero into a global icon. Stark&apos;s story resonates with audiences due to his humanity—he is brilliant yet flawed, struggling with his own demons while trying to protect the world. His character arc, from reckless billionaire to self-sacrificing hero, is one of the most emotionally compelling narratives in the MCU. <br />Iron Man&apos;s legacy in both the MCU and pop culture is monumental. His sacrifice at the end of Endgame solidified him as a legendary hero, and the line "I love you 3000" has become a cultural touchstone. Stark&apos;s influence on the MCU continues, with his technology and moral lessons shaping the future of the Marvel Universe. <br />Iron Man stands as a testament to the idea that being a hero isn&apos;t just about strength or superpowers—it&apos;s about heart, intellect, and the willingness to do what&apos;s right, even at great personal cost.
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
