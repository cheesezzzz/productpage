import NavBar from "./components/NavBar";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <>
      <NavBar />
      <main className="px-5 grid grid-cols-2 gap-x-20 justify-start max-w-5xl mx-auto my-16 place-items-center">
        <ProductImages />
        <ProductInfo />
      </main>
    </>
  );
}

export default App;
