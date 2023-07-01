import { useState, useEffect } from "react";

const AddCategory = ({ setCategories }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [isShow, setIsShow] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.desc) return;
    const newCategory = {
      ...formData,
      id: new Date().getTime(),
      createdAt: new Date().toISOString(),
    };
    setCategories((prevState) => [...prevState, newCategory]);
    setFormData({ title: "", desc: "" });
    setIsShow(false);
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="">
      <div className={`mb-6 ${!isShow && "hidden"}`}>
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
              value={formData.title}
              onChange={changeHandler}
              name="title"
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-400">description</label>
            <textarea
              value={formData.desc}
              onChange={changeHandler}
              name="desc"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
            ></textarea>
          </div>

          <div className="flex items-center justify-between gap-x-4">
            <button
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
              onClick={() => setIsShow(false)}
            >
              Cancel
            </button>
            <button className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2 addCategoryBtn">
              Add New Category
            </button>
          </div>
        </form>
      </div>
      <button
        className={`text-slate-600 text-lg mb-4 font-medium ${
          isShow && "hidden"
        }`}
        onClick={() => setIsShow((prevState) => !prevState)}
        type="submit"
      >
        Add new category?
      </button>
    </section>
  );
};

export default AddCategory;
