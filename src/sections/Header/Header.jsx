import s from "./Header.module.scss";
import { Logo } from "../../ui/Logo/Logo";


export const Header = () => {
  return (
    <div>
      <Logo />
      <div className="navigation">
        <a href="#pizza">Пицца</a>
        <a href="#combo">Комбо</a>
        <a href="#snacks">Закуски</a>
        <a href="#desserts">Десерты</a>
        <a href="#drinks">Напитки</a>
        <a href="#other">Другие товары</a>
      </div>
      <div className="">
        <a href="88003020060">8 800 302-00-60</a>
        Звонок бесплатный
      </div>

    </div>
  );
};
