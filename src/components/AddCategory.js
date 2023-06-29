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
    <section className="">
      <div className="mb-6">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New Category
        </h2>
        <form
          className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
          onSubmit={submitHandler}
        >
          <div>
            <label className="block mb-1 text-slate-400">title</label>
            <input
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
              type="text"
              value={formValues.title}
              onChange={changeHandler}
              name="title"
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-400">description</label>
            <textarea
              value={formValues.desc}
              onChange={changeHandler}
              name="desc"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
            ></textarea>
          </div>

          <div className="flex items-center justify-between gap-x-4">
            <button className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2">
              Cancel
            </button>
            <button className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2 addCategoryBtn">
              Add New Category
            </button>
          </div>
        </form>
      </div>
      <button class="text-slate-600 text-lg mb-4 font-medium">
        Add new category?
      </button>
    </section>
  );
};

export default AddCategory;
