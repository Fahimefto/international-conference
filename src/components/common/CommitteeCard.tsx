import { Card } from "flowbite-react";
import Link from "next/link";
import { type } from "os";
import React from "react";
import { HiInformationCircle } from "react-icons/hi";
type Props = {
  name: string;
  designation: string;
  img?: string;
  role: string;
};
export default function CommitteeCard(props: Props) {
  return (
    <div className="w-full bg-white border border-blue-800 rounded-lg shadow dark:bg-white dark:border-blue-800 hover:bg-blue-800 hover:bg-opacity-5">
      <div className="flex flex-col items-center pt-4 pb-4 bg-blue-800 bg-opacity-5">
        <img
          className={`${
            props.img
              ? "w-24 h-24 mb-3 rounded-full  border-[2px] border-blue-800"
              : "w-24 h-24 mb-3 rounded-full "
          }`}
          src={`${props.img}`}
          alt={`${props.name} image`}
        />
        <h5 className="mb-1  text-center font-bold text-gray-900 dark:text-gray-800 mx-2">
          {props.name}
        </h5>
        <span className="text-sm text-center text-gray-600 dark:text-gray-600">
          {props.designation}
        </span>
        <h5 className="mb-1 font-bold text-blue-900 dark:text-blue-900">
          {props.role}
        </h5>
      </div>
    </div>
  );
}
