import React, { useState } from "react";
import s from "./PizzaModal.module.scss";

import Brynza from "../../../public/items/additionalIngredients/Brynza.png";
import CheeseCrust from "../../../public/items/additionalIngredients/CheeseCrust.png";
import Chicken from "../../../public/items/additionalIngredients/Chicken.png";
import HotJalapeno from "../../../public/items/additionalIngredients/HotJalapeno.png";
import Mushrooms from "../../../public/items/additionalIngredients/Mushrooms.png";
import SpicyChicken from "../../../public/items/additionalIngredients/SpicyChicken.png";

import { Button } from "../../ui/Button/Button";
export const PizzaModal = ({}) => {
  const [size, setSize] = useState("medium");
  const [dough, setDough] = useState("traditional");
  const [additional, setAdditional] = useState([]);




  return (
    <div className={s.modal}>
      <div className={s.modalContent}>
        <div className={s.pizzaImageContainer}>
          <div className={s.pizzaImageBig}>
            <div className={s.pizzaImageMedium}>
              <div className={s.pizzaImageSmall}></div>
            </div>
          </div>
        </div>
        <div className={s.pizzaOptions}>
          <h2>Чиззи чеддер</h2>
          <p>30 см, традиционное тесто, 480 г</p>
          <div className={s.ingredients}>
            <p>
              Ветчина ❌, сыр чеддер, сладкий перец ❌, моцарелла, томатный
              соус, чеснок, итальянские травы
            </p>
          </div>

          <div className={s.optionSelector}>
            <label
              className={size === "small" ? s.active : ""}
              onClick={() => setSize("small")}
            >
              <input type="radio" name="size" value="small" /> Маленькая
            </label>
            <label
              className={size === "medium" ? s.active : ""}
              onClick={() => setSize("medium")}
            >
              <input type="radio" name="size" value="medium" /> Средняя
            </label>
            <label
              className={size === "large" ? s.active : ""}
              onClick={() => setSize("large")}
            >
              <input type="radio" name="size" value="large" /> Большая
            </label>
          </div>

          <div className={s.doughSelection}>
            <label
              className={dough === "traditional" ? s.active : ""}
              onClick={() => setDough("traditional")}
            >
              <input type="radio" name="dough" value="traditional" />
              Традиционное
            </label>
            <label
              className={dough === "thin" ? s.active : ""}
              onClick={() => setDough("thin")}
            >
              <input type="radio" name="dough" value="thin" /> Тонкое
            </label>
          </div>
         <h3>Добавить в пиццу</h3> <div className={s.additionalIngredients}>
            

            <label>
              <input type="checkbox" name="extra" value="CheeseCrust" />
              <img src={CheeseCrust} alt="CheeseCrust" />
              <p>Сырный бортик<span>599 ₽</span></p>
            </label>
            <label>
              <input type="checkbox" name="extra" value="CheeseCrust" />
              <img src={Mushrooms} alt="Mushrooms" />
              <p>Шампиньоны<span>39 ₽</span></p>
            </label>
            <label>
              <input type="checkbox" name="extra" value="CheeseCrust" />
              <img src={Chicken} alt="Chicken" />
              <p>Цыпленок<span>59 ₽</span></p>
            </label>
            <label>
              <input type="checkbox" name="extra" value="CheeseCrust" />
              <img src={Brynza} alt="Brynza" />
              <p>Брынза<span>59 ₽</span></p>
            </label>
            <label>
              <input type="checkbox" name="extra" value="CheeseCrust" />
              <img src={HotJalapeno} alt="HotJalapeno" />
              <p>Острый халапенью<span>39 ₽</span></p>
            </label>
            <label>
              <input type="checkbox" name="extra" value="CheeseCrust" />
              <img src={SpicyChicken} alt="SpicyChicken" />
              <p>Острый цыпленок<span>59 ₽</span></p>
            </label>
          </div>
          <Button text="Добавить в корзину" />
        </div>
      </div>
    </div>
  );
};
