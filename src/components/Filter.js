const Filter = ({
  sort,
  onSort,
  searchValue,
  onSearch,
  categories,
  onSelectCategory,
  selectedCategory,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search-input" className="text-slate-500 text-lg">
          search
        </label>
        <input
          type="text"
          id="search-input"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
          value={searchValue}
          onChange={onSearch}
        />
      </div>
      <div className="flex items-center justify-between mb-3">
        <label htmlFor="sort-products" className="text-lg text-slate-500">
          sort
        </label>
        <select
          className="bg-transparent text-slate-400 rounded-xl"
          id="sort-products"
          onChange={onSort}
          value={sort}
        >
          <option value="latest" className="bg-slate-500 text-slate-300">
            latest
          </option>
          <option value="earliest" className="bg-slate-500 text-slate-300">
            earliest
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-3">
        <label htmlFor="sort-Category" className="text-lg text-slate-500">
          Category
        </label>
        <select
          className="bg-transparent text-slate-400 rounded-xl"
          id="sort-Category"
          onChange={onSelectCategory}
          value={selectedCategory}
        >
          <option value="all" className="bg-slate-500 text-slate-300">
            All
          </option>
          {categories.map((item) => (
            <option value={item.id} className="bg-slate-500 text-slate-300">
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
