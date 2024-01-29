import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import styles from "@/styles/Home.module.css";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      {/* <h1 className="text-3xl bg-red-900 font-bold underline">Hello world!</h1>
      <p className="text-white">{user?.email}</p>
      <button onClick={() => signOut() } className="w-full bg-red-300 text-white">qayit</button> */}
      <Navbar/>
    </>
  );
}
