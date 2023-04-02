import React from "react";

export default function Notice() {
  const notices: any = [];
  return (
    <section className="rounded-md border-2 border-blue-800 min-w-full">
      <h2 className="bg-blue-800 w-full  text-center text-white py-2 font-bold ">
        Notice
      </h2>
      {notices.length == 0 ? (
        <div className="p-2 px-5 bg-red-100 text-red-800 rounded-lg" key={1}>
          No Notice Added
        </div>
      ) : (
        notices?.map((date: any, index: number) => (
          <div
            className={
              index % 2 !== 0 ? "bg-blue-800 bg-opacity-10 p-5" : "p-5"
            }
            key={index}
          >
            <span className="flex text-blue-800 text-sm ">
              <svg
                className="h-4 text-blue-800 inline-block items-center mr-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <circle cx="12" cy="12" r="10" />{" "}
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {date.date}
            </span>
            <h3>{date.title}</h3>
          </div>
        ))
      )}
    </section>
  );
}
