import FAQ from "@src/components/FAQ";
import Footer from "@src/components/Footer";
import Header from "@src/components/Header";
import Main from "@src/components/Main";
import Navbar from "@src/components/Navbar";
import Head from "next/head";

import React from "react";

function Home() {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <Navbar />
      <Header />
      <Main />

      <Footer />
    </>
  );
}

export default Home;
