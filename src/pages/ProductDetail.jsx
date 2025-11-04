import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <img src={product.image} alt={product.title} className="h-80 object-contain mx-auto" />
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-xl font-semibold text-blue-600 my-3">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
