import "./App.css";
import AddCategory from "./components/AddCategory";
import AddProduct from "./components/AddProduct";
import ProductsList from "./components/ProductsList";
import NavBar from "./components/Navbar";
import Filter from "./components/Filter";
import { useState, useEffect } from "react";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = ({ target }) => {
    setSearchValue(target.value.trim().toLowerCase());
  };

  const sortHandler = ({ target: { value } }) => {
    setSort(value);
  };

  useEffect(() => {
    let result = products;
    result = sortFilter(result, sort);
    result = searchFilter(result, searchValue);
    setFilteredProducts(result);
  }, [sort, searchValue, products]);

  const sortFilter = (products) => {
    const sortedProducts = [...products];
    return sortedProducts.sort((a, b) => {
      if (sort === "latest")
        return new Date(b.createdAt) - new Date(a.createdAt);
      else return new Date(a.createdAt) - new Date(b.createdAt);
    });
  };
  const searchFilter = (products) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
  };

  useEffect(() => {
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setCategories(savedCategories);
    setProducts(savedProducts);
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
    <div className="bg-slate-800 min-h-screen pb-20">
      <NavBar products={products} />
      <div class="container max-w-screen-sm mx-auto root p-3">
        <AddCategory setCategories={setCategories} />
        <AddProduct setProducts={setProducts} categories={categories} />
        <Filter
          sort={sort}
          onSort={sortHandler}
          searchValue={searchValue}
          onSearch={searchHandler}
        />
        <ProductsList
          products={products}
          filteredProducts={filteredProducts}
          categories={categories}
          setProducts={setProducts}
        />
      </div>
    </div>
  );
}

export default App;
