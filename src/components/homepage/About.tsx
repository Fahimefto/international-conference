import React from "react";
import Tracks from "./Tracks";
import ImportantDates from "./ImportantDates";
import Notice from "../common/Notice";
import FacebookPage from "../common/FacebookPage";

export default function About() {
  return (
    <>
      <div className="bg-blue-800 lg:h-10 h-5" />
      <div className="flex flex-col lg:flex-row max-w-screen-2xl  mx-auto ">
        <div className="lg:w-3/4 w-full ">
          <p className="font-extrabold uppercase text-xl p-5 tracking-wider text-center">
            1<sup className="">st</sup> INTERNATIONAL CONFERENCE ON ADVANCE
            RESEARCH IN COMPUTER, ELECTRICAL & SOFTWARE ENGINEERING
          </p>
          <div className="border-[3px] bg-white border-blue-800 mx-5 rounded-md">
            <h2 className="p-5 text-justify">
              The International Conference on Advanced Research in Computer,
              Electrical, and Software Engineering (ARCES) is a prestigious
              platform for research in computer, software, and electrical
              engineering. The key aspect of ARCES is its encouragement of the
              necessary interaction between scientists, researchers, engineers,
              corporate executives, and academic students to bridge the gap
              between government, business, and academia. To develop this
              motivation, eminent scholars in pertinent domains provide keynote
              addresses, tutorials, workshops, exhibitions, and oral
              presentations. Academic researchers will disclose the results and
              findings of laboratory-based investigations at this conference. To
              inform academia about recent developments and useful findings,
              industry professionals illustrate cutting-edge research in 4IR
              technologies. For discussions of recent developments in
              contemporary computing intelligence, the ARCES platform will also
              address regional and global concerns.
            </h2>
            <h2 className="p-5 text-justify">
              Shahjalal University of Science and Technology in Sylhet,
              Bangladesh, will host ARCES on February 22–23, 2024. Subject to
              approval, <strong>Springer</strong> will sponsor this conference.
              The conference will bring together top researchers from Asia
              Pacific countries, North America, Europe, and other parts of the
              world to exchange research findings and discuss unresolved
              problems in 4IR technologies such as Deep Learning and Big Data,
              Intelligent System Architecture, Intelligent Web and Algorithms,
              Software Engineering and Service Science, Artificial Intelligence
              tools & Applications, Blockchain Technology, and Systems, as well
              as in Power Systems and Renewable Energy; It will be one of the
              top conferences in Bangladesh as well as in south aisa for
              showcasing cutting-edge research in the areas of New Generation
              Artificial Intelligence, Internet of Things, Natural Language
              Processing, System Model and Algorithm, Software Engineering, and
              Blockchain Technology and Systems. The conference's technical
              committees will assess all papers, which must be written in
              English.
            </h2>
            <p className="text-sm font-semibold italic p-5">
              All approved and presented papers will be published by Taylor and
              Francis as book chapters that are indexed by Scopus and/or other
              indexing services, or at Springer Lecture Notes in Computer and
              Systems, depending on the situation.
            </p>
          </div>
          <div className=" m-5  rounded-md ">
            <div className="flex items-center flex-col border pb-5 rounded-lg">
              <h2 className="text-xl font-bold mb-5  uppercase text-white p-3 bg-blue-800 w-full text-center rounded-t-lg">
                Conference Sponsor (Pending Approval)
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
                  <img src="/crtc.png" className="w-32"></img>
                  <h3 className="text-sm text-center text-slate-700"></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:w-1/4 w-full  mt-10">
          <div className="flex flex-col space-y-10 mx-5 w-full">
            <Tracks />
            <ImportantDates />
            <Notice />
            <FacebookPage />
          </div>
        </div>
      </div>
    </>
  );
}
