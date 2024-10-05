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
                <div className="bg-[#111] py-[25svh]">
                    <div className="min-h-[150svh] md:w-[80svw] w-[95svw] mx-auto rounded-[4rem] border-double border-8 text-center md:p-24 p-6 flex flex-col gap-14 relative avengers-page text-[#111] border-[#111]">
                        <div
                            className="md:w-[3rem] w-[10rem] md:h-[3rem] h-[10rem] bg-green-500 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/thor.jpg)] bg-cover bg-center absolute md:top-[27.5%] -top-36 md:left-[108.8%] left-[calc(50%-5rem)] md:avenger-img md:block"
                        ></div>
                        <h1 className="text-5xl font-bold uppercase sans underline">thor</h1>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Thor, the God of Thunder, is one of Marvel&apos;s most iconic characters and a key member of the Avengers. First appearing in Journey into Mystery #83 in 1962, Thor was created by writer Stan Lee, developed by Larry Lieber, and illustrated by Jack Kirby. Based on the Norse mythological deity of the same name, Thor&apos;s character brings a rich blend of mythology and superheroism to both Marvel Comics and the Marvel Cinematic Universe (MCU). As the prince (and later king) of Asgard, Thor balances his divine heritage with his role as a protector of Earth.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl">
                            Origin and Backstory
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Thor is the son of Odin, the All-Father, and ruler of Asgard, and Gaea, an ancient Earth goddess. Raised as the heir to the throne of Asgard, Thor possesses immense strength, immortality, and the magical hammer Mjolnir, which can only be wielded by those who are &quot;worthy.&quot; Mjolnir grants him the ability to control thunder and lightning, as well as the power of flight. <br />In his early comic book appearances, Thor is sent to Earth by Odin as a form of punishment for his arrogance and recklessness. Stripped of his godly powers, Thor is forced to live as the mortal doctor Donald Blake. Through this experience, Thor learns humility and compassion, eventually regaining his powers and embracing his destiny as a protector of both Asgard and Earth, known as Midgard to the Asgardians.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl">
                            Role in the MCU
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Thor made his debut in the MCU with Thor (2011), directed by Kenneth Branagh and starring Chris Hemsworth in the titular role. In the film, Thor&apos;s arrogance leads to his banishment from Asgard by Odin, who deems him unworthy of wielding Mjolnir. Stranded on Earth without his powers, Thor meets scientist Jane Foster (played by Natalie Portman) and learns humility, eventually regaining his worthiness to wield Mjolnir and saving Asgard from his adopted brother Loki&apos;s schemes. <br />Thor&apos;s story in the MCU progresses through his appearances in Thor: The Dark World (2013), Thor: Ragnarok (2017), and several Avengers films. He evolves from an impulsive warrior into a more mature leader, facing personal losses and grappling with the weight of his responsibilities as a protector of the Nine Realms. <br />Thor: Ragnarok marked a tonal shift for the character, with director Taika Waititi bringing a more humorous, self-aware take on Thor. The film is widely praised for revitalizing Thor&apos;s character, showing his vulnerabilities, humor, and strength. It also saw the destruction of Asgard and the loss of Mjolnir, with Thor relying more on his inherent godly powers than on his iconic weapon.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Role in the Avengers
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            As a founding member of the Avengers, Thor plays a crucial role in defending Earth from cosmic threats. In The Avengers (2012), he first teams up with Iron Man, Captain America, Hulk, and others to stop Loki, who attempts to conquer Earth with the help of the Chitauri army. Thor&apos;s relationship with Loki is central to his character development—though they are often adversaries, Thor consistently seeks to redeem his brother. <br />Thor&apos;s contributions to the Avengers continue in Avengers: Age of Ultron (2015), where he provides key insights about the Infinity Stones, the cosmic objects that eventually become central to the MCU&apos;s overarching storyline. His presence as a god among mortals adds a unique dynamic to the team, particularly in battles where his immense power is crucial. <br />Thor&apos;s character arc reaches new heights in Avengers: Infinity War (2018) and Avengers: Endgame (2019). After suffering devastating losses, including the destruction of Asgard and the death of many of his people, Thor becomes driven by revenge against Thanos. He forges a new weapon, Stormbreaker, to battle the Mad Titan. However, after failing to stop Thanos from snapping half of all life out of existence, Thor falls into despair and self-doubt, as depicted in Endgame. Eventually, Thor redeems himself, joining the Avengers in the final battle against Thanos and reclaiming his role as a hero.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Legacy and Cultural Impact
                        </h4>
                        <p className='font-sans font-semibold text-lg tracking-tighter'>
                            Chris Hemsworth&apos;s portrayal of Thor has cemented the character as one of the most beloved in the MCU. Thor&apos;s journey from an arrogant god to a flawed but courageous leader has resonated with audiences, making him both relatable and inspiring. His character&apos;s emotional growth, combined with his powerful and often humorous presence, has made Thor a fan favorite. <br />In Thor: Love and Thunder (2022), directed by Taika Waititi, Thor&apos;s journey continues as he seeks purpose after the events of Endgame. The film explores themes of love, identity, and responsibility, and introduces Jane Foster as the Mighty Thor, wielding a reforged Mjolnir. Thor&apos;s legacy extends beyond his own storylines, as the character continues to be a symbol of both power and vulnerability. <br />Thor&apos;s impact on popular culture is significant. As a representation of Norse mythology within modern superhero narratives, Thor blends ancient myth with contemporary storytelling. His character embodies themes of redemption, leadership, and sacrifice, making him a compelling figure both in comics and on the big screen.
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
