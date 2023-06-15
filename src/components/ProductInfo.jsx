/* eslint-disable react/prop-types */
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";

export default function ProductInfo({onIncrement, onDecrement, items, onAddToCart}) {

  return (
    <div className="space-y-8 px-5 mt-10 md:mt-0">
      <div>
        <span className="uppercase text-orange font-semibold text-sm">
          sneaker company
        </span>
        <h1 className="text-4xl font-bold">Fall Limited Edition Sneakers</h1>
        <p className="mt-8 text-dark-gray-blue">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&apos;ll withstand
          everything the weather can offer
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-black text-2xl font-bold">$125.00</span>
          <span className=" bg-pale-orange text-orange px-2 rounded-md font-bold">
            50%
          </span>
        </div>
        <span className=" text-gray-blue font-semibold line-through">
          $250.00
        </span>
      </div>
      <div className="flex space-x-4">
        <div className=" bg-light-gray-blue flex justify-between items-center space-x-2 w-56 py-2 rounded px-2">
          <button onClick={onDecrement} className=" w-10 h-10 justify-center flex items-center">
            <object className=" pointer-events-none"  data={minus} type="image/svg+xml"></object>
          </button>
          <span className="font-bold">{items}</span>
          <button onClick={onIncrement} className=" w-10 h-10 justify-center flex items-center">
            <object
              className=" pointer-events-none"
              data={plus}
              type="image/svg+xml"
            ></object>
          </button>
        </div>
        {/* TODO: change colors finish up spacing */}
        <button onClick={onAddToCart} className="flex space-x-2 items-center bg-orange w-full justify-center rounded-md px-4 text-white py-3 hover:shadow-orange hover:shadow-2xl duration-100">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#fff"
              fillRule="nonzero"
            />
          </svg>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}
