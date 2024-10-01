"use client"
import React, {useEffect} from 'react';
import gsap from 'gsap';
import Leftbar from '../components/Leftbar';
import Rightbar from '../components/Rightbar';
import Footer from '../components/Footer';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        gsap.to(".about-page", {
            color: "#35f048a7",
            duration: 0.3,
        });
    }, []);

    return (
        <>
            <div className="bg-[#111] min-h-[100svh] relative pt-[5svh] pb-[20svh]">
                <Leftbar />
                <Rightbar />
                <div className="about-page min-h-[150svh] w-[90svw] mx-auto text-[#111] text-center p-32 flex flex-col gap-16 relative">
                    <h1 className="text-8xl font-bold uppercase sans underline">About The Avengers</h1>
                    <p className='font-sans font-semibold uppercase tracking-tighter'>
                        The Avengers are Earth&apos;s mightiest heroes, a team assembled to protect the planet from extraordinary threats
                        that are beyond the capabilities of any individual superhero. Created by legendary comic book writer Stan Lee
                        and artist Jack Kirby, the Avengers made their first appearance in <strong>The Avengers</strong> #1 in 1963 and
                        have since become a central part of the Marvel Universe, both in comics and the Marvel Cinematic Universe (MCU).
                    </p>
                    <h4 className="text-3xl uppercase sans tracking-wide">
                        The Avengers Initiative
                    </h4>
                    <p className='font-sans font-semibold uppercase tracking-tighter'>
                        The Avengers were brought together by Nick Fury, the director of S.H.I.E.L.D., as part of the Avengers Initiative.
                        This initiative was a response to the increasing threats facing the world, whether they were from other dimensions,
                        outer space, or rogue individuals with superpowers. What makes the Avengers unique is not just their individual powers
                        and abilities, but their ability to come together as a team, combining their strengths to defeat any enemy.
                    </p>
                    <h4 className="text-3xl uppercase sans tracking-wider">
                        The Original Team
                    </h4>
                    <div className="">
                        <ul className="font-sans font-semibold uppercase tracking-tighter grid grid-cols-2 gap-8">
                            <li className='px-10'>
                                <strong>Iron Man (Tony Stark)</strong><br /> The genius billionaire inventor who dons a high-tech suit of armor, offering  incredible firepower, flight, and defense.
                            </li>
                            <li className='px-10'>
                                <strong>Thor</strong><br /> The Norse God of Thunder, wielding his mystical hammer Mjolnir and controlling the elements of lightning and storms.
                            </li>
                            <li className='px-10'>
                                <strong>Hulk (Bruce Banner)</strong><br /> A brilliant scientist who transforms into the monstrous Hulk when enraged, possessing limitless strength and durability.
                            </li>
                            <li className='px-10'>
                                <strong>Black Widow (Natasha Romanoff)</strong><br /> A former KGB spy and assassin, her skills in hand-to-hand combat, espionage, and strategy make her a formidable agent.
                            </li>
                        </ul>
                        <ul className='w-[50%] mx-auto font-sans font-semibold uppercase tracking-tighter my-8'>
                            <strong>Hawkeye (Clint Barton)</strong><br /> A master archer with incredible precision, Clint Barton serves as the team&apos;s eye in the sky with his pinpoint accuracy.
                        </ul>
                    </div>
                    <h4 className="text-3xl uppercase sans tracking-wider">
                        The Avengers&apos; Mission
                    </h4>
                    <p className='font-sans font-semibold uppercase tracking-tighter'>
                        The Avengers&apos; primary mission is to defend Earth and its inhabitants from any threat. Whether facing alien invasions, artificial intelligence gone rogue,
                        or internal conflicts, the Avengers remain united in their goal of protecting the planet. Their motto, &quot;Avengers Assemble,&quot; represents the call to come together
                        in the face of danger, a symbol of their strength in unity.
                    </p>
                    <h4 className="text-3xl uppercase sans tracking-wider">
                        The Avengers in the MCU
                    </h4>
                    <p className='font-sans font-semibold uppercase tracking-tighter'>
                        In the Marvel Cinematic Universe, the Avengers were brought to life with their first assembly in the movie The Avengers (2012), directed by Joss Whedon.
                        Since then, they have become a pop culture phenomenon, playing a central role in shaping the MCU&apos;s Infinity Saga, which culminated in the epic battles of
                        Avengers: Infinity War (2018) and Avengers: Endgame (2019).
                    </p>
                    <h4 className="text-3xl uppercase sans tracking-wider">
                        Legacy and Impact
                    </h4>
                    <p className='font-sans font-semibold uppercase tracking-tighter'>
                        Beyond their superheroic exploits, the Avengers represent a symbol of hope, courage, and resilience. Each member, with their own flaws and vulnerabilities,
                        demonstrates that even the mightiest heroes are human at heart. Together, they inspire us to fight for what&apos;s right, to work together, and to never give up,
                        no matter how overwhelming the odds may seem.
                    </p>
                </div>
                <Footer />
            </div>


        </>
    );
};

export default About;
