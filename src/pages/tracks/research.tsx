import React from "react";
import Layout from "../../components/common/Layout";
import TitleBar from "../../components/common/TitleBar";
import ImportantDates from "../../components/homepage/ImportantDates";
import Tracks from "../../components/homepage/Tracks";
import Notice from "../../components/common/Notice";
import Table from "../../components/common/Table";
export default function Reserch() {
  return (
    <Layout>
      <TitleBar title="Research Track" />
      <div className="flex flex-col lg:flex-row max-w-screen-2xl mt-10 mx-auto">
        <div className="mx-5 lg:w-3/4  space-y-5 leading-relaxed text-justify ">
          <p>
            2024 1<sup>st</sup> International Conference on Advance Research on
            Computing, Electronics and Software Engineering (ARCES 2024) will be
            held February 15-16 , 2024 in Sylhet, Bangladesh. This conference
            will be sponsored by Springer. The conference will bring together
            the top researchers from Asian Pacific nations, North America,
            Europe and around the world to exchange their research results and
            address open issues in 4IR technologies like Deep Learning and Big
            Data; Intelligent System Architectures; Intelligent Web and
            Algorithm;Software Engineering and Service Science;Artificial
            Intelligence tools & Applications; Blockchain Technology and Systems
            as well as in Power Systems and Renewable Energy ; Communications
            and Signal Processing; Electronic Circuits and Systems, etc. It will
            be one of the leading international conferences for presenting novel
            and fundamental advances in the fields of New Generation Artificial
            Intelligence、Internet of Things、 Natural Language processing,
            System Model and Algorithm、Software Engineering and Blockchain
            Technology and Systems. All papers must be written in English and
            will be reviewed by technical committees of the Conference.
          </p>
          <p>
            We are pleased to inform you that at ARCES 2024 we have renowned
            scholars from home and abroad at our advisory committee, technical
            program committee and organizing committee. We plan to invite
            renowned keynote speakers, invited speakers, resource personnel to
            ARCES 2024. We plan to publish all accepted and presented papers
            either at Springer Lecture Notes in Computer and Systems or as book
            chapters published by Taylor and Francis indexed by Scopus and/or
            other indexing services.
          </p>
          <p>
            The conference is soliciting state-of-the-art research papers in the
            following areas of interest(but not limited to):
          </p>
          <Table />
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
