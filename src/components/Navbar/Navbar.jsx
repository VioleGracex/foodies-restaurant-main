import React, { useState, useEffect } from "react";
import Logo from "../../assets/food-logo.png";
import { FaCartShopping, FaArrowUp } from "react-icons/fa6"; // Импорт иконки FaArrowUp
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Главная",
    link: "/#",
  },
  {
    id: 2,
    name: "Услуги",
    link: "/#services",
  },
  {
    id: 3,
    name: "О нас",
    link: "/#about",
  },
];

const Navbar = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 200); // Показывать кнопку при прокрутке на 200px
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Логотип" className="w-10" />
                Вкусняшка
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-yellow-500"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">
                Заказать
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Кнопка для прокрутки вверх */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-orange-500 transition-all"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Navbar;
