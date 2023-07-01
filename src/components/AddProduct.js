import { useState, useEffect } from "react";

const AddProduct = ({ setProducts, categories }) => {
  const [formData, setFormData] = useState({
    title: "",
    quantity: "",
    categoryId: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.quantity || !formData.categoryId) return;
    const newProduct = {
      ...formData,
      id: new Date().getTime(),
      createdAt: new Date().toISOString(),
    };
    setProducts((prevState) => [...prevState, newProduct]);
    setFormData({ title: "", quantity: "", categoryId: "" });
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New product</h2>
      <form
        className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
        onSubmit={submitHandler}
      >
        <div>
          <label className="block mb-1 text-slate-400">title</label>
          <input
            type="text"
            value={formData.title}
            onChange={changeHandler}
            name="title"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
          />
        </div>
        <div>
          <label className="block mb-1 text-slate-400">quantity</label>
          <input
            type="number"
            value={formData.quantity}
            onChange={changeHandler}
            name="quantity"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
          />
        </div>
        <div>
          <label className="block mb-1 text-slate-400">category</label>
          <select
            name="categoryId"
            onChange={changeHandler}
            className="bg-transparent text-slate-400 rounded-xl w-full"
            value={formData.categoryId}
          >
            <option value="" className="bg-slate-500 text-slate-300">
              select a category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  value={item.id}
                  className="bg-slate-500 text-slate-300"
                  key={item.id}
                >
                  {item.title}
                </option>
              ))}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2 addProductBtn">
            Add New Product
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
