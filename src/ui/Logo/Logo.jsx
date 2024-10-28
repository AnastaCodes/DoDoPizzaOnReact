import s from "./Logo.module.scss";
import img from "../../../public/logo.png";

export const Logo = () => {
  return (
    <div className={s.logo}>
      <img className={s.image} src={img} />
      <p className={s.signature}>
        Додо пицца<span>Сеть пиццерий №1 в России</span>
      </p>
    </div>
  );
};
