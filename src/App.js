import "./App.css";
import AddCategory from "./components/AddCategory";
import AddProduct from "./components/AddProduct";
import ProductsList from "./components/ProductsList";
import { useState, useEffect } from "react";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storageCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    const storageProducts = JSON.parse(localStorage.getItem("products")) || [];

    setCategories(storageCategories);
    setProducts(storageProducts);
  }, []);

  useEffect(() => {
    categories.length &&
      localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    products.length &&
      localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div className="App">
      <div className="w-full h-12 bg-cyan-200 flex justify-center items-center">
        <h1>Inventory App</h1>
        <span className="rounded-full flex justify-center w-6 h-6 bg-cyan-950 border-stone-700 caret-yellow-500">
          {products.length}
        </span>
      </div>
      <AddCategory setCategories={setCategories} categories={categories} />
      <AddProduct
        products={products}
        setProducts={setProducts}
        categories={categories}
      />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
