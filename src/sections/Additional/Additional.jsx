import { AdditionalCard } from "../../ui/AdditionalCard/AdditionalCard";
import { data } from "../../data.js";
import { Container } from "../../components/Container/Container.jsx";
import s from "./Additional.module.scss";

export const Additional = () => {
  const pizza = data.filter((item) => item.type === "pizza");

  return (
    <Container>
      <h2>Новое и популярное</h2>
      <Container scrollbar={true}>
        <div className={s.items}>
          {pizza[0].items.slice(0, 4).map((el, index) => (
            <AdditionalCard
              key={index}
              name={el.name}
              img={el.middle.img}
              price={el.small.price}
            />
          ))}
        </div>
      </Container>
    </Container>
  );
};
