import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import BottomCart from "../components/BottomCart";
import { useState } from "react";
// import BottomNavbar from "../components/BottonNavbar";

const Home = () => {

  const [search,setSearch]=useState("");
  return (
    <>
      <Navbar   search={search}
        setSearch={setSearch}
        />
      <Hero />
      <Features  
      search={search} 
       />
      <Testimonials />
      <CTA />
      <Footer />
      <BottomCart></BottomCart>
      {/* <BottomNavbar></BottomNavbar> */}
    </>
  );
};

export default Home;