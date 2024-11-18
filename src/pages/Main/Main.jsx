import React, { useState, useRef } from "react";

import { Header } from "../../sections/Header";
import { ImageSlider } from "../../sections/ImageSlider/ImageSlider";
import { Additional } from "../../sections/Additional/Additional";
import { Category } from "../../sections/Category/Category";
import { Footer } from "../../sections/Footer/Footer";
import { PizzaModal } from "../../components/PizzaModal/PizzaModal";
import { data } from "../../data";

export const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleModal = (name) => {
    const item = findItemByName(name)
    setIsModalOpen(!isModalOpen);
    setSelectedItem(item);
    console.log(item)
  };

  const findItemByName = (name) => {
    for (const category of data) {
      const item = category.items.find((item) => item.name === name);
      if (item) return item;
    }
    return null;
  };

  return (
    <>
      <Header />
      <ImageSlider />
      <Additional />
      <Category
        title="Пицца"
        type="pizza"
        onClick={(name) => toggleModal(name)}
      />
      <Category title="Комбо" type="combo" />
      <Category title="Закуски" type="appetizers" />
      <Category title="Десерты" type="desserts" />
      <Category title="Напитки" type="drinks" />
      <Footer />
      <PizzaModal
        test={isModalOpen}
        onClick={() => toggleModal(null)}
        selectedItem={selectedItem}
      />
    </>
  );
};
