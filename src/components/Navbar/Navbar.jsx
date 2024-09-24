import React, { useState } from 'react';
import Logo from "../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa"; 
import DarkMode from "../../components/Navbar/DarkMode";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 px-4">
        <div className="container py-3 sm:py-0">
          <div className="flex items-center justify-between">
            <div>
              <a href="#" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
                <img src={Logo} alt="foodies" className='w-10'></img>
                <h1>Foodie</h1>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <DarkMode />
              </div>
              {/* Menyembunyikan ketika dibawah ukuran sm */}
              <ul className="hidden sm:flex gap-4">
                <li>
                  <a href="#" className="inline-block p-4 hover:text-primary">Home</a>
                </li>
                <li>
                  <a href="#" className="inline-block p-4 hover:text-primary">About</a>
                </li>
                <li>
                  <a href="#" className="inline-block p-4 hover:text-primary">Contact</a>
                </li>
              </ul>
              <button className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300">
                Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
              </button>
              {/* Muncul bar pada ukuran dibawah sm */}
              <div className="sm:hidden">
                <button onClick={toggleMenu}>
                  {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </button>
              </div>
            </div>
          </div>   
        </div>
      </div> 
      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 dark:text-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <a href="#" className="inline-block p-2 hover:text-primary">Home</a>
            </li>
            <li>
              <a href="#" className="inline-block p-2 hover:text-primary">About</a>
            </li>
            <li>
              <a href="#" className="inline-block p-2 hover:text-primary">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
