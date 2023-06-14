import img1 from "../assets/images/image-product-1.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img4 from "../assets/images/image-product-4.jpg";
import imgthumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import imgthumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import imgthumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import imgthumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

export default function ProductImages() {
  return (
    <div className="space-y-4 ">
      {/* slider here */}
      <div className="relative">
        <button className="md:hidden absolute flex justify-center items-center -translate-y-1/2 top-1/2 left-4 bg-white w-10 h-10 rounded-full">
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
        <button className="md:hidden absolute flex justify-center items-center -translate-y-1/2 top-1/2 right-4 bg-white w-10 h-10 rounded-full">
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
          <img className=" w-full md:rounded-2xl" src={img1} alt="" />
          <img className="md:hidden w-full md:rounded-2xl" src={img2} alt="" />
          <img className="md:hidden w-full md:rounded-2xl" src={img3} alt="" />
          <img className="md:hidden w-full md:rounded-2xl" src={img4} alt="" />
        </div>
      </div>
      <div className="hidden md:grid-cols-4 place-items-center md:grid gap-x-4 ">
        <img className="w-24 rounded-lg" src={imgthumbnail1} alt="" />
        <img className="w-24 rounded-lg" src={imgthumbnail2} alt="" />
        <img className="w-24 rounded-lg" src={imgthumbnail3} alt="" />
        <img className="w-24 rounded-lg" src={imgthumbnail4} alt="" />
      </div>
    </div>
  );
}
