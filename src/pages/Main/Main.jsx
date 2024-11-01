import { useNavigate } from "react-router-dom";
import { Header } from "../../sections/Header";
import s from "./Main.module.scss";
import ProductCard from "../../ui/ProductCard/ProductCard";
import Picture from "../../assets/img/image-3-pizza.jpg";


export const Main = () => {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
    </>
  );
};
