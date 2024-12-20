import s from "./Header.module.scss";
import { Logo } from "../../ui/Logo/Logo";
import { Button } from "../../ui/Button/Button";
import { Container } from "../../components/Container/Container.jsx";

export const Header = () => {
  return (
    <Container >
    <div className={s.header}>
      <div className={s.firstBlock} >
        <Logo />
        <div className={s.navigation} >
          <a href="#pizza">Пицца</a>
          <a href="#combo">Комбо</a>
          <a href="#snacks">Закуски</a>
          <a href="#desserts">Десерты</a>
          <a href="#drinks">Напитки</a>
          <a href="#other">Другие товары</a>
        </div>
      </div>
      <div className={s.secondBlock} >
        <div className={s.call}>
          <a href="88003020060">8 800 302-00-60</a>
          <span>Звонок бесплатный</span>
        </div>
        <Button 
        text={"Корзина"}
        type={"primary"}
        />
      </div>
    </div>
    </Container>
  );
};
