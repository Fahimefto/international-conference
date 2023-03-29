import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import About from "../components/About";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <About />
    </Layout>
  );
}
