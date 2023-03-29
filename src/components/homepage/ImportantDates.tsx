import React from "react";

export default function ImportantDates() {
  const dates = [
    {
      date: "12 January 2024",
      title:
        "Excepteur labore elit eu voluptate eu proident proident veniam dolore.",
    },
    {
      date: "12 January 2024",
      title:
        "Excepteur labore elit eu voluptate eu proident proident veniam dolore.",
    },

    {
      date: "12 January 2024",
      title:
        "Excepteur labore elit eu voluptate eu proident proident veniam dolore.",
    },
    {
      date: "12 January 2024",
      title:
        "Excepteur labore elit eu voluptate eu proident proident veniam dolore.",
    },
    {
      date: "12 January 2024",
      title:
        "Excepteur labore elit eu voluptate eu proident proident veniam dolore.",
    },
    {
      date: "12 January 2024",
      title:
        "Excepteur labore elit eu voluptate eu proident proident veniam dolore.",
    },
    {
      date: "12 January 2024",
      title:
        "Excepteur labore elit eu voluptate eu proident proident veniam dolore.",
    },
  ];
  return (
    <section className="rounded-md outline outline-blue-800 min-w-full">
      <h2 className="bg-blue-800 w-full h-10 text-center text-white py-1 font-bold ">
        Important Dates
      </h2>
      {dates.map((date, index) => (
        <div
          className={index % 2 !== 0 ? "bg-blue-800 bg-opacity-10 p-5" : "p-5"}
          key={index}
        >
          <span className="flex text-blue-800 font-bold">
            <svg
              className="h-5 text-blue-800 inline-block items-center mr-1"
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
      ))}
    </section>
  );
}
