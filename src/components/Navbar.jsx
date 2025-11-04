import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="bg-white shadow-md flex justify-between p-4 sticky top-0 z-10">
      <Link to="/" className="text-2xl font-bold text-blue-600">ShopEase</Link>
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/cart" className="relative">
          🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
