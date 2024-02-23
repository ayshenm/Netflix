import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Input from "./Input";

function HandleGet() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleGetStartedClick = async () => {
    const session = await getSession();

    if (session) {
      router.push("/movie");
    } else {
      router.push("/profiles");
    }
  };
  return (
    <div className=" justify-center items-center flex flex-col">
      <p className="text-white text-lg max-sm:text-[1.125rem]">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex mt-4 gap-2 lg:flex-row md:flex-row sm:flex-col items-center max-sm:flex-col md:mb-10">
        <Input
          id="email"
          value={email}
          label="Email Address"
          onChange={(e: any) => setEmail(e.target.value)}
          type="email"
          
        />
        <button
          onClick={handleGetStartedClick}
          className="flex items-center bg-[#e50914] text-white font-bold text-xl px-8 hover:bg-red-800  md:p-4 max-md:p-4  ">
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default HandleGet;
