import React from "react";

type Props = {
  title: string;
};

export default function HeadingBar(props: Props) {
  return (
    <>
      <h1 className="text-xl font-bold text-gray-900 text-center mt-10 mb-2">
        {props.title}
      </h1>
      <hr className="border-2 w-4/6 m-auto  border-blue-900"></hr>
    </>
  );
}
