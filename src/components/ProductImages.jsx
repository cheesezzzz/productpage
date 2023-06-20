/* eslint-disable react/prop-types */
import imgthumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import imgthumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import imgthumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import imgthumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import { useState } from "react";


export default function ProductImages({images}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const nextSlide = () => {
    let newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)

  }

  const prevSlide = () => {
    let newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
  }

  const imageClickHandler = (index) => {
    setCurrentIndex(index)
  }


  return (
    <div className="space-y-4 ">
      {/* slider here */}
      <div className="relative">
        <button onClick={prevSlide} className="md:hidden absolute flex justify-center items-center -translate-y-1/2 top-1/2 left-4 bg-white w-10 h-10 rounded-full">
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <button onClick={nextSlide} className="md:hidden absolute flex justify-center items-center -translate-y-1/2 top-1/2 right-4 bg-white w-10 h-10 rounded-full">
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex overflow-hidden">
          <img className="w-full md:rounded-2xl" src={images[currentIndex]} alt="" />
        </div>
      </div>
      <div className="hidden md:grid-cols-4 place-items-center md:grid gap-x-4 ">
        <img onClick={() => imageClickHandler(0)} className={`w-24 hover:brightness-75 duration-150 ease-linear rounded-lg cursor-pointer ${currentIndex === 0 ? 'border-4 border-orange' : ''} `} src={imgthumbnail1} alt="" />
        <img onClick={() => imageClickHandler(1)} className={`w-24 hover:brightness-75 duration-150 ease-linear rounded-lg cursor-pointer ${currentIndex === 1 ? 'border-4 border-orange' : ''} `} src={imgthumbnail2} alt="" />
        <img onClick={() => imageClickHandler(2)} className={`w-24 hover:brightness-75 duration-150 ease-linear rounded-lg cursor-pointer ${currentIndex === 2 ? 'border-4 border-orange' : ''} `} src={imgthumbnail3} alt="" />
        <img onClick={() => imageClickHandler(3)} className={`w-24 hover:brightness-75 duration-150 ease-linear rounded-lg cursor-pointer ${currentIndex === 3 ? 'border-4 border-orange' : ''} `} src={imgthumbnail4} alt="" />
      </div>
    </div>
  );
}
