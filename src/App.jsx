import { useState } from "react";
import NavBar from "./components/NavBar";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import img1 from "./assets/images/image-product-1.jpg";
import img2 from "./assets/images/image-product-2.jpg";
import img3 from "./assets/images/image-product-3.jpg";
import img4 from "./assets/images/image-product-4.jpg";

function App() {

  const images = [
    img1,
    img2,
    img3,
    img4
  ]

  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cartCounter, setCartCounter] = useState(0)
  const [cartItem, setCartItem] = useState([])

  function handleIncrement() {
    setNumberOfItems((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    if (numberOfItems > 0) {
      setNumberOfItems((prevCount) => prevCount - 1);
    }
  }

  // DYNAMICALLY DISPLAY THE ITEM IN THE CART POPUP
  function handleAddToCart() {
    const newItem = {
      title: "Fall Limited Edition Sneakers",
      price: 125.00,
      quantity: numberOfItems,
    };

    const existingItemIndex = cartItem.findIndex(item => item.title === newItem.title);

    if(existingItemIndex !== -1) {
      const updatedItems = [...cartItem]
      updatedItems[existingItemIndex].quantity += newItem.quantity;
      setCartItem(updatedItems);

    } else {
      setCartItem((prevItem) => {
      return [...prevItem, newItem]
    })
  }
    setCartCounter(prevCount => prevCount + numberOfItems)
  }



  return (
    <>
      <NavBar cartItems={cartCounter} cartItemDisplay={cartItem} changeItemDisplay={setCartItem} numberOfItems={setCartCounter} />
      <main className="md:px-5 grid md:grid-cols-2 gap-x-20 justify-start max-w-5xl mx-auto mb-16 md:my-16 place-items-center">
        <ProductImages images={images} />
        <ProductInfo
          title="Fall Limited Edition Sneakers"
          description="These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&apos;ll withstand
          everything the weather can offer"
          price="125.00"
          discount="50"
          onAddToCart = {handleAddToCart}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          items={numberOfItems}
        />
      </main>
    </>
  );
}

export default App;
