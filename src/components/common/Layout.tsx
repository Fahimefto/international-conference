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
        <link rel="icon" href="/logo.ico" />

        <title>
          ARCES 2024 - Advance Research on Computing, Electronics & Software
          Engineering
        </title>
        <meta
          name="title"
          content="Advance Research on Computing, Electronics & Software Engineering (ARCES 2024)"
        />
        <meta
          name="description"
          content="2024 1'st International Conference on Advance Research on Computing, Electronics and Software Engineering (ARCES 2024) will be held February 15-16 , 2024 in Sylhet, Bangladesh. This conference will be sponsored by Springer. The conference will bring together the top researchers from Asian Pacific nations, North America, Europe and around the world to exchange their research results and address open issues in 4IR technologies like Deep Learning and Big Data;"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="/banner.png" />
        <meta
          property="og:title"
          content="Advance Research on Computing, Electronics & Software Engineering (ARCES 2024)"
        />
        <meta
          property="og:description"
          content="2024 1'st International Conference on Advance Research on Computing, Electronics and Software Engineering (ARCES 2024) will be held February 15-16 , 2024 in Sylhet, Bangladesh. This conference will be sponsored by Springer. The conference will bring together the top researchers from Asian Pacific nations, North America, Europe and around the world to exchange their research results and address open issues in 4IR technologies like Deep Learning and Big Data;"
        />
        <meta property="og:image" content="/banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="/banner.png" />
        <meta
          property="twitter:title"
          content="Advance Research on Computing, Electronics & Software Engineering (ARCES 2024)"
        />
        <meta
          property="twitter:description"
          content="2024 1'st International Conference on Advance Research on Computing, Electronics and Software Engineering (ARCES 2024) will be held February 15-16 , 2024 in Sylhet, Bangladesh. This conference will be sponsored by Springer. The conference will bring together the top researchers from Asian Pacific nations, North America, Europe and around the world to exchange their research results and address open issues in 4IR technologies like Deep Learning and Big Data;"
        />
        <meta property="twitter:image" content="/banner.png" />
      </Head>
      <main className={inter.className}>
        <div className="flex min-h-screen justify-between  flex-col">
          {/* <Nav /> */}
          <header className="z-50">
            <Nav />
          </header>
          {/** Main content */}
          <section className="relative">{children}</section>
          {/** Footer */}
          <footer className=" mt-10 justify-end">
            <Footer />
          </footer>
        </div>
      </main>
    </>
  );
}
