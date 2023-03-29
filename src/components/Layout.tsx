import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Head from "next/head";

export default function Layout({ children }: any) {
  return (
    <>
      {/** Head */}
      <Head>
        <title>International Conference</title>
        <meta name="description" content="IICT,SUST" />
        <link rel="icon" href="#" />
      </Head>
      <div className="flex min-h-screen justify-between flex-col">
        {/* <Nav /> */}
        <header className=" z-50">
          <Nav />
        </header>
        {/** Main content */}
        <main className="relative">{children}</main>
        {/** Footer */}
        <footer className="relative mt-10">
          <Footer />
        </footer>
      </div>
    </>
  );
}
