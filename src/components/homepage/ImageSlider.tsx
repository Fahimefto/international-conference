import Image from "next/image";
import React, { useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function ImageSlider() {
  const slides = [
    {
      url: "/image/2222.jpg",
    },
    {
      url: "/image/1.jpg",
    },

    {
      url: "/image/4.jpg",
    },
    {
      url: "/image/5.jpg",
    },
    {
      url: "/image/6.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-full lg:h-[25rem] h-[17rem] w-screen m-auto  relative group">
      {/* <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full object-bottom bg-center bg-cover duration-500"
      ></div> */}
      <Image
        fill
        style={{ objectFit: "cover" }}
        src={slides[currentIndex].url}
        alt={"loading"}
      />
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}
