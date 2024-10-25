import { useEffect, useState } from 'react'
import AOS from "aos"
import "aos/dist/aos.css";
import Navbar from './Component/Navbar';
import Hero from './Component/Hero'
import Footer from './Component/Footer';
import Banner from './Component/Banner';
import AppStore from './Component/AppStore';
import Testimonials from './Component/Testimonials';
import Services from './Component/Services';

const App = () => {
  useEffect (() =>  {
   AOS.init ( {
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  
   return (
    <div className="bg-white dark:text-white duration-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
