import img1 from "../assets/images/image-product-1.jpg";
import { motion } from "framer-motion";

export default function Cart() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="absolute z-50 left-1/2 -translate-x-1/2 bg-white shadow-2xl w-[95vw] md:w-80 md:right-2 md:left-auto -bottom-60 md:-translate-x-0 rounded-md"
    >
      <p className="p-4 border-b  border-b-light-gray-blue font-bold">Cart</p>
      <div className="p-5 space-y-4">
        <div className="flex space-x-4 w-full justify-between">
          <div className="flex items-center space-x-2">
            <img className="w-16 aspect-square" src={img1} alt="" />
            <div>
              {/* DO NOT HARD CODE THIS */}
              <div>
                <span>Fall Limited Edition Sneakers</span>
              </div>
              <div>
                <span>$125.00 x 3</span>
                <span>$375.00</span>
              </div>
            </div>
          </div>
          <button>
            <svg
              className=" pointer-events-none"
              width="14"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                  id="a"
                />
              </defs>
              <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
            </svg>
          </button>
        </div>
        <button className="flex space-x-2 items-center bg-orange w-full justify-center rounded-md px-4 text-white py-3">
          Checkout
        </button>
      </div>
    </motion.div>
  );
}
