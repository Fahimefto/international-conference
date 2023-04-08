import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  const copied = () => {
    window.navigator.clipboard.writeText("arces@sust.edu");
    const x = document.getElementById("copy");
    const divCopy = document.getElementById("div-copy");
    divCopy!.className =
      "flex items-center bg-emerald-800 rounded-md text-white text-sm p-2 hover:bg-opacity-90 cursor-pointer";

    x!.innerHTML = "Copied";
    setTimeout(() => {
      x!.innerHTML = "Copy";
      divCopy!.className =
        "flex items-center bg-blue-800 rounded-md text-white text-sm p-2 hover:bg-opacity-90 cursor-pointer";
    }, 2000);
  };

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
              <div
                className="flex items-center bg-blue-800 rounded-md text-white text-sm p-2 hover:bg-opacity-90 cursor-pointer"
                id="div-copy"
                onClick={copied}
              >
                <svg
                  className="h-4 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
                <p id="copy">Copy</p>
              </div>
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
