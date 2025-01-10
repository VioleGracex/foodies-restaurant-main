import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Вкусняшка
            </h1>
            <p>
              Мы предлагаем лучшие блюда для каждого случая. Вкусно, свежо, с
              любовью.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Москва, Россия</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+7 123 456 78 90</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://www.facebook.com/">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Важные ссылки
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Главная</li>
                  <li className="cursor-pointer">О нас</li>
                  <li className="cursor-pointer">Меню</li>
                  <li className="cursor-pointer">Контакты</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Поддержка
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Часто задаваемые вопросы</li>
                  <li className="cursor-pointer">Обратная связь</li>
                  <li className="cursor-pointer">Политика конфиденциальности</li>
                  <li className="cursor-pointer">Условия использования</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Контакты
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Адрес: Москва, ул. Пушкина, д. 10</li>
                  <li className="cursor-pointer">Телефон: +7 123 456 78 90</li>
                  <li className="cursor-pointer">Email: info@vkusnyashka.ru</li>
                  <li className="cursor-pointer">Часы работы: 9:00 - 21:00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2025 Все права защищены
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
