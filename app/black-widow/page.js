"use client";
import React, { useEffect } from "react";
import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";
import Scrollup from "../components/Scrollup";
import Footer from "../components/Footer";

function Page() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="relative">
                <Leftbar />
                <Rightbar />
                <div className="bg-[#111] min-h-[100svh] py-[20svh]">
                    <div className="min-h-[150svh] w-[80svw] mx-auto bg-[#35f0486d] rounded-[4rem] border-double border-8 border-[#4CAF50] text-center p-24 flex flex-col gap-14 relative">
                        <div
                            className="w-[15rem] h-[15rem] bg-green-500 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/blackwidow.jpg)] bg-cover bg-center absolute -top-[7rem] left-[4rem]"
                        ></div>
                        <h1 className="text-5xl font-bold uppercase sans underline">
                            Black Widow
                        </h1>
                        <p className="font-sans font-semibold text-lg tracking-tighter">
                            Black Widow, also known as Natasha Romanoff, is a key character in
                            the Marvel Universe, particularly recognized as a member of the
                            Avengers. Created by writer Stan Lee, scripter Don Rico, and
                            artist Don Heck, she first appeared in Tales of Suspense #52 in
                            1964. Black Widow is renowned for her exceptional skills as a spy,
                            martial artist, and marksman, making her one of the most formidable
                            characters in the Marvel Cinematic Universe (MCU) and comics.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Origin and Backstory
                        </h4>
                        <p className="font-sans font-semibold text-lg tracking-tighter">
                            Natasha Romanoff was born in Stalingrad, Russia, and became an
                            orphan at a young age. She was taken in by the Soviet government
                            and trained in the Black Widow program, a secret initiative that
                            transformed her into a lethal assassin and spy. The program
                            enhanced her physical abilities, provided her with advanced combat
                            training, and subjected her to psychological conditioning to
                            ensure loyalty to the Soviet Union.
                            <br />
                            As a young operative, Natasha was sent on various missions around
                            the world, where she honed her skills in espionage, infiltration,
                            and combat. Her first notable mission brought her into conflict
                            with Iron Man (Tony Stark), which led to her eventual recruitment
                            by S.H.I.E.L.D., an organization focused on protecting the world
                            from various threats. As part of S.H.I.E.L.D., Natasha began to
                            fight for a greater cause, using her skills for good rather than
                            as a pawn of the state.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Role in the MCU
                        </h4>
                        <p className="font-sans font-semibold text-lg tracking-tighter">
                            Black Widow made her MCU debut in Iron Man 2 (2010), portrayed by
                            Scarlett Johansson. Initially introduced as an undercover agent
                            working for S.H.I.E.L.D., Natasha&apos;s character quickly became
                            a fan favorite due to her wit, strength, and complexity. Her
                            backstory is further explored in later films, highlighting her
                            struggles with her past as a spy and assassin.
                            <br />
                            In The Avengers (2012), Natasha is recruited to join the team,
                            where she showcases her intelligence and combat prowess. She plays
                            a crucial role in gathering the Avengers and ultimately defeating
                            Loki and his Chitauri forces. Throughout the MCU, Black Widow&apos;s
                            character is defined by her relationships with other Avengers,
                            particularly with Hawkeye (Clint Barton), whom she shares a deep
                            bond with as they navigate the challenges of being heroes.
                            <br />
                            In Captain America: The Winter Soldier (2014), Natasha&apos;s
                            character development deepens as she confronts her past and the
                            moral implications of her former life. Her skills and intellect
                            prove invaluable in uncovering a conspiracy within S.H.I.E.L.D.
                            and battling the resurrected Winter Soldier, formerly known as
                            Bucky Barnes.
                            <br />
                            Black Widow received her standalone film, Black Widow (2021), which
                            takes place between the events of Captain America: Civil War (2016)
                            and Avengers: Infinity War (2018). The film delves into
                            Natasha&apos;s past, exploring her relationships with her
                            &quot;family&quot; and the consequences of her previous actions. The
                            movie highlights her struggles to reconcile her past as an assassin
                            with her desire for redemption.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Role in the Avengers
                        </h4>
                        <p className="font-sans font-semibold text-lg tracking-tighter">
                            As a member of the Avengers, Black Widow plays a critical role in
                            the team&apos;s operations. Her espionage background and combat
                            expertise allow her to undertake missions that require stealth and
                            strategic planning. In Avengers: Age of Ultron (2015), Natasha&apos;s
                            character develops further as she grapples with her identity and
                            the stigma associated with being a former assassin.
                            <br />
                            In Avengers: Infinity War (2018), Black Widow joins the fight
                            against Thanos, demonstrating her commitment to protecting the
                            world and her fellow heroes. Her leadership and determination shine
                            through, especially during the climactic battles. However, her deep
                            sense of loyalty and the toll of her past decisions weigh heavily
                            on her character.
                            <br />
                            The emotional core of Black Widow&apos;s arc culminates in Avengers:
                            Endgame (2019). In a selfless act, she sacrifices herself on Vormir
                            to obtain the Soul Stone, showcasing her growth from a self-serving assassin to a hero willing to lay down her life for her friends and the greater good. Her sacrifice deeply impacts the remaining Avengers and solidifies her legacy as a hero.
                        </p>
                        <h4 className="font-extrabold uppercase text-2xl font-sans">
                            Legacy and Cultural Impact
                        </h4>
                        <p className='font-sans font-semibold  text-lg tracking-tighter'>
                            Black Widow&apos;s portrayal in the MCU has had a profound impact on popular culture. Scarlett Johansson&apos;s performance has been praised for bringing depth and complexity to a character often marginalized in superhero narratives. Natasha&apos;s journey from a troubled past to a hero seeking redemption resonates with audiences, making her a relatable and inspiring figure. <br />Black Widow has become an iconic symbol of female empowerment within the superhero genre. Her skills, intelligence, and strength challenge stereotypes about women in action roles, allowing her to stand alongside her male counterparts as an equal. The release of her standalone film further solidifies her place in the Marvel Universe, allowing fans to explore her character in greater depth.
                        </p>
                    </div>
                </div>
                <Footer />
                <Scrollup />
            </div>
        </>
    )
}

export default page
