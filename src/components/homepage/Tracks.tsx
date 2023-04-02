import Link from "next/link";
import React from "react";

export default function Tracks() {
  const tracks = [
    {
      name: " Research Track",
      path: "/tracks/research",
      sub: [],
    },
    {
      name: "Industry Track",
      path: "/tracks/industry",
      sub: [],
    },
  ];
  return (
    <div className="rounded-md border-2 border-blue-800 w-full">
      <h2 className="bg-blue-800 text-center text-white py-1 font-bold">
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
