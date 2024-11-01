import s from "./AdditionalCard.module.scss";

export const AdditionalCard = ({name, img, price}) => {
  return (
    <div className={s.card}>
      <img className={s.image} src={img} />
      <div>
        <p>{name}
        <span>oт {price}</span></p>
      </div>
    </div>
  );
};


//контейнер, шрифт, 