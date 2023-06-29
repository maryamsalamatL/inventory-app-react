import "./App.css";
import AddCategory from "./components/AddCategory";
import AddProduct from "./components/AddProduct";

import { useState } from "react";
function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  return (
    <div className="App">
      <AddCategory setCategories={setCategories} categories={categories} />
      <AddProduct
        products={products}
        setProducts={setProducts}
        categories={categories}
      />
    </div>
  );
}

export default App;
