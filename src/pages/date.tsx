import React from "react";
import Layout from "../components/common/Layout";
import ImportantDates from "../components/homepage/ImportantDates";

export default function Date() {
  return (
    <Layout>
      <div className="max-w-screen-xl m-5 lg:mx-auto mt-10">
        <ImportantDates />
      </div>
    </Layout>
  );
}
