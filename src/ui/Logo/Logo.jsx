import s from "./Logo.module.scss";
import img from "../../../public/logo.png";
import { Button } from "../Button/Button";

export const Logo = () => {
  return(
<div className={s.logo}>
    <img className={s.image} src={img} />
    <p className={s.signature}>
      Додо пицца<span>Сеть пиццерий №1 в России</span>
    </p>

    <div className="navigation">
        <a href="#pizza">Пицца</a>
        <a href="#combo">Комбо</a>
        <a href="#snacks">Закуски</a>
        <a href="#desserts">Десерты</a>
        <a href="#drinks">Напитки</a>
        <a href="#other">Другие товары</a>
    </div>
    <div className=""><a href="88003020060">8 800 302-00-60</a>
    Звонок бесплатный</div>
  </div>


  )
  
};
