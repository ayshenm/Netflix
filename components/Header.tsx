import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import HandleGet from "./HandleGet";

function Header() {

 
  return (
    <header className="flex justify-center items-center h-full w-full bg-[url('/images/hero.jpg')] brightness-75 bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col items-center justify-center flex-1  text-center">
        <h1 className="text-5xl font-extrabold text-white ">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="text-2xl text-white mt-4 mb-8">Watch anywhere. Cancel anytime.</h2>
        <HandleGet />
      </div>
    </header>
  );
}

export default Header;
