import React, { useCallback, useState } from "react";
import Input from "@/components/Input";
import { useRouter } from "next/router";
import { getSession, signIn } from "next-auth/react";
import axios from "axios";
import { NextPageContext } from "next";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const router = useRouter();

  const toogleVariant = useCallback(() => {
    setVariant((currentVariant) => (currentVariant === "login" ? "register" : "login"));
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      router.push("/profiles");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/sign-up", {
        email,
        name,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
      <nav className="px-12 pt-6 bg-black bg-opacity-45">
        <Image src={Logo} alt="logo-image" width={120} height={120} />
      </nav>

      <div className="bg-black h-full w-full bg-opacity-45 flex justify-center items-center flex-col">
        <div className="mt-24 rounded bg-black/80 py-10 md:mt-10 md:max-w-sm md:px-14">
          <h2 className="text-white text-5xl mb-8 font-semibold">
            {variant === "login" ? "Log-in" : "Sign-up"}
          </h2>

          <div className="flex flex-col gap-4">
            {variant == "register" && (
              <Input
                id="name"
                value={name}
                label="Fullname"
                onChange={(e: any) => setName(e.target.value)}
                type="text"
              />
            )}

            <Input
              id="email"
              value={email}
              label="Email Address"
              onChange={(e: any) => setEmail(e.target.value)}
              type="email"
            />

            <Input
              id="password"
              value={password}
              label="Password"
              onChange={(e: any) => setPassword(e.target.value)}
              type="text"
            />
          </div>
          <button
            onClick={variant === "login" ? login : register}
            className="bg-red-700 py-3
             text-white hover:bg-red-800 transition
            rounded-md w-full mt-5">
            {variant === "login" ? "Login" : "Sign up"}
          </button>
          <div className="mt-4 pb-4 text-[#ccc] w-full flex justify-between cursor-pointer">
            <span>
              <input
                className="w-4 h-4 me-1  accent-zinc-400  checked:accent-red-600"
                type="checkbox"
              />
              Remember me
            </span>
            <a className="pointer font-light hover:underline transition" href="#">
              Need help?
            </a>
          </div>
          <p className="text-neutral-600 mb-2">
            {variant == "login" ? "New to Netflix?" : "Alrady Have a account?"}
            <span
              onClick={toogleVariant}
              className="text-white ml-2 cursor-pointer hover:underline transition">
              {variant === "login" ? "Sign-up now" : "Log in now."}
            </span>
          </p>
          <div className="text-xs text-gray-500">
            This page is protected by Google reCAPTCHA to ensure youre not a bot.
            <Link href={"/"} className="text-[#0080ff] hover:underline mx-1">
              Learn more.{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
