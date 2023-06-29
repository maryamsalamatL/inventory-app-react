import { useState } from "react";

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
    <section className="w-full flex justify-center">
      <form
        className="bg-slate-500  flex flex-col w-96"
        onSubmit={submitHandler}
      >
        <label>title</label>
        <input
          type="text"
          value={formValues.title}
          onChange={changeHandler}
          name="title"
        />
        <label>quantity</label>
        <input
          type="number"
          value={formValues.qty}
          onChange={changeHandler}
          name="qty"
        />
        <label>category</label>
        <select name="productCategory" onChange={changeHandler}>
          <option value="">select a category</option>
          {categories.map((item) => (
            <option value={item.id}>{item.title}</option>
          ))}
        </select>
        <div>
          <button>Cancel</button>
          <button>Add New Product</button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
