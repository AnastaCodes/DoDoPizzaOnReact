import { useNavigate } from "react-router-dom";
import { Header } from "../../sections/Header";
import { ImageSlider } from "../../sections/ImageSlider/ImageSlider";
import { Additional } from "../../sections/Additional/Additional";
import { Category } from '../../sections/Category/Category'
import { Footer } from '../../sections/Footer/Footer'
import { PizzaModal } from '../../components/PizzaModal/PizzaModal'


import s from "./Main.module.scss";


export const Main = () => {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
    <ImageSlider/>
    <Additional/>
    <Category title = 'Пицца' type = 'pizza'/>
    <Category title = 'Комбо' type = 'combo'/>
    <Category title = 'Закуски' type = 'appetizers'/>
    <Category title = 'Десерты' type = 'desserts'/>
    <Category title = 'Напитки' type = 'drinks'/>
    <Footer />
    {/* <PizzaModal /> */}
    </>
  );
};
