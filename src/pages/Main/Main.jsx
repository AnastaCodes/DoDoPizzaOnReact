import { useNavigate } from "react-router-dom";
import { Header } from "../../sections/Header";
import { Button } from "../../ui/Button/Button";
import { ImageSlider } from "../../sections/ImageSlider/ImageSlider";
import { Additional } from "../../sections/Additional/Additional";

import s from "./Main.module.scss";


export const Main = () => {
  const navigate = useNavigate();
  return (
    <>
    <Header/>

    <ImageSlider/>
    <Additional/>
      <h1 onClick={() => navigate("/OrderAccepted")}>navigate</h1>
      <Button text = 'text' type = 'secondary' />
    </>
  );
};
