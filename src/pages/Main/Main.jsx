import { useNavigate } from "react-router-dom";
import { Header } from "../../sections/Header";

import s from "./Main.module.scss";

export const Main = () => {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
      <h1 onClick={() => navigate("/OrderAccepted")}>HALLO WORLD</h1>
    </>
  );
};
