import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';

const Categories = ({ foods }) => {
  const [selected, setSelected] = useState("All");
  const Navigate=useNavigate();
  const categoryList = ["All", "Veg", "Non-Veg", "Drinks", "Desserts", "Milkshakes", "Sandwitches", "Burger"];

  const filteredFoods =
    selected === "All"
      ? foods
      : foods.filter((item) => item.category === selected);

  return (
    <div className="flex h-screen">

      {/* LEFT SIDE */}
      <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
        {categoryList.map((cat) => (
          <div
            key={cat}
            onClick={() => setSelected(cat)}
            className={`p-3 mb-2 rounded cursor-pointer ${
              selected === cat ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {cat}
          </div>
        ))}

        <div className="p-4">
      <button
        onClick={() => Navigate("/Home")}
        className="bg-gray-900 text-white px-4 py-2 rounded"
      >
        ← Back
      </button>
    </div>
    
      </div>

      

      {/* RIGHT SIDE */}
      <div className="w-3/4 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">{selected} Items</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {filteredFoods.map((item, index) => (
            <div key={index} className="shadow p-3 rounded text-center">

              <img
                src={item.img}
                alt={item.name}
                className="h-40 w-40 object-cover rounded relative left-20"
              />

              <h3 className="mt-2 font-semibold">{item.name}</h3>
              <p className="text-green-600">₹ {item.price}</p>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Categories;

