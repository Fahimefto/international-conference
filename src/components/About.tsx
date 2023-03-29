import React from "react";
import Tracks from "./homepage/Tracks";
import ImportantDates from "./homepage/ImportantDates";

export default function About() {
  return (
    <section className="">
      <div className="bg-blue-800 h-10"></div>
      <div className="flex flex-col lg:flex-row max-w-screen-2xl  mx-auto ">
        <div className="lg:w-2/3  w-full ">
          <h2 className="flex font-extrabold uppercase text-xl p-5 tracking-wider">
            <svg
              className="h-8 w-5 text-blue-800 mr-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="12" y1="8" x2="12.01" y2="8" />{" "}
              <rect x="4" y="4" width="16" height="16" rx="2" />{" "}
              <polyline points="11 12 12 12 12 16 13 16" />
            </svg>
            International Conference 2023
          </h2>
          <div className="outline bg-white outline-blue-800 mx-5 rounded-md">
            <h2 className="p-5  leading-relaxed">
              Anim commodo anim magna consectetur magna adipisicing quis mollit
              mollit. Enim commodo laboris est ex deserunt irure reprehenderit
              nulla laborum ea dolor irure ipsum reprehenderit. Ex proident ea
              laboris irure in incididunt magna id. Cupidatat excepteur quis sit
              elit reprehenderit pariatur officia deserunt duis commodo aute et
              adipisicing velit. Mollit proident incididunt non magna qui ad
              excepteur esse proident.Amet aliquip id irure mollit nisi. Irure
              magna nisi ea id do nulla magna minim occaecat voluptate elit
              pariatur dolore. Anim deserunt aliqua non esse id anim. Deserunt
              eu proident velit sint anim aliqua culpa ut veniam aliqua
              cupidatat. Ut exercitation laborum enim sint laborum excepteur
              elit nisi.Enim sunt Lorem consectetur esse ea amet excepteur
              cillum quis cupidatat adipisicing officia ut fugiat. Laborum
              nostrud aliquip mollit dolor irure mollit pariatur laboris elit.
              Esse fugiat eu officia qui dolor. Ullamco id est esse ea nulla
              laborum fugiat consequat magna aliqua culpa aliquip.Dolor sit
              ullamco enim ea ipsum sunt. Nisi elit Lorem commodo laboris eu
              nulla incididunt duis nulla veniam. Ut quis veniam sint cillum
              sint. Ad excepteur excepteur dolor reprehenderit quis nulla
              mollit.
            </h2>
          </div>
        </div>
        <div className="flex lg:w-1/3 w-full  mt-5">
          <div className="flex flex-col space-y-10 m-10">
            <Tracks />
            <ImportantDates />
          </div>
        </div>
      </div>
    </section>
  );
}
