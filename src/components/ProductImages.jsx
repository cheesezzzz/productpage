import img1 from "../assets/images/image-product-1.jpg";
// import img2 from "../assets/images/image-product-2.jpg";
// import img3 from "../assets/images/image-product-3.jpg";
// import img4 from "../assets/images/image-product-4.jpg";
import imgthumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import imgthumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import imgthumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import imgthumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

export default function ProductImages() {
  return (
    <div className="space-y-8">
      {/* slider here */}
      <div className="">
        <img className="w-full rounded-2xl" src={img1} alt="" />
      </div>
      <div className="flex justify-between">
        <img className="w-24 rounded-lg" src={imgthumbnail1} alt="" />
        <img className="w-24 rounded-lg" src={imgthumbnail2} alt="" />
        <img className="w-24 rounded-lg" src={imgthumbnail3} alt="" />
        <img className="w-24 rounded-lg" src={imgthumbnail4} alt="" />
      </div>
    </div>
  );
}
