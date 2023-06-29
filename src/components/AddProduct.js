import { useState, useEffect } from "react";

const AddProduct = ({ setProducts, products, categories }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    qty: "",
    productCategory: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formValues.title || !formValues.qty || !formValues.productCategory)
      return;
    setProducts([
      ...products,
      {
        title: formValues.title,
        category: formValues.productCategory,
        quantity: formValues.qty,
        id: new Date().getTime(),
        createdAt: new Date().toISOString(),
      },
    ]);
    setFormValues({ title: "", qty: "", productCategory: "" });
  };
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  console.log(formValues);

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
            value={formValues.title}
            onChange={changeHandler}
            name="title"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
          />
        </div>
        <div>
          <label className="block mb-1 text-slate-400">quantity</label>
          <input
            type="number"
            value={formValues.qty}
            onChange={changeHandler}
            name="qty"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
          />
        </div>
        <div>
          <label className="block mb-1 text-slate-400">category</label>
          <select
            name="productCategory"
            onChange={changeHandler}
            className="bg-transparent text-slate-400 rounded-xl w-full"
          >
            <option value="" className="bg-slate-500 text-slate-300">
              select a category
            </option>
            {categories &&
              categories.map((item) => (
                <option value={item.id} className="bg-slate-500 text-slate-300">
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
