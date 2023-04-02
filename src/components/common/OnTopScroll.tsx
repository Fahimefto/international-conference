import React from "react";
import { useState, useEffect } from "react";
export default function OntopScroll() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {showButton ? (
        <div
          className="fixed bottom-5 right-7 z-50 p-2 ring animate-pulse hover:animate-none cursor-pointer  bg-blue-800 rounded-full text-white"
          onClick={handleScrollToTop}
        >
          <svg
            className="h-6 w-6 text-white"
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
            <polyline points="7 11 12 6 17 11" />{" "}
            <polyline points="7 17 12 12 17 17" />
          </svg>
        </div>
      ) : null}
    </>
  );
}
