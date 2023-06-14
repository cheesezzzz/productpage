import cart from "../assets/images/icon-cart.svg";
import profile from "../assets/images/image-avatar.png";
import hamburger from "../assets/images/icon-menu.svg";
import Cart from "./Cart";

export default function NavBar() {
  return (
    <header className="relative w-full md:max-w-6xl mx-auto px-5 flex justify-between items-center py-4 md:py-8 md:border-b">
      <nav className="flex items-center space-x-4">
        <button className="block md:hidden">
          <img src={hamburger} alt="" />
        </button>
        <div className="flex space-x-10 items-center">
          <a href="#">
            <img src="./src/assets/images/logo.svg" alt="sneakers logo" />
          </a>
          <div className=" space-x-5 hidden md:flex">
            <a href="">Collections</a>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
        </div>
      </nav>
      {/* Dynamic Elements here */}
      <div className="flex items-center space-x-10">
        <button className="relative">
          <img width="30" src={cart} alt="" />
          <div className="absolute bg-orange -top-2 rounded-full w-6 -right-2 text-xs text-white font-bold">
            {/* cart counter here */}
            <span>0</span>
          </div>
        </button>
        <button>
          <img width="45" height="45" src={profile} alt="" />
        </button>
      </div>
      <Cart />
    </header>
  );
}
