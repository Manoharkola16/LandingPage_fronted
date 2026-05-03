import { useCart } from "./CartContext";
import { useState } from "react";

const Navbar = () => {
  const { cart, totalAmount, totalItems } = useCart();
  const [open, setOpen] = useState(false);
  const [explore,setExplore]= useState(false);

  return (
    <nav className="px-6 py-4 bg-gray-900 text-white flex justify-between items-center">

      <div className="flex flex-row gap-150">
              <h1 className="text-xl font-bold">MyKitchen</h1>

       <div className="cursor-pointer hover:text-yellow-400 flex items-end">Home</div>

      </div>

<div className="relative flex flex-row  items-between gap-20 ">

      <div className="relative flex-row flex">
           
         {/* <div className="cursor-pointer hover:text-yellow-400">About</div> */}

        {/* Cart Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer relative flex items-end"
        >
          🛒

          {/* Badge */}
          <span className="absolute -top-1 -right-2 bg-red-500 text-xs px-1 rounded-full">
            {totalItems}
          </span>
        </div>

        {/* Dropdown Cart */}
        {open && (
          <div className="absolute top-10 -right-2 drop-shadow-neutral-500 right-1 mt-3 w-64 bg-white text-black rounded-lg shadow-lg p-4">

            {cart.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              <>
                {cart.map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span>{item.name} x {item.qty}</span>
                    <span>₹ {item.price * item.qty}</span>
                  </div>
                ))}

                <hr className="my-2" />

                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>₹ {totalAmount}</span>
                </div>
              </>
            )}
          </div>
        )}

      </div>

      {/* Show total beside cart */}
      <div className="ml-4 font-bold text-green-400 flex items-center justify-items-start">
        ₹ {totalAmount}
      </div>


        <button
          onClick={() => setExplore(!explore)}
          className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Explore
        </button>

        {/* Dropdown Card */}
        {explore && (
          <div className="absolute top-10 right-0 mt-3 w-70 bg-white text-black rounded-lg shadow-lg p-4 z-50">
            <ul className="space-y-2">
              <li className="hover:text-blue-500 cursor-pointer">🍗 Chicken Curry-250 ₹</li>
              <li className="hover:text-blue-500 cursor-pointer">🐟 Fish Curry-250 ₹</li>
              <li className="hover:text-blue-500 cursor-pointer">🥩 Mutton Curry-250 ₹</li>
              <li className="hover:text-blue-500 cursor-pointer">🔥 Grilled Chicken-250 ₹</li>
              <li className="hover:text-blue-500 cursor-pointer">🍗 Chicken Curry-250 ₹</li>
              <li className="hover:text-blue-500 cursor-pointer">🐟 Fish Curry-250 ₹</li>
              <li className="hover:text-blue-500 cursor-pointer">🥩 Mutton Curry-250 ₹</li>
              <li className="hover:text-blue-500 cursor-pointer">🔥 Grilled Chicken-250 ₹</li>

            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;




