import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Head from "next/head";
import { Lato } from "@next/font/google";
const inter = Lato({ weight: ["400", "700", "900"], subsets: ["latin"] });
export default function Layout({ children }: any) {
  return (
    <>
      {/** Head */}
      <Head>
        <title>International Conference</title>
        <meta name="description" content="IICT,SUST" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className={inter.className}>
        <div className="flex min-h-screen  flex-col">
          {/* <Nav /> */}
          <header className=" z-50">
            <Nav />
          </header>
          {/** Main content */}
          <section className="relative">{children}</section>
          {/** Footer */}
          <footer className="relative mt-10">
            <Footer />
          </footer>
        </div>
      </main>
    </>
  );
}
