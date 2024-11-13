import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";

import { Header } from "../../sections/Header";
import { ImageSlider } from "../../sections/ImageSlider/ImageSlider";
import { Additional } from "../../sections/Additional/Additional";
import { Category } from '../../sections/Category/Category'
import { Footer } from '../../sections/Footer/Footer'
import { PizzaModal } from '../../components/PizzaModal/PizzaModal'


import s from "./Main.module.scss";


export const Main = () => {
  // const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("test");

  const toggleModal = (el) => {
    setIsModalOpen(!isModalOpen);
    // setSelectedItem(el.target)
    setSelectedItem("test")
   // console.log(el)
    console.log(selectedItem)
  };

  return (
    <>
    <Header/>
    <ImageSlider/>
    <Additional/>
    <Category title = 'Пицца' type = 'pizza' onClick={(el)=> toggleModal(el)} />
    <Category title = 'Комбо' type = 'combo'/>
    <Category title = 'Закуски' type = 'appetizers'/>
    <Category title = 'Десерты' type = 'desserts'/>
    <Category title = 'Напитки' type = 'drinks'/>
    <Footer />
    <PizzaModal test={isModalOpen} onClick={()=> toggleModal()} /> 
    </>
  );
};
