import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";
import Testi from "./components/Testi/Testi";
import Footer from "./components/Footer/Footer";
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, [])

  return (
    <div className="bg-white dark:bg-gray-800">
    <Navbar />
    <Hero />
    <Service />
    <Banner />
    <AppStore />
    <Testi />
    <Footer />
    </div>
  )
} 

export default App;