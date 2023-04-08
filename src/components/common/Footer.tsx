import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-blue-800 bg-opacity-25">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center items-center text-teal-600 sm:justify-start gap-5">
            <div className="flex items-center justify-center space-x-2">
              <p className="text-gray-700 text-sm  cursor-pointer font-bold hover:underline">
                <Link href="mailto:arces@sust.edu">
                  Contact: arces@sust.edu
                </Link>
              </p>
              <svg
                className="h-5 w-5 text-blue-800 hover:text-zinc-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                onClick={() =>
                  window.navigator.clipboard.writeText("arces@sust.edu")
                }
              >
                {" "}
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />{" "}
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-gray-700 lg:mt-0 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
