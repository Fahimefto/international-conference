import React from "react";
import Layout from "../components/Layout";

export default function register() {
  return (
    <Layout>
      <section className="w-full ">
        <div className="bg-rose-800 bg-opacity-25 max-w-xl mx-auto mt-[10%] rounded-lg">
          <h1 className="p-5 font-bold text-center text-red-800">
            Oopp!! Registration is not open yet!
          </h1>
        </div>
      </section>
    </Layout>
  );
}
