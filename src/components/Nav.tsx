import React, { useState } from "react";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Menu } from "@headlessui/react";

const Nav1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    {
      name: "Home",
      path: "/",
      sub: [],
    },
    {
      name: "Tracks",
      path: "#",
      sub: [
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
      ],
    },

    {
      name: " Attending",
      path: "#",
      sub: [
        {
          name: "Venue: SUST",
          path: "/attend/venue",
          sub: [],
        },
        {
          name: "Location: SUST",
          path: "/attend/location",
          sub: [],
        },
        {
          name: "Accomodation",
          path: "/attend/accomodation",
          sub: [],
        },
        {
          name: "Travel Information",
          path: "/attend/trave-information",
          sub: [],
        },
        {
          name: "Code of Conduct",
          path: "/attend/code-of-conduct",
          sub: [],
        },
        {
          name: " Equity, Diversity, and Inclusion",
          path: "/attend/EQDI",
          sub: [],
        },
      ],
    },

    {
      name: "Co-located Events",
      path: "#",
      sub: [
        {
          name: "VISSOFT 2023",
          path: "/co-events/vissot",
          sub: [],
        },
        {
          name: "SCAM 2023",
          path: "/co-events/scam",
          sub: [],
        },
        {
          name: "IWSC 2023",
          path: "/co-events/iwsc",
          sub: [],
        },
      ],
    },

    {
      name: "Organization",
      path: "#",
      sub: [
        {
          name: "Organizing Committee",
          path: "/committees/organizing",
          sub: [],
        },
        {
          name: "Industry Track Committee",
          path: "/life_at_iict/upcomming_events",
          sub: [],
        },
        {
          name: "Research Track Committee",
          path: "/life_at_iict/achievements",
          sub: [],
        },
        {
          name: "Journal First Track Committee",
          path: "/committees/organizing",
          sub: [],
        },
        {
          name: "New Ideas and Emerging Results Track Committee",
          path: "/committees/organizing",
          sub: [],
        },
        {
          name: "Artifact Evaluation Track and ROSE Festival Committee",
          path: "/committees/organizing",
          sub: [],
        },
        {
          name: "Tool Demo Track Committee",
          path: "/committees/organizing",
          sub: [],
        },
        {
          name: "Doctoral Symposium Track Committee",
          path: "/committees/organizing",
          sub: [],
        },
        {
          name: "Registered Reports Track Committee",
          path: "/committees/organizing",
          sub: [],
        },
      ],
    },

    {
      name: "Series ",
      path: "#",
      sub: [
        {
          name: "ICSME 2024",
          path: "/ICSME",
          sub: [],
        },
      ],
    },
  ];

  return (
    <>
      <header aria-label="IICT SUST" className="shadow-md bg-white">
        <div className="mx-auto max-w-screen p-4">
          <div className="flex items-center justify-between gap-4 lg:gap-10">
            <div className="flex lg:w-0 lg:flex-1">
              <Link href="/">
                <img src="/sust.png" className="h-16 w-16" alt="IICT Logo" />
              </Link>
            </div>

            <nav
              aria-label="Site Nav"
              className="hidden gap-8 text-sm font-medium lg:flex justify-center items-center"
            >
              {routes.map((route, index) => {
                if (route.sub.length < 1) {
                  return (
                    <Link className="" href={`${route.path}`} key={index}>
                      {route.name}
                    </Link>
                  );
                } else {
                  return (
                    <Menu
                      as="div"
                      className="relative inline-block text-left "
                      key={index}
                    >
                      <div className="items-center flex">
                        <Menu.Button className="inline-flex w-fit justify-center rounded-md   text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          {route.name}
                          <svg
                            className="h-5 w-4 flex justify-center items-center text-blue-500"
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
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </Menu.Button>
                      </div>
                      <Menu.Items className="absolute -right-32 w-80 top-16 origin-top-right divide-y divide-blue-300 rounded-md bg-gray-50 shadow-lg ring-4 ring-blue-800 ring-opacity-5 focus:outline-none">
                        {route.sub.map((sub) => (
                          <Menu.Item key={sub.name}>
                            {({ active }) => (
                              <Link href={sub.path} passHref>
                                <div
                                  className={`group group-odd:bg-white justify-center flex w-full items-center rounded-sm px-2 py-3 text-sm  hover:bg-blue-800 hover:text-white text-center `}
                                >
                                  {sub.name}
                                </div>
                                <hr></hr>
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Menu>
                  );
                }
              })}
            </nav>

            <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
              <Link href="#">
                <img src="/sust.png" className="h-12 w-12" alt="SUST Logo" />
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                className="rounded-lg bg-gray-100 p-2 text-gray-600"
                type="button"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {isOpen ? (
                  <svg
                    className="h-5 w-5 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          className={`lg:hidden absolute w-full top-18 right-0 flex max-h-[35rem] md:min-h-[30rem] mb-10 pb-5 flex-col justify-between border-r bg-white   border-b-2 border-opacity-25 border-gray-700 rounded-b-2xl shadow-lg`}
        >
          <div className={`px-5  overflow-y-auto `}>
            <nav
              aria-label="Side Nav"
              className="mt-6 flex flex-col space-y-1 even:bg-slate-50"
            >
              {routes.map((route) => {
                if (route.sub.length < 1) {
                  return (
                    <>
                      <Link href={`${route.path}`} key={route.name}>
                        <div className="flex items-center gap-2 rounded-lg hover:bg-blue-100 px-4 py-2 text-gray-800">
                          <svg
                            className="h-5 w-5 text-blue-800 hover:text-white hover:bg-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {" "}
                            <circle cx="12" cy="12" r="10" />{" "}
                            <polyline points="12 16 16 12 12 8" />{" "}
                            <line x1="8" y1="12" x2="16" y2="12" />
                          </svg>

                          <span className="text-sm font-medium">
                            {route.name}
                          </span>
                        </div>
                      </Link>
                      <hr></hr>
                    </>
                  );
                } else {
                  return (
                    <>
                      <details
                        className="group [&_summary::-webkit-details-marker]:hidden"
                        key={route.name}
                      >
                        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-700">
                          <div className="flex items-center gap-2">
                            <svg
                              className="h-5 w-5 text-blue-800 hover:text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              {" "}
                              <circle cx="12" cy="12" r="10" />{" "}
                              <polyline points="12 16 16 12 12 8" />{" "}
                              <line x1="8" y1="12" x2="16" y2="12" />
                            </svg>

                            <span className="text-sm font-medium">
                              {route.name}
                            </span>
                          </div>

                          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </summary>

                        <nav
                          aria-label="Teams Nav"
                          className="mt-2 flex flex-col px-4"
                        >
                          {route.sub.map((sub, index) => {
                            return (
                              <>
                                <Link href={`${sub.path}`} key={sub.name}>
                                  <div className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 hover:bg-blue-800 hover:text-white">
                                    <svg
                                      className="h-5 w-5 text-blue-500"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      {" "}
                                      <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>

                                    <span className="text-sm font-medium">
                                      {sub.name}
                                    </span>
                                  </div>
                                </Link>
                                {route.sub.length !== index + 1 ? (
                                  <hr></hr>
                                ) : null}
                              </>
                            );
                          })}
                        </nav>
                      </details>
                      <hr></hr>
                    </>
                  );
                }
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(Nav1), { ssr: false });
