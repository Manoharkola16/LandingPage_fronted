import { useState } from "react";
import { useCart } from "./CartContext";

const Features = () => {

  // ✅ Food Data
  const foods = [
    { name: "Fish Curry", price: 500, img: "/fish.webp" },
    { name: "Mutton Curry", price: 700, img: "/mutton.avif" },
    { name: "Chicken Curry", price: 400, img: "/chicken.webp" },
    { name: "Chicken Fry", price: 350, img: "/chicken.webp" },
    { name: "Spicy Chicken", price: 450, img: "/chicken.webp" },
    { name: "Grilled Chicken", price: 600, img: "/chicken.webp" },
    { name: "Fish Curry", price: 500, img: "/fish.webp" },
    { name: "Mutton Curry", price: 700, img: "/mutton.avif" },
    { name: "Chicken Curry", price: 400, img: "/chicken.webp" },
  ];

  // ✅ useState for counts
  const [counts, setCounts] = useState(Array(foods.length).fill(0));

  // ✅ Cart functions
  const { addToCart, removeFromCart } = useCart();

  // ✅ Increase count
  const increase = (index, item) => {
    const updated = [...counts];
    updated[index] += 1;
    setCounts(updated);

    addToCart(item); // also update cart
  };

  // ✅ Decrease count
  const decrease = (index, item) => {
    const updated = [...counts];

    if (updated[index] > 0) {
      updated[index] -= 1;
      setCounts(updated);

      removeFromCart(item); // also update cart
    }
  };

  return (
    <section className="py-16 px-6 grid md:grid-cols-3 gap-8 text-center">

      {foods.map((item, index) => (
        <div key={index} className="p-6 shadow-md rounded-xl">

          {/* Image */}
          <img
            src={item.img}
            alt={item.name}
            className="w-60 h-40 object-cover rounded-lg mb-4 mx-auto transform transition duration-300 hover:scale-110"
          />

          {/* Title */}
          <h2 className="text-xl font-semibold">{item.name}</h2>

          {/* Description */}
          <p className="text-sm">
            Delicious and freshly prepared dish just for you.
          </p>

          {/* Price + Counter */}
          <div className="flex justify-between items-center mt-4">

            {/* Price */}
            <span className="text-lg font-bold text-green-600">
              ₹ {item.price}
            </span>

            {/* Counter */}
            <div className="flex items-center gap-3">

              <button
                onClick={() => decrease(index, item)}
                className="px-2 py-1 text-black rounded"
              >
                -
              </button>

              <span className="font-semibold">
                {counts[index]}
              </span>

              <button
                onClick={() => increase(index, item)}
                className="px-2 py-1  text-black rounded"
              >
                +
              </button>

            </div>
          </div>

        </div>
      ))}

    </section>
  );
};

export default Features;