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
        <div className="bg-[#111] py-[20svh]">
          <div className="min-h-[150svh] w-[80svw] mx-auto bg-[#35f0486d] rounded-[4rem] border-double border-8 border-[#4CAF50] text-center p-24 flex flex-col gap-14 relative">
            <div
              className="w-[15rem] h-[15rem] bg-green-500 border-double border-4 border-[#4CAF50] rounded-full bg-[url(/imgs/blackpanther.webp)] bg-cover absolute -top-[7rem] left-[4rem]"
            ></div>
            <h1 className="text-5xl font-bold uppercase sans underline">
              Black Panther
            </h1>
            <p className="font-sans font-semibold text-lg tracking-tighter">
              Black Panther, also known as T&apos;Challa, is a significant
              character in the Marvel Universe, particularly as a member of the
              Avengers. He first appeared in Fantastic Four #52 in 1966, created
              by writer Stan Lee and artist Jack Kirby. As the ruler of Wakanda,
              a fictional African nation, Black Panther embodies the combination
              of royalty, technological prowess, and superheroism, making him a
              unique figure in the Marvel Cinematic Universe (MCU) and comics.
            </p>
            <h4 className="font-extrabold uppercase text-2xl font-sans">
              Origin and Backstory
            </h4>
            <p className="font-sans font-semibold text-lg tracking-tighter">
              T&apos;Challa becomes the Black Panther after his father,
              T&apos;Chaka, is killed during a terrorist attack orchestrated by
              Ulysses Klaue, a villain who seeks Wakanda&apos;s most valuable
              resource: vibranium. Wakanda is the most technologically advanced
              country in the world due to its vast reserves of vibranium, a rare
              metal that powers much of its advancements and weapons. After his
              father&apos;s death, T&apos;Challa must take on both the mantle of
              king and Black Panther—a role passed down for generations. The
              title of Black Panther isn&apos;t just a royal symbol but also a
              protector of Wakanda, imbued with powers from the mystical herb
              that enhances strength, agility, and senses.
            </p>
            <h4 className="font-extrabold uppercase text-2xl font-sans">
              Role in the MCU
            </h4>
            <p className="font-sans font-semibold text-lg tracking-tighter">
              Black Panther&apos;s first appearance in the MCU was in Captain
              America: Civil War (2016), where he was portrayed by actor
              Chadwick Boseman. His storyline begins with the tragic death of
              his father at the U.N., leading him to seek vengeance against
              Bucky Barnes, believed to be responsible. Throughout the movie,
              his character grows from one driven by revenge to one who seeks
              justice, ultimately helping to mediate between Captain America and
              Iron Man during the Avengers&apos; internal conflict.
              <br />
              Black Panther received his standalone film in 2018, titled Black
              Panther. This film became a cultural phenomenon, not only for its
              action-packed scenes but also for its celebration of African
              culture and its themes of identity, tradition, and responsibility.
              Directed by Ryan Coogler, Black Panther featured a predominantly
              Black cast and showcased Wakanda as a utopian society that merged
              ancient African traditions with futuristic technology. The movie
              introduced important characters such as T&apos;Challa&apos;s
              sister Shuri, the brilliant scientist and inventor, and Erik
              Killmonger, portrayed by Michael B. Jordan. Killmonger, a former
              U.S. Black-ops soldier with Wakandan heritage, seeks to overthrow
              T&apos;Challa to use Wakanda&apos;s power to liberate oppressed
              Black people globally. The film&apos;s exploration of themes like
              isolationism, diaspora, and social justice resonated deeply with
              audiences, earning it critical acclaim and making it one of the
              highest-grossing films of all time.
            </p>
            <h4 className="font-extrabold uppercase text-2xl font-sans">
              Role in the Avengers
            </h4>
            <p className="font-sans font-semibold text-lg tracking-tighter">
              As a member of the Avengers, Black Panther plays a crucial role in
              the MCU&apos;s overarching storyline. His technological resources
              and leadership abilities make him an invaluable ally. Wakanda
              serves as a pivotal battleground in Avengers: Infinity War (2018)
              when Earth&apos;s mightiest heroes defend the world against
              Thanos&apos; army. Black Panther fights alongside the Avengers in
              the battle, and his leadership of Wakanda&apos;s forces is
              instrumental in the war effort. Though he vanishes after the Snap
              at the end of the film, he is brought back in Avengers: Endgame
              (2019) to fight in the final, climactic battle against Thanos.
            </p>
            <h4 className="font-extrabold uppercase text-2xl font-sans">
              Legacy and Cultural Impact
            </h4>
            <p className="font-sans font-semibold text-lg tracking-tighter">
              Chadwick Boseman&apos;s portrayal of Black Panther had a profound
              impact on pop culture. His dignified and heroic portrayal of
              T&apos;Challa resonated with audiences worldwide, making him a
              symbol of Black excellence and empowerment. Tragically, Boseman
              passed away in 2020 after a private battle with cancer. His death
              was a tremendous loss, but his legacy as Black Panther remains
              powerful. Marvel has continued the story of Wakanda, and the Black
              Panther mantle now passes to new characters, maintaining the
              symbol of hope and strength Boseman helped create.
              <br />
              Black Panther, both in the comics and the MCU, stands as a
              revolutionary character—one who redefines what it means to be a
              superhero by blending African heritage with modern-day themes of
              justice, equality, and leadership. His influence stretches beyond
              the pages and screens, becoming a cultural icon for generations to
              come.
            </p>
          </div>
        </div>
        <Footer />
        <Scrollup />
      </div>
    </>
  );
}

export default Page;
