const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">MyKitchen</h1>
      <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Explore
      </button>
    </nav>
  );
};

export default Navbar;
