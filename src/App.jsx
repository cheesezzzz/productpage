import NavBar from "./components/NavBar";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <>
      <NavBar />
      <main className="md:px-5 grid md:grid-cols-2 gap-x-20 justify-start max-w-5xl mx-auto mb-16 md:my-16 place-items-center">
        <ProductImages />
        <ProductInfo />
      </main>
    </>
  );
}

export default App;
