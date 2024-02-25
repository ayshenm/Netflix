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
    // <div className=" justify-center items-center flex flex-col gap-5">
    //   <p className="text-white text-lg">
    //       Ready to watch? Enter your email to create or restart your membership.
    //     </p>
    //     <div className="flex justify-center items-center">
    //     <div className="flex mt-4">
    //       <input
    //         placeholder="Email address"
    //         className="bg-white p-4 min-w-[400px]"
    //       />
    //       </div>
    //       <button
    //         onClick={() => signIn()}
    //         className="flex items-center bg-[#e50914] text-white text-xl px-8 py-"
    //       >
    //         Get Started
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //           className="w-6"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M9 5l7 7-7 7"
    //           />
    //         </svg>
    //       </button>

    //     </div>

    // </div>

    <div className="flex flex-col ">
      <p className="text-white text-lg">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div>
      <div className="flex w-full mt-4 max-sm:flex-col justify-center items-center gap-3 ">
        <div className="">
          <input placeholder="Email address" className="bg-white/20 border border-gray-100 p-4 min-w-[400px] focus:border-white cursor-pointer caret-white outline-green-900 max-sm:w-[200px]" />
        </div>
        <div className="">
          <button
            onClick={() => signIn()}
            className="flex items-center bg-[#e50914] text-white text-xl px-8 py-3">
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
      </div>
    </div>
  );
}

export default HandleGet;
