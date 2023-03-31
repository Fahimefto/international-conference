import Head from "next/head";
import Image from "next/image";
import Layout from "../components/common/Layout";
import Banner from "../components/homepage/Banner";
import About from "../components/homepage/About";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <About />
    </Layout>
  );
}
