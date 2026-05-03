import { useCart } from "./CartContext";
import { useState } from "react";

const Navbar = () => {
  const { cart, totalAmount, totalItems } = useCart();
  const [open, setOpen] = useState(false);
  const [explore, setExplore] = useState(false);

  return (
    <nav className="px-4 sm:px-6 py-4 bg-gray-900 text-white flex flex-wrap justify-between items-center">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg sm:text-xl font-bold">MyKitchen</h1>
        <div className="cursor-pointer hover:text-yellow-400 text-sm sm:text-base">
          Home
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 sm:gap-6 mt-3 sm:mt-0 relative">

        {/* CART */}
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer relative"
          >
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
              {totalItems}
            </span>
          </div>

          {/* DROPDOWN */}
          {open && (
            <div className="absolute right-0 mt-3 w-60 bg-white text-black rounded-lg shadow-lg p-4 z-50">
              {cart.length === 0 ? (
                <p>Cart is empty</p>
              ) : (
                <>
                  {cart.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm mb-1">
                      <span>{item.name} x {item.qty}</span>
                      <span>₹{item.price * item.qty}</span>
                    </div>
                  ))}

                  <hr className="my-2" />

                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>₹{totalAmount}</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* TOTAL */}
        <div className="font-bold text-green-400 text-sm sm:text-base">
          ₹ {totalAmount}
        </div>

        {/* EXPLORE BUTTON */}
        <button
          onClick={() => setExplore(!explore)}
          className="bg-blue-500 px-3 py-2 rounded-lg hover:bg-blue-600 text-sm sm:text-base"
        >
          Explore
        </button>

        {/* EXPLORE DROPDOWN */}
        {explore && (
          <div className="absolute right-0 top-14 w-60 bg-white text-black rounded-lg shadow-lg p-4 z-50">
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-500 cursor-pointer">🍗 Chicken Curry - ₹250</li>
              <li className="hover:text-blue-500 cursor-pointer">🐟 Fish Curry - ₹250</li>
              <li className="hover:text-blue-500 cursor-pointer">🥩 Mutton Curry - ₹250</li>
              <li className="hover:text-blue-500 cursor-pointer">🔥 Grilled Chicken - ₹250</li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;