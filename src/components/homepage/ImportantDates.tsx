import React from "react";

export default function ImportantDates() {
  const dates = [
    {
      date: "31 August, 2023",
      title: "Paper Submission Deadline",
    },
    {
      date: "30 October, 2023",
      title: "Acceptance Notification",
    },

    {
      date: "15 November, 2023",
      title: "Camera Ready Submission",
    },
    {
      date: "05 January, 2024",
      title: "Registration Deadline",
    },
    {
      date: "15-16 February, 2024",
      title: "Conference Date",
    },
  ];
  return (
    <section className="rounded-md border-2 border-blue-800 min-w-full">
      <h2 className="bg-blue-800 w-full  text-center text-white py-2 font-bold ">
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
