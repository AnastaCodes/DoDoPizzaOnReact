import { useNavigate } from "react-router-dom";
import { Header } from "../../sections/Header";
import { Button } from "../../ui/Button/Button";
import { ImageSlider } from "../../sections/ImageSlider/ImageSlider";

export const Main = () => {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
    <ImageSlider/>
      <h1 onClick={() => navigate("/OrderAccepted")}>navigate</h1>
      <Button text = 'text' type = 'secondary' />

    </>
  );
};
