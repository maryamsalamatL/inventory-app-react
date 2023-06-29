const ProductsList = ({ products }) => {
  return (
    <div className="bg-fuchsia-300">
      <ul className="">
        {products &&
          products.map((product) => (
            <li key={product.id} className="flex justify-between">
              <p>{product.title}</p>
              <div>
                <p>{new Date(product.createdAt).toLocaleDateString("fa-IR")}</p>
                <span>{product.category}</span>
                <button>edit</button>
                <button>delete</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductsList;
