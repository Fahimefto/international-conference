import { Carousel } from "flowbite-react";
import React from "react";

export default function Banner() {
  return (
    <div className="h-56 sm:h-64 xl:h-[20rem] 2xl:h-[30rem]">
      <Carousel>
        <img
          src="https://www.sust.edu/uploads/gallery/p-main-1469926802.jpg"
          alt="..."
        />
        <img
          src="https://www.sust.edu/uploads/gallery/p-main-1501693144.jpg"
          alt="..."
        />
        <img
          src="https://www.sust.edu/uploads/gallery/p-main-1469926987.jpg"
          alt="..."
        />
        <img
          src="https://www.sust.edu/uploads/gallery/p-main-1469926932.jpg"
          alt="..."
        />
        <img src="https://www.sust.edu/uploads/gallery/p-main-1469926923.jpg" />
      </Carousel>
    </div>
  );
}
