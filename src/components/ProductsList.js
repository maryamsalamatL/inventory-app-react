const ProductsList = ({
  products,
  categories,
  setProducts,
  filteredProducts,
}) => {
  const deleteProductHandler = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  return (
    <div className="">
      <h2 className="text-xl text-slate-400 font-bold  ">Products List</h2>
      <ul className="flex flex-col gap-y-2 overflow-x-auto py-5">
        {filteredProducts &&
          filteredProducts.map((product) => {
            const selectedCategory = categories.find(
              (c) => c.id === parseInt(product.categoryId)
            );

            return (
              <li
                key={product.id}
                className="flex items-center justify-between"
              >
                <p className="text-slate-400">{product.title}</p>
                <div className="flex items-center gap-x-3">
                  <span className="text-slate-400">
                    {new Date(product.createdAt).toLocaleDateString("en-US")}
                  </span>
                  <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
                    {selectedCategory.title}
                  </span>
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                    {product.quantity}
                  </span>

                  <button
                    onClick={() => deleteProductHandler(product.id)}
                    className="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400"
                  >
                    delete
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProductsList;
