import { MdAlternateEmail } from "react-icons/md";
import restaurant from '../assets/restaurant.jpg'

const Hero = () => {
  return (
    <div className='flex items-center justify-center backdrop-blur-md'>
      <section className="text-center flex-col flex items-center justify-center  py-20 bg-gray-100  bg-cover bg-center w-full h-screen "
      style={{
          backgroundImage: `url(${restaurant})`,
        }}
      
      >
       
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Taste Our Delicious Dishes
      </h1>
              <h1 className="text-white mb-6 font-medium">
        We make [ Food ] magic.
      </h1>
        <button className="bg-amber-200 text-black px-6 py-3 rounded-lg hover:bg-blue-600 transition">
        Menu
      </button>
      
      
    </section>
    </div>
  );
};

export default Hero;