import React, { useState, useRef } from "react";
import s from "./PizzaModal.module.scss";

import Brynza from "../../../public/items/additionalIngredients/Brynza.png";
import CheeseCrust from "../../../public/items/additionalIngredients/CheeseCrust.png";
import Chicken from "../../../public/items/additionalIngredients/Chicken.png";
import HotJalapeno from "../../../public/items/additionalIngredients/HotJalapeno.png";
import Mushrooms from "../../../public/items/additionalIngredients/Mushrooms.png";
import SpicyChicken from "../../../public/items/additionalIngredients/SpicyChicken.png";
import check from "../../../public/check-circle.svg";
import { Button } from "../../ui/Button/Button";


//на уровне Main константа "выбранный товар" - false
// поменяется на название карточки
export const PizzaModal = ({test, onClick, selectedItem}) => {
  //const [isModalOpen, setIsModalOpen] = useState({test});
  const [size, setSize] = useState("medium");
  const [dough, setDough] = useState("traditional");
  const [additional, setAdditional] = useState([]);

  //флаговое состояние
  const isChanged = useRef(false);

  const toggleAdditional = (el) => {
    if (isChanged.current) return; // если у isChanged есть правдивое значение
    isChanged.current = true;

    console.log(additional);
    if (additional.includes(el)) {
      // eсли ингредиент уже выбран - удалить

      setAdditional(additional.filter((item) => item !== el));
    } else {
      // если ингредиент не выбран
      setAdditional([...additional, el]);

    }

    setTimeout(() => (isChanged.current = false), 0); //абсолютно параллельное выполнение
  };

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };
  
  // if(test){
  //   console.log("!!!!!!")
  // }

  return (
    <>
      <div className="App">
        {/* <button className="btn" onClick={toggleModal}>
          Открыть модальное окно
        </button> */}

        {test && (
          <div className={s.modal}>
            <div className={s.modalContent}>
              <button onClick={onClick}>❌</button>
              <div className={s.pizzaImageContainer}>
                <div className={s.pizzaImageBig}>
                  <div className={s.pizzaImageMedium}>
                    <div className={s.pizzaImageSmall}></div>
                  </div>
                </div>
              </div>
              <div className={s.pizzaOptions}>
                <div className={s.menu}>
                  <h2 className={s.margin}>{selectedItem.name}</h2>
                  <p className={s.margin}>{selectedItem.description}</p>
                  <div className={`${s.ingridients} ${s.margin}`}>
                    <p>
                      {" "}
                       Ветчина ❌, сыр
                      чеддер, сладкий перец ❌, моцарелла, томатный соус,
                      чеснок, итальянские травы
                    </p>
                  </div>
                  <div className={`${s.optionSelector} ${s.margin}`}>
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
                  <div className={`${s.doughSelection} ${s.margin}`}>
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
                  <h3 className={s.margin}>Добавить в пиццу</h3>
                  <div className={s.additionalIngredients}>
                    <label
                      onClick={() => toggleAdditional("CheeseCrust")}
                      className={
                        additional.includes("CheeseCrust") ? s.selected : ""
                      }
                    >
                      <img className={s.check} src={check} />
                      <input type="checkbox" name="extra" value="CheeseCrust" />
                      <img
                        className={s.extra}
                        src={CheeseCrust}
                        alt="CheeseCrust"
                      />
                      <p className={s.description}>
                        Сырный бортик<span>599 ₽</span>
                      </p>
                    </label>

                    <label
                      className={
                        additional.includes("Mushrooms") ? s.selected : ""
                      }
                      onClick={() => toggleAdditional("Mushrooms")}
                    >
                      <img className={s.check} src={check} />
                      <input type="checkbox" name="extra" value="Mushrooms" />
                      <img src={Mushrooms} alt="Mushrooms" />
                      <p className={s.description}>
                        Шампиньоны<span>39 ₽</span>
                      </p>
                    </label>

                    <label
                      className={
                        additional.includes("Chicken") ? s.selected : ""
                      }
                      onClick={() => toggleAdditional("Chicken")}
                    >
                      <img className={s.check} src={check} />
                      <input type="checkbox" name="extra" value="Chicken" />
                      <img src={Chicken} alt="Chicken" />
                      <p className={s.description}>
                        Цыпленок<span>59 ₽</span>
                      </p>
                    </label>
                    <label
                      className={
                        additional.includes("Brynza") ? s.selected : ""
                      }
                      onClick={() => toggleAdditional("Brynza")}
                    >
                      <img className={s.check} src={check} />
                      <input type="checkbox" name="extra" value="Brynza" />
                      <img src={Brynza} alt="Brynza" />
                      <p className={s.description}>
                        Брынза<span>59 ₽</span>
                      </p>
                    </label>
                    <label
                      className={
                        additional.includes("HotJalapeno") ? s.selected : ""
                      }
                      onClick={() => toggleAdditional("HotJalapeno")}
                    >
                      <img className={s.check} src={check} />
                      <input type="checkbox" name="extra" value="HotJalapeno" />
                      <img src={HotJalapeno} alt="HotJalapeno" />
                      <p className={s.description}>
                        Острый халапенью<span>39 ₽</span>
                      </p>
                    </label>
                    <label
                      className={
                        additional.includes("SpicyChicken") ? s.selected : ""
                      }
                      onClick={() => toggleAdditional("SpicyChicken")}
                    >
                      <img className={s.check} src={check} />
                      <input
                        type="checkbox"
                        name="extra"
                        value="SpicyChicken"
                      />
                      <img src={SpicyChicken} alt="SpicyChicken" />
                      <p className={s.description}>
                        Острый цыпленок<span>59 ₽</span>
                      </p>
                    </label>
                  </div>
                </div>
                <div className={s.buttonBox}>
                  <Button text="Добавить в корзину" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
