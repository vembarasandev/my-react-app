import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="border p-3 rounded-md shadow hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
        <h3 className="font-semibold mt-2 line-clamp-2">{product.title}</h3>
        <p className="text-blue-600 font-bold">${product.price}</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-blue-500 text-white rounded py-1 hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
