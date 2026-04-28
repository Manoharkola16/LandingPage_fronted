import '../../public/chicken.webp'
import '../../public/fish.webp'
import '../../public/mutton.avif'

const Features = () => {
  return (
    <section className="py-16 px-6 grid md:grid-cols-3 gap-8 text-center">
      <div className="p-6 shadow-md rounded-xl">
         <img
          src="../../public/fish.webp"
          alt="Fish"
          className="w-60 flex justify-center items-center  h-40 object-cover rounded-lg mb-4"
        /> 
        <h2 className="text-xl font-semibold">Fish Curry</h2>
        
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, sit itaque. Quisquam laborum maiores delectus!</h3>
      </div>
      <div className="p-6 shadow-md rounded-xl">
        <img
          src="../../public/mutton.avif"
          alt="Mutton"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold">Mutton Curry</h2>
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, atque! Officia corporis distinctio natus debitis!</h3>
      </div>
      <div className="p-6 shadow-md rounded-xl">
        <img
          src="../../public/chicken.webp"
          alt="Chicken"
          className="w-60 flex justify-end items-center  h-40   rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold img-">Chicken Curry</h2>
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit perspiciatis possimus, nulla neque impedit illum!</h3>
      </div>
    </section>
  );
};

export default Features;
