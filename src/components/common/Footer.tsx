import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-blue-800 bg-opacity-25">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center items-center text-teal-600 sm:justify-start gap-5">
            <img src="/sust.png" className="w-14"></img>
            <img src="/iict.png" className="w-20 h-10"></img>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
