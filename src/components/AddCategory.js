import { useState, useEffect } from "react";

const AddCategory = ({ setCategories, categories }) => {
  const [formValues, setFormValues] = useState({ title: "", desc: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formValues.title || !formValues.desc) return;
    setCategories([
      ...categories,
      {
        title: formValues.title,
        desc: formValues.desc,
        id: new Date().getTime(),
        createdAt: new Date().toISOString(),
      },
    ]);
    setFormValues({ title: "", desc: "" });
  };
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full flex justify-center">
      <form className="bg-cyan-300 flex flex-col w-96" onSubmit={submitHandler}>
        <label>title</label>
        <input
          type="text"
          value={formValues.title}
          onChange={changeHandler}
          name="title"
        />
        <label>description</label>
        <textarea
          value={formValues.desc}
          onChange={changeHandler}
          name="desc"
        ></textarea>
        <div>
          <button>Cancel</button>
          <button>Add New Category</button>
        </div>
      </form>
    </section>
  );
};

export default AddCategory;
