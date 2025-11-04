import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useCart();
  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0).toFixed(2);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div>
          {cart.map((p) => (
            <div key={p.id} className="flex items-center gap-4 border-b py-3">
              <img src={p.image} className="h-16 w-16 object-contain" />
              <div className="flex-1">
                <p>{p.title}</p>
                <p className="text-blue-600 font-bold">${p.price}</p>
              </div>
              <input
                type="number"
                min="1"
                value={p.qty}
                onChange={(e) => updateQty(p.id, +e.target.value)}
                className="border w-16 text-center"
              />
              <button
                onClick={() => removeFromCart(p.id)}
                className="text-red-500 font-bold"
              >
                ✖
              </button>
            </div>
          ))}
          <div className="text-right mt-4 font-semibold text-lg">
            Total: ${total}
          </div>
        </div>
      )}
    </div>
  );
}
