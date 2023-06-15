import { useState } from "react";
import NavBar from "./components/NavBar";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";

function App() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cart, setCart] = useState(0)

  function handleIncrement() {
    setNumberOfItems((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    if (numberOfItems > 0) {
      setNumberOfItems((prevCount) => prevCount - 1);
    }
  }

  function handleAddToCart() {
    setCart(numberOfItems)
  }

  return (
    <>
      <NavBar cartItems={cart} />
      <main className="md:px-5 grid md:grid-cols-2 gap-x-20 justify-start max-w-5xl mx-auto mb-16 md:my-16 place-items-center">
        <ProductImages />
        <ProductInfo
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
