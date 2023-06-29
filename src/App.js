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
    <div className="bg-slate-800 min-h-screen">
      <div className="h-12 flex justify-center items-center gap-x-4 bg-slate-700 mb-6">
        <h1 className="md:text-xl text-sm font-bold text-slate-300">
          Inventory App
        </h1>
        <span className="rounded-full flex justify-center items-center w-7 h-7 bg-slate-500 border-2 border-slate-300 font-bold text-slate-300">
          {products.length}
        </span>
      </div>
      <div class="container max-w-screen-sm mx-auto root">
        <AddCategory setCategories={setCategories} categories={categories} />
        <AddProduct
          products={products}
          setProducts={setProducts}
          categories={categories}
        />
      </div>

      <ProductsList products={products} />
    </div>
  );
}

export default App;
