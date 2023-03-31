import React from "react";

type Props = {
  title: string;
};
export default function NotFound(props: Props) {
  return (
    <section className="w-full ">
      <div className="bg-rose-800 bg-opacity-25 max-w-xl mx-auto rounded-lg">
        <h1 className="p-5 font-bold text-center text-red-800">
          {props.title}
        </h1>
      </div>
    </section>
  );
}
