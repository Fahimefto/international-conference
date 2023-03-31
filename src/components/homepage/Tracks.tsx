import Link from "next/link";
import React from "react";

export default function Tracks() {
  const tracks = [
    {
      name: " Research Track",
      path: "/track/reserch",
      sub: [],
    },
    {
      name: "Industry Track",
      path: "/about/aim&objective",
      sub: [],
    },
    {
      name: "Journal First Track",
      path: "/about/history",
      sub: [],
    },
    {
      name: "New Ideas and Emerging Results Track",
      path: "/about/faculty",
      sub: [],
    },
    {
      name: "Artifact Evaluation Track and ROSE Festival",
      path: "/about/officer&staff",
      sub: [],
    },
    {
      name: "Doctoral Symposium Track",
      path: "/track/doctoral-symposium-track",
      sub: [],
    },
    {
      name: "Registered Reports Track",
      path: "/track/registered-reports",
      sub: [],
    },
    {
      name: "Tool Demo Track",
      path: "/track/tool",
      sub: [],
    },
  ];
  return (
    <div className="rounded-md border-2 border-blue-800 min-w-full">
      <h2 className="bg-blue-800 w-full text-center text-white py-1 font-bold">
        Tracks
      </h2>
      <div className="p-5  ">
        {tracks.map((track, index) => (
          <Link href={track.path} className="hover:underline p-1" key={index}>
            {track.name} {"    |    "}
          </Link>
        ))}
      </div>
    </div>
  );
}
