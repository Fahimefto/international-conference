import React from "react";
import Layout from "../../components/common/Layout";
import TitleBar from "../../components/common/TitleBar";
import ImportantDates from "../../components/homepage/ImportantDates";
import Tracks from "../../components/homepage/Tracks";
import Notice from "../../components/common/Notice";
import NotFound from "../../components/common/NotFound";

export default function Industry() {
  return (
    <Layout>
      <TitleBar title="Industry Track" />
      <div className="flex flex-col lg:flex-row max-w-screen-2xl mt-10 mx-auto">
        <div className="mx-5 lg:w-3/4  space-y-5 leading-relaxed text-justify ">
          <NotFound title="No Data Added" />
        </div>
        <div className="lg:w-1/4  m-5">
          <div className="flex flex-col space-y-10 ">
            <Tracks />
            <ImportantDates />
            <Notice />
          </div>
        </div>
      </div>
    </Layout>
  );
}
