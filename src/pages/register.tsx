import React from "react";
import Layout from "../components/common/Layout";
import NotFound from "../components/common/NotFound";

export default function register() {
  return (
    <Layout>
      <section className="w-full ">
        <NotFound title="Registration is not open yet." />
      </section>
    </Layout>
  );
}
