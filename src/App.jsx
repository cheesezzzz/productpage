import NavBar from "./components/NavBar";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <>
      <NavBar />
      <main className="flex justify-start max-w-5xl mx-auto mt-20">
        <ProductImages />
        <ProductInfo />
      </main>
    </>
  );
}

export default App;
