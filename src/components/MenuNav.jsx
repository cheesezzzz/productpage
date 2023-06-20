/* eslint-disable react/prop-types */
export default function MenuNav({isMenuOpen, setIsMenuOpen}) {


    const closeHandler = () => {
        setIsMenuOpen(prevState => !prevState)
    }
    

  return (
    <div className={`md:hidden fixed h-full z-40 w-screen bg-black bg-opacity-60 backdrop-blur-sm left-0 top-0 transition-transform duration-300 ease-linear ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className=" h-full z-50  w-80 bg-white  justify-star px-5 py-7 space-y-10">
        <button onClick={closeHandler}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <nav className="flex flex-col space-y-2 font-bold">
          <a href="">Collections</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>
      </div>
    </div>
  );
}
