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
  const [sortDate, setSortDate] = useState("latest");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const searchHandler = ({ target }) => {
    setSearchValue(target.value.trim().toLowerCase());
  };

  const sortDateHandler = ({ target: { value } }) => {
    setSortDate(value);
  };
  const selectCategoryHandler = ({ target: { value } }) => {
    setSelectedCategory(value);
  };

  useEffect(() => {
    let result = products;
    result = dateFilter(result);
    result = searchFilter(result);
    result = categoryFilter(result);
    setFilteredProducts(result);
  }, [sortDate, searchValue, products, selectedCategory]);

  const dateFilter = (products) => {
    const sortedProducts = [...products];
    return sortedProducts.sort((a, b) => {
      if (sortDate === "latest")
        return new Date(b.createdAt) - new Date(a.createdAt);
      else return new Date(a.createdAt) - new Date(b.createdAt);
    });
  };
  const searchFilter = (products) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
  };
  const categoryFilter = (products) => {
    if (selectedCategory === "all") return products;
    return products.filter(
      (product) => product.categoryId === selectedCategory
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
          sort={sortDate}
          onSort={sortDateHandler}
          searchValue={searchValue}
          onSearch={searchHandler}
          categories={categories}
          onSelectCategory={selectCategoryHandler}
          selectedCategory={selectedCategory}
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
