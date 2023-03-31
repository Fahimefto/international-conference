import React from "react";
import Tracks from "./Tracks";
import ImportantDates from "./ImportantDates";

export default function About() {
  return (
    <section className="">
      <div className="bg-blue-800 lg:h-10 h-5"></div>
      <div className="flex flex-col lg:flex-row max-w-screen-2xl  mx-auto ">
        <div className="lg:w-2/3  w-full ">
          <h2 className="flex font-extrabold uppercase text-xl p-5 tracking-wider">
            Advance Research on Computing, Electronics & Software Engineering
          </h2>
          <div className="border-[3px] bg-white border-blue-800 mx-5 rounded-md">
            <h2 className="p-5  leading-relaxed text-justify">
              2024 1&apos;st International Conference on Advance Research on
              Computing, Electronics and Software Engineering (ARCES 2024) will
              be held February 15-16 , 2024 in Sylhet, Bangladesh. This
              conference will be sponsored by Springer. The conference will
              bring together the top researchers from Asian Pacific nations,
              North America, Europe and around the world to exchange their
              research results and address open issues in 4IR technologies like
              Deep Learning and Big Data; Intelligent System Architectures;
              Intelligent Web and Algorithm;Software Engineering and Service
              Science;Artificial Intelligence tools &amp; Applications;
              Blockchain Technology and Systems as well as in Power Systems and
              Renewable Energy ; Communications and Signal Processing;
              Electronic Circuits and Systems, etc. It will be one of the
              leading international conferences for presenting novel and
              fundamental advances in the fields of New Generation Artificial
              Intelligence,Internet of Things, Natural Language processing,
              System Model and Algorithm, Software Engineering and Blockchain
              Technology and Systems.All papers must be written in English and
              will be reviewed by technical committees of the Conference.
            </h2>
            <h2 className="p-5 text-justify">
              We are pleased to inform you that at ARCES 2024 we have renowned
              scholars from home and abroad at our advisory committee, technical
              program committee and organizing committee. We plan to invite
              renowned keynote speakers, invited speakers, resource personnel to
              ARCES 2024. We plan to publish all accepted and presented papers
              either at Springer Lecture Notes in Computer and Systems or as
              book chapters published by Taylor and Francis indexed by Scopus
              and/or other indexing services.
            </h2>
          </div>
          <div className=" m-5  rounded-md ">
            <div className="flex items-center flex-col border pb-5 rounded-lg">
              <h2 className="text-xl font-bold mb-5  uppercase text-white p-3 bg-blue-800 w-full text-center rounded-t-lg">
                Publication Partner
              </h2>
              <div className="flex flex-col items-center">
                <img src="/springer.png" className="w-48  "></img>
                <h3 className="text-sm text-slate-700"></h3>
              </div>
            </div>
          </div>

          <div className=" m-5  rounded-md ">
            <div className="flex items-center flex-col border rounded-lg pb-5">
              <h2 className="text-xl font-bold mb-5 rounded-t-lg uppercase text-white p-3 bg-blue-800 w-full text-center">
                Sponsor
              </h2>
              <div className="flex gap-10 flex-col items-center lg:flex-row">
                <div className="">
                  <img src="/ugc.png" className="w-40"></img>
                  <h3 className="text-sm text-center text-slate-700"></h3>
                </div>
                <div className="">
                  <img src="/sust.png" className="w-24"></img>
                  <h3 className="text-sm text-center text-slate-700"></h3>
                </div>
                <div className="">
                  <img src="/ugc.png" className="w-40"></img>
                  <h3 className="text-sm text-center text-slate-700"></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:w-1/3 w-full  mt-5">
          <div className="flex flex-col space-y-10 lg:m-10 m-5">
            <Tracks />
            <ImportantDates />
          </div>
        </div>
      </div>
    </section>
  );
}
