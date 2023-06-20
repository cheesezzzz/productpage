/* eslint-disable react/prop-types */
import cart from "../assets/images/icon-cart.svg";
import profile from "../assets/images/image-avatar.png";
import hamburger from "../assets/images/icon-menu.svg";
import Cart from "./Cart";
import { useState } from "react";
import MenuNav from "./MenuNav";

export default function NavBar({
  cartItems,
  cartItemDisplay,
  changeItemDisplay,
  numberOfItems,
}) {
  const [showCart, setShowCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCart = () => {
    setShowCart((prevCart) => !prevCart);
  };

  const toggleMenu = () => {
    setIsMenuOpen((toggleMenu) => !toggleMenu);
  };

  return (
    <header className="relative w-full md:max-w-6xl mx-auto px-5 flex justify-between items-center py-4 md:py-8 md:border-b">
      <nav className="flex items-center space-x-4">
        <button onClick={toggleMenu} className="block md:hidden">
          <img src={hamburger} alt="" />
        </button>
        <div className="flex space-x-10 items-center">
          <a href="#">
            <img src="./src/assets/images/logo.svg" alt="sneakers logo" />
          </a>
          <div className=" space-x-5 hidden md:flex">
            <a className="hover:font-semibold duration-100" href="">
              <span>Collections</span>
              <span></span>
            </a>
            <a className="hover:font-semibold duration-100" href="">
              <span>Men</span>
            </a>
            <a className="hover:font-semibold duration-100" href="">
              <span>Women</span>
            </a>
            <a className="hover:font-semibold duration-100" href="">
              <span>About</span>
            </a>
            <a className="hover:font-semibold duration-100" href="">
              <span>Contact</span>
            </a>
          </div>
        </div>
      </nav>
      {/* Dynamic Elements here */}
      <div className="flex items-center space-x-10">
        <button onClick={toggleCart} className="relative">
          <img width="30" src={cart} alt="" />
          <div className="absolute bg-orange -top-2 rounded-full w-6 -right-2 text-xs text-white font-bold">
            {/* cart counter here */}
            <span>{cartItems}</span>
          </div>
        </button>
        <button className="group">
          <img className="group-hover:border-2 group-hover:border-orange rounded-full duration-100" width="45" height="45" src={profile} alt="" />
        </button>
      </div>
      {isMenuOpen ? (
        <MenuNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      ) : null}
      {showCart ? (
        <Cart
          
          showCart={showCart}
          cartItem={cartItemDisplay}
          onCartChange={changeItemDisplay}
          numberOfItems={numberOfItems}
        />
      ) : null}
    </header>
  );
}
