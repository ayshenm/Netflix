import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Tv from "@/public/images/tv.png";
import Tvv from "@/public/images/Tv2.png";
import Mobile from "@/public/images/mobile.jpg";
import Kids from "@/public/images/kids.png";
import BoxShot from "@/public/images/boxshot.png";
import GifIcon from "@/public/images/gifIcon.gif";
import FAQ from "./FAQ";

function Main() {
  return (
    <main className="bg-black ">
      <section className=" border-gray border-y-8 border-[rgb(53,53,53)] p-10 w-full flex justify-around items-center  mx-auto">
        <div className="flex justify-around items-center md:flex-row  lg:flex-row sm:flex-col max-md:flex-col">
          <div className="text-white md:text-left max-sm:text-center sm:text-center">
            <h2 className="font-[900] text-5xl pb-5 max-sm:text-4xl">Enjoy on your TV</h2>
            <p className="text-2xl font-normal max-sm:text-lg">
              Watch on Smart TVs, Playstation, Xbox, Chromecast,
              <br /> Apple TV, Blu-ray players, and more.
            </p>
          </div>

          <div className="relative">
            <Image className="w-full h-full" src={Tv} alt="tv" layout="" />
            <video
              className="absolute top-[48%]  mx-h-[54%] max-w-[73%] left-[50%] -translate-x-1/2 -translate-y-1/2 "
              autoPlay={true}
              loop={true}
              preload="true"
              muted
              playsInline
              data-uia="our-story-card-video">
              <source className="" src="/images/01.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="flex justify-around items-center  mx-auto border-gray border-b-8 border-[#353535] p-10">
        <div className="flex justify-around items-center md:flex-row  lg:flex-row sm:flex-col max-md:flex-col ">
          <div className="relative flex flex-col justify-center items-center ">
            <Image className="w-full h-full" src={Mobile} alt="mobile" layout="" />
            <div className="flex w-[50%] justify-evenly items-center border-2 border-gray-700  py-3 px-[1.25rem]  rounded-xl absolute left-[50%] bottom-[4%] -translate-x-1/2 bg-black max-sm:gap-2">
              <Image className="h-10 w-auto" src={BoxShot} alt="boxshot" layout="" />
              <div>
                <div className="text-white font-bold max-sm:text-sm md:text-sm">
                  Stranger Things
                </div>
                <div className="text-[#0071e1] ">Downloading...</div>
              </div>
              <Image className="h-[3rem] w-[3rem]" src={GifIcon} alt="gif" layout="" />
            </div>
          </div>

          <div className="text-white">
            <h2 className="font-[900] text-5xl pb-5 md:text-left max-sm:text-4xl text-center">
              Download your shows to
              <br /> watch offline
            </h2>
            <p className="text-2xl font-normal md:text-left max-sm:text-lg text-center">
              Save your favorites easily and always have
              <br /> something to watch.
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-around items-center  mx-auto border-gray border-b-8 border-[#353535] p-10">
        <div className="flex justify-around items-center md:flex-row  lg:flex-row sm:flex-col max-md:flex-col">
          <div className="text-white">
            <h2 className="font-[900] text-5xl pb-5 md:text-left max-sm:text-4xl text-center">
              Watch everywhere
            </h2>
            <p className="text-2xl font-normal md:text-left max-sm:text-lg text-center">
              Stream unlimited movies and TV shows on your
              <br /> phone, tablet, laptop, and TV.
            </p>
          </div>

          <div className="relative">
            <Image className="w-full h-full " src={Tvv} alt="tvv" layout="" />
            <video
              className="absolute top-[35%]  overflow-hidden  mx-h-[60%] max-w-[63%] left-[50%] -translate-x-1/2 -translate-y-1/2 "
              autoPlay={true}
              loop={true}
              preload="true"
              muted
              playsInline>
              <source className="" src="/images/02.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="flex justify-around items-center  mx-auto  border-gray border-b-8 border-[#353535] p-10">
        <div className="flex justify-around items-center md:flex-row  lg:flex-row sm:flex-col max-md:flex-col">
          <div className="relative">
            <Image className="w-full h-full" src={Kids} alt="kids" layout="" />
          </div>

          <div className="text-white">
            <h2 className="font-[900] text-5xl pb-5 md:text-left max-sm:text-4xl text-center">
              Create profiles for kids
            </h2>
            <p className="text-2xl font-normal md:text-left max-sm:text-lg text-center">
              Send kids on adventures with their favorite
              <br /> characters in a space made just for them—free with
              <br /> your membership.
            </p>
          </div>
        </div>
      </section>
      <FAQ />
    </main>
  );
}

export default dynamic(() => Promise.resolve(Main), { ssr: false });
