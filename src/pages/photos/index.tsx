import React from "react";
import Layout from "../../components/common/Layout";
import NotFound from "../../components/common/NotFound";

export default function Photos() {
  const photos = [];
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto ">
        {/* <h1 className="text-blue-800 justify-start text-center font-bold text-2xl mb-5">
          Gallery Photos
        </h1> */}
        {photos.length === 0 ? <NotFound title="No Photos Added" /> : null}
      </div>
    </Layout>
  );
}
