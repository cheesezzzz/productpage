import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import cart from "../assets/images/icon-cart.svg";


export default function ProductInfo() {
  return (
    <div className="space-y-8">
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
        <div className=" bg-light-gray-blue flex justify-between items-center space-x-2 w-28 py-2 rounded px-2">
          <button className="">
            <object data={minus} type="image/svg+xml"></object>
          </button>
          <span className="font-bold">{/* counter here */}0</span>
          <button className="">
            <object data={plus} type="image/svg+xml"></object>
          </button>
        </div>
        <button className="flex space-x-2 bg-orange px-4 text-white py-3">
            <object data={cart} type="image/svg+xml"></object>
            <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}
